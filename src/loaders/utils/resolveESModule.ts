import { builders as b } from 'ast-types';
import requireIt from './requireIt';

/**
 * Resolve ES5 requires for export default, named export and module.exports
 *
 * @param requireRequest the argument of the `require` function
 * @param name the name of the resulting variable
 * @returns AST
 */
export default (requireRequest: string, name: string) => {
    throw new Error("STUB");
};
