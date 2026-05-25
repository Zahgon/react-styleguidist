// This two functions should be in the same file because of cyclic imports

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import requireIt from './requireIt';
import getComponentFiles from './getComponentFiles';
import getComponents from './getComponents';
import slugger from './slugger';
import * as Rsg from '../../typings';

const examplesLoader = path.resolve(__dirname, '../examples-loader.js');

function processSectionContent(
	section: Rsg.ConfigSection,
	config: Rsg.SanitizedStyleguidistConfig
): Rsg.RequireItResult | Rsg.MarkdownExample | undefined {
    throw new Error("STUB");
}

const getSectionComponents = (
	section: Rsg.ConfigSection,
	config: Rsg.SanitizedStyleguidistConfig
) => {
    throw new Error("STUB");
};

/**
 * Return object for one level of sections.
 *
 * @param {Array} sections
 * @param {object} config
 * @param {number} parentDepth
 * @returns {Array}
 */
export default function getSections(
	sections: Rsg.ConfigSection[],
	config: Rsg.SanitizedStyleguidistConfig,
	parentDepth?: number
): Rsg.LoaderSection[] {
    throw new Error("STUB");
}

/**
 * Return an object for a given section with all components and subsections.
 * @param {object} section
 * @param {object} config
 * @param {number} parentDepth
 * @returns {object}
 */
export function processSection(
	section: Rsg.ConfigSection,
	config: Rsg.SanitizedStyleguidistConfig,
	parentDepth?: number
): Rsg.LoaderSection {
    throw new Error("STUB");
}
