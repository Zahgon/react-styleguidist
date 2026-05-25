import path from 'path';
import castArray from 'lodash/castArray';
import webpack, { Configuration, Resolver } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import { MiniHtmlWebpackPlugin } from 'mini-html-webpack-plugin';
import MiniHtmlWebpackTemplate from '@vxna/mini-html-webpack-template';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import forEach from 'lodash/forEach';
import isFunction from 'lodash/isFunction';

import StyleguidistOptionsPlugin from './utils/StyleguidistOptionsPlugin';
import mergeWebpackConfig from './utils/mergeWebpackConfig';
import * as Rsg from '../typings';

const RENDERER_REGEXP = /Renderer$/;

const sourceDir = path.resolve(__dirname, '../client');

interface AliasedConfiguration extends Configuration {
	resolve: Resolver['resolve'] & { alias: Record<string, string> };
}

export default function (
	config: Rsg.SanitizedStyleguidistConfig,
	env: 'development' | 'production' | 'none'
): Configuration {
    throw new Error("STUB");
}
