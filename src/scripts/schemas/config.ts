// If you want to access any of these options in React, don’t forget to update CLIENT_CONFIG_OPTIONS array
// in loaders/styleguide-loader.js

import glogg from 'glogg';
import path from 'path';
import startCase from 'lodash/startCase';
import kleur from 'kleur';
import * as reactDocgen from 'react-docgen';
import { TransformOptions } from 'buble';
import { createDisplayNameHandler } from 'react-docgen-displayname-handler';
import annotationResolver from 'react-docgen-annotation-resolver';
import { ASTNode } from 'ast-types';
import { NodePath } from 'ast-types/lib/node-path';
import findUserWebpackConfig from '../utils/findUserWebpackConfig';
import getUserPackageJson from '../utils/getUserPackageJson';
import fileExistsCaseInsensitive from '../utils/findFileCaseInsensitive';
import StyleguidistError from '../utils/error';
import * as consts from '../consts';
import * as Rsg from '../../typings';

const EXTENSIONS = 'js,jsx,ts,tsx';
const DEFAULT_COMPONENTS_PATTERN =
	// HACK: on windows, the case insensitivity makes each component appear twice
	// to avoid this issue, the case management is removed on win32
	// it virtually changes nothing
	process.platform === 'win32'
		? /* istanbul ignore next: no windows on our test plan */ `src/components/**/*.{${EXTENSIONS}}`
		: `src/@(components|Components)/**/*.{${EXTENSIONS}}`;

const logger = glogg('rsg');

type NestedThemeValue = Record<string, unknown> | string;

export type StyleguidistConfigKey = keyof Rsg.SanitizedStyleguidistConfig;

export interface ConfigSchemaOptions<T> {
	process?(value: any, config: T, rootDir: string): any;
	default?: any;
	required?: boolean | ((config?: T) => string | boolean);
	deprecated?: string;
	removed?: string;
	type?: string | string[];
	example?: any;
}

