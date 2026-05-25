import fs from 'fs';
import path from 'path';
import memoize from 'lodash/memoize';

const readdirSync = memoize(fs.readdirSync);

/**
 * Find a file in a directory, case-insensitive
 *
 * @param {string} filepath
 * @return {string|undefined} File path with correct case
 */
export default function findFileCaseInsensitive(filepath: string): string | undefined {
    throw new Error("STUB");
}

/**
 * Clear cache.
 */
export function clearCache() {
    throw new Error("STUB");
}
