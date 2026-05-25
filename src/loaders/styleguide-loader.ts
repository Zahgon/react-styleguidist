import pick from 'lodash/pick';
import flatten from 'lodash/flatten';
import { namedTypes as t, builders as b } from 'ast-types';
import commonDir from 'common-dir';
import { generate } from 'escodegen';
import toAst from 'to-ast';
import createLogger from 'glogg';
import * as fileExistsCaseInsensitive from '../scripts/utils/findFileCaseInsensitive';
import getAllContentPages from './utils/getAllContentPages';
import getComponentFilesFromSections from './utils/getComponentFilesFromSections';
import getComponentPatternsFromSections from './utils/getComponentPatternsFromSections';
import getSections from './utils/getSections';
import filterComponentsWithExample from './utils/filterComponentsWithExample';
import slugger from './utils/slugger';
import resolveESModule from './utils/resolveESModule';
import * as Rsg from '../typings';

const logger = createLogger('rsg');

// Config options that should be passed to the client
const CLIENT_CONFIG_OPTIONS = [
	'compilerConfig',
	'tocMode',
	'mountPointId',
	'pagePerSection',
	'previewDelay',
	'ribbon',
	'showSidebar',
	'styles',
	'theme',
	'title',
	'version',
];

const STYLE_VARIABLE_NAME = '__rsgStyles';
const THEME_VARIABLE_NAME = '__rsgTheme';

export default function() {
    throw new Error("STUB");
}
export function pitch(this: Rsg.StyleguidistLoaderContext) {
    throw new Error("STUB");
}