const configSchema: Record<StyleguidistConfigKey, ConfigSchemaOptions<Rsg.StyleguidistConfig>> = {
	assetsDir: {
		type: ['array', 'existing directory path'],
		example: 'assets',
	},
	tocMode: {
		type: 'string',
		default: 'expand',
	},
	compilerConfig: {
		type: 'object',
		default: {
			// Don't include an Object.assign ponyfill, we have our own
			objectAssign: 'Object.assign',
			// Transpile only features needed for IE11
			target: { ie: 11 },
			transforms: {
				// Don't throw on ESM imports, we transpile them ourselves
				modules: false,
				// Enable tagged template literals for styled-components
				dangerousTaggedTemplateString: true,
				// to make async/await work by default (no transformation)
				asyncAwait: false,
			},
		} as TransformOptions,
	},
	// `components` is a shortcut for { sections: [{ components }] },
	// see `sections` below
	components: {
		type: ['string', 'function', 'array'],
		example: 'components/**/[A-Z]*.js',
	},
	configDir: {
		process: (value: string, config: Rsg.StyleguidistConfig, rootDir: string): string => { throw new Error("STUB"); },
	},
	context: {
		type: 'object',
		default: {},
		example: {
			map: 'lodash/map',
		},
	},
	contextDependencies: {
		type: 'array',
	},
	configureServer: {
		type: 'function',
	},
	dangerouslyUpdateWebpackConfig: {
		type: 'function',
	},
	defaultExample: {
		type: ['boolean', 'existing file path'],
		default: false,
		process: (val: boolean | string): string | boolean =>
			{ throw new Error("STUB"); },
	},
	exampleMode: {
		type: 'string',
		process: (value: string, config: Rsg.StyleguidistConfig): string => {
            throw new Error("STUB");
        },
		default: 'collapse',
	},
	getComponentPathLine: {
		type: 'function',
		default: (componentPath: string): string => { throw new Error("STUB"); },
	},
	getExampleFilename: {
		type: 'function',
		default: (componentPath: string): string | boolean => {
            throw new Error("STUB");
        },
	},
	handlers: {
		type: 'function',
		default: (componentPath: string): reactDocgen.Handler[] =>
			{ throw new Error("STUB"); },
	},
	ignore: {
		type: 'array',
		default: [
			'**/__tests__/**',
			`**/*.test.{${EXTENSIONS}}`,
			`**/*.spec.{${EXTENSIONS}}`,
			'**/*.d.ts',
		],
	},
	editorConfig: {
		process: (value?: unknown): void => {
            throw new Error("STUB");
        },
	},
	logger: {
		type: 'object',
	},
	minimize: {
		type: 'boolean',
		default: true,
	},
	moduleAliases: {
		type: 'object',
	},
	mountPointId: {
		type: 'string',
		default: 'rsg-root',
	},
	pagePerSection: {
		type: 'boolean',
		default: false,
	},
	previewDelay: {
		type: 'number',
		default: 500,
	},
	printBuildInstructions: {
		type: 'function',
	},
	printServerInstructions: {
		type: 'function',
	},
	propsParser: {
		type: 'function',
	},
	require: {
		type: 'array',
		default: [],
		example: ['babel-polyfill', 'path/to/styles.css'],
	},
	resolver: {
		type: 'function',
		default: (
			ast: ASTNode,
			recast: {
				visit: (
					node: NodePath,
					handlers: { [handlerName: string]: () => boolean | undefined }
				) => void;
			}
		) => {
            throw new Error("STUB");
        },
	},
	ribbon: {
		type: 'object',
		example: {
			url: 'http://example.com/',
			text: 'Fork me on GitHub',
		},
	},
	sections: {
		type: 'array',
		default: [],
		process: (val: Rsg.ConfigSection[], config: Rsg.StyleguidistConfig): Rsg.ConfigSection[] => {
            throw new Error("STUB");
        },
		example: [
			{
				name: 'Documentation',
				content: 'Readme.md',
			},
			{
				name: 'Components',
				components: './lib/components/**/[A-Z]*.js',
			},
		],
	},
	serverHost: {
		type: 'string',
		default: '0.0.0.0',
	},
	serverPort: {
		type: 'number',
		default: parseInt(process.env.NODE_PORT as string) || 6060,
	},
	showCode: {
		type: 'boolean',
		default: false,
		deprecated: 'Use exampleMode option instead',
	},
	showUsage: {
		type: 'boolean',
		default: false,
		deprecated: 'Use usageMode option instead',
	},
	showSidebar: {
		type: 'boolean',
		default: true,
	},
	skipComponentsWithoutExample: {
		type: 'boolean',
		default: false,
	},
	sortProps: {
		type: 'function',
	},
	styleguideComponents: {
		type: 'object',
	},
	styleguideDir: {
		type: 'directory path',
		default: 'styleguide',
	},
	styles: {
		type: ['object', 'existing file path', 'function'],
		default: {},
		example: {
			Logo: {
				logo: {
					fontStyle: 'italic',
				},
			},
		},
		process: (val: NestedThemeValue, config: unknown, configDir: string): NestedThemeValue => {
            throw new Error("STUB");
        },
	},
	template: {
		type: ['object', 'function'],
		default: {},
		process: (val: any) => {
            throw new Error("STUB");
        },
	},
	theme: {
		type: ['object', 'existing file path'],
		default: {},
		example: {
			link: 'firebrick',
			linkHover: 'salmon',
		},
		process: (val: NestedThemeValue, config: unknown, configDir: string): NestedThemeValue =>
			{ throw new Error("STUB"); },
	},
	title: {
		type: 'string',
		process: (val?: string): string => {
            throw new Error("STUB");
        },
		example: 'My Style Guide',
	},
	updateDocs: {
		type: 'function',
	},
	updateExample: {
		type: 'function',
		default: (props: { lang: string }): { lang: string } => {
            throw new Error("STUB");
        },
	},
	updateWebpackConfig: {
		type: 'function',
		removed: `Use "webpackConfig" option instead:\n${consts.DOCS_WEBPACK}`,
	},
	usageMode: {
		type: 'string',
		process: (value: string, config: Rsg.StyleguidistConfig) => {
            throw new Error("STUB");
        },
		default: 'collapse',
	},
	verbose: {
		type: 'boolean',
		default: false,
	},
	version: {
		type: 'string',
	},
	webpackConfig: {
		type: ['object', 'function'],
		process: (val?: any) => {
            throw new Error("STUB");
        },
		example: {
			module: {
				rules: [
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
				],
			},
		},
	},
};

export default configSchema;
