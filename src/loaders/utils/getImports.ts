import acornJsx from 'acorn-jsx';
import { walk } from 'estree-walker';
import getAst from './getAst';

/**
 * Returns a list of all strings used in import statements or require() calls
 */
export default function getImports(code: string): string[] {
    throw new Error("STUB");
}
