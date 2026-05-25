import fs from 'fs';
import path from 'path';
import castArray from 'lodash/castArray';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import isFinite from 'lodash/isFinite';
import map from 'lodash/map';
import listify from 'listify';
import kleur from 'kleur';
import { distance } from 'fastest-levenshtein';
import typeDetect from 'type-detect';
import loggerMaker from 'glogg';
import { stringify } from 'q-i';
import StyleguidistError from './error';
import { ConfigSchemaOptions } from '../schemas/config';

const logger = loggerMaker('rsg');

const typeCheckers: Record<string, (untypedObject: unknown) => boolean> = {
	number: isFinite,
	string: isString,
	boolean: isBoolean,
	array: Array.isArray,
	function: isFunction,
	object: isPlainObject,
	'file path': isString,
	'existing file path': isString,
	'directory path': isString,
	'existing directory path': isString,
};

const typesList = (types: string[]) => { throw new Error("STUB"); };
const shouldBeFile = (types: string[]) => { throw new Error("STUB"); };
const shouldBeDirectory = (types: string[]) => { throw new Error("STUB"); };
const shouldExist = (types: string[]) => { throw new Error("STUB"); };

function isDirectory(pathString: string): boolean {
    throw new Error("STUB");
}

/**
 * Validates and normalizes config.
 *
 * @param {object} config
 * @param {object} schema
 * @param {string} rootDir
 * @return {object}
 */
export default function sanitizeConfig<T extends Record<string, any>>(
	config: T,
	schema: Record<keyof T, ConfigSchemaOptions<T>>,
	rootDir: string
): T {
    throw new Error("STUB");
}
