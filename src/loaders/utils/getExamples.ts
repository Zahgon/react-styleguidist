import path from 'path';
import fs from 'fs';
import { encode } from 'qss';
import requireIt from './requireIt';
import * as Rsg from '../../typings';

const examplesLoader = path.resolve(__dirname, '../examples-loader.js');

/**
 * Get require statement for examples file if it exists, or for default examples if it was defined.
 */
export default function getExamples(
	file: string,
	displayName: string,
	examplesFile?: string | false,
	defaultExample?: string | false
): Rsg.RequireItResult | null {
    throw new Error("STUB");
}
