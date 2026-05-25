import fs from 'fs';
import path from 'path';
import findup from 'findup';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';
import schema from './schemas/config';
import StyleguidistError from './utils/error';
import sanitizeConfig from './utils/sanitizeConfig';
import * as Rsg from '../typings';

const CONFIG_FILENAME = 'styleguide.config.js';

/**
 * Try to find config file up the file tree.
 *
 * @return {string|boolean} Config absolute file path.
 */
function findConfigFile(): string | false {
    throw new Error("STUB");
}

/**
 * Read, parse and validate config file or passed config.
 *
 * @param {object|string} [config] All config options or config file name or nothing.
 * @param {function} [update] Change config object before running validation on it.
 * @returns {object}
 */
function getConfig(
	config?: string | Rsg.StyleguidistConfig,
	update?: (conf: Rsg.StyleguidistConfig) => Rsg.StyleguidistConfig
): Rsg.SanitizedStyleguidistConfig {
    throw new Error("STUB");
}

export default getConfig;
