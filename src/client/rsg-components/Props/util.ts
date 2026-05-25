import { PropDescriptor as BasePropDescriptor, PropTypeDescriptor } from 'react-docgen';

/**
 * Remove quotes around given string.
 */
export function unquote(string?: string): string | undefined {
    throw new Error("STUB");
}

export interface PropDescriptor extends BasePropDescriptor {
	flowType?: TypeDescriptor;
	tsType?: TypeDescriptor;
}

/**
 * Return prop type object.
 *
 * @param {object} prop
 * @returns {object}
 */
export function getType(prop: PropDescriptor): PropTypeDescriptor | TypeDescriptor | undefined {
    throw new Error("STUB");
}

/**
 * Show starting and ending whitespace around given string.
 */
export function showSpaces(string?: string): string | undefined {
    throw new Error("STUB");
}

export interface TypeEnumDescriptor {
	name: 'enum';
	type: string;
	value: TypeDescriptor[];
}

interface TypeLiteralDescriptor {
	name: 'literal';
	type: string;
	value: string;
}

interface TypeSignatureDescriptor {
	name: 'signature';
	type: string;
	raw: string;
	value: string;
}

interface TypeUnionDescriptor {
	name: 'union' | 'tuple';
	elements: TypeDescriptor[];
	type: string;
	raw: string;
	value?: string;
}

export type TypeDescriptor =
	| TypeEnumDescriptor
	| TypeLiteralDescriptor
	| TypeSignatureDescriptor
	| TypeUnionDescriptor;
