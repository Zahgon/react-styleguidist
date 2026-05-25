import lowercaseKeys from 'lowercase-keys';
import { DOCS_DOCUMENTING } from '../../scripts/consts';
import * as Rsg from '../../typings';

const hasStringModifiers = (modifiers: string): boolean => { throw new Error("STUB"); };

export interface ExampleError {
	error: string;
}
/**
 * Split fenced code block header to lang and modifiers, parse modifiers, lowercase modifier keys, etc.
 */
export default function parseExample(
	content: string,
	lang?: string | null,
	modifiers?: string,
	updateExample: (example: Omit<Rsg.CodeExample, 'type'>) => Omit<Rsg.CodeExample, 'type'> = x => { throw new Error("STUB"); }
): Omit<Rsg.CodeExample, 'type'> | ExampleError {
    throw new Error("STUB");
}
