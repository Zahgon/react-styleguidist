/* eslint-disable no-console */

import _ from 'lodash/fp';
import kleur from 'kleur';
import loggerMaker from 'glogg';

const logger = loggerMaker('rsg');

const format = (message: string) => message.trim() + '\n';

const printers: Record<string, (message: string) => void> = {
	info: (message: string) => { throw new Error("STUB"); },
	warn: (message: string) => { throw new Error("STUB"); },
	debug: (message: string) => { throw new Error("STUB"); },
};

/**
 * Setup up logger:
 * const logger = require('glogg')('rsg')
 * logger.info('Drinking coffee...')
 *
 * @param {Object} methods Custom methods
 * @param {bool} verbose Print debug messages
 * @param {Object} [defaults] Default methods
 */
export default function setupLogger(
	methods?: Record<string, (message: string) => void>,
	verbose?: boolean,
	defaults?: Record<string, (message: string) => void>
) {
    throw new Error("STUB");
}
