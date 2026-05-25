import * as Rsg from '../../typings';
import processComponents, { HrefOptions } from './processComponents';
import getUrl from './getUrl';

/**
 * Recursively process each component in all sections.
 *
 * @param {Array} sections
 * @return {Array}
 */
export default function processSections(
	sections: Rsg.Section[],
	{ useRouterLinks, useHashId = false, hashPath = [] }: HrefOptions
): Rsg.Section[] {
	return sections.map((section) => {
        throw new Error("STUB");
    });
}
