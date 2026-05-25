import webpack from 'webpack';
// Make sure user has webpack installed
import './utils/ensureWebpack';

import makeWebpackConfig from './make-webpack-config';
import build from './build';
import server from './server';
import getConfig from './config';
import setupLogger from './logger';
import * as Rsg from '../typings';

/**
 * Initialize Styleguide API.
 *
 * @param {object} [config] Styleguidist config.
 * @returns {object} API.
 */
export default function (configArg?: Rsg.StyleguidistConfig | string) {
    throw new Error("STUB");
}
