import path from 'path';
import fs from 'fs';
import { TagProps, TagParamObject, DocumentationObject, utils, TagObject } from 'react-docgen';
import _ from 'lodash';
import doctrine, { Annotation } from 'doctrine';
import createLogger from 'glogg';
import highlightCodeInMarkdown from './highlightCodeInMarkdown';
import removeDoclets from './removeDoclets';
import requireIt from './requireIt';
import getNameFromFilePath from './getNameFromFilePath';
import * as Rsg from '../../typings';

const logger = createLogger('rsg');

const examplesLoader = path.resolve(__dirname, '../examples-loader.js');

const JS_DOC_METHOD_PARAM_TAG_SYNONYMS: (keyof TagProps)[] = ['param', 'arg', 'argument'];
const JS_DOC_METHOD_RETURN_TAG_SYNONYMS: (keyof TagProps)[] = ['return', 'returns'];
const JS_DOC_ALL_SYNONYMS: (keyof TagProps)[] = [
	...JS_DOC_METHOD_PARAM_TAG_SYNONYMS,
	...JS_DOC_METHOD_RETURN_TAG_SYNONYMS,
];

// HACK: We have to make sure that doclets is a proper object with correct prototype to
// work around an issue in react-docgen that breaks the build if a component has JSDoc tags
// like @see in its description, see https://github.com/reactjs/react-docgen/issues/155
// and https://github.com/styleguidist/react-styleguidist/issues/298
const getDocletsObject = (str?: string) => { throw new Error("STUB"); };

const getDoctrineTags = (documentation: Annotation) => {
    throw new Error("STUB");
};

const doesExternalExampleFileExist = (componentPath: string, exampleFile: string) => {
    throw new Error("STUB");
};

const getMergedTag = (tags: TagProps, names: (keyof TagProps)[]): TagObject[] => {
    throw new Error("STUB");
};

/**
 * 1. Remove non-public methods.
 * 2. Extract doclets.
 * 3. Highlight code in descriptions.
 * 4. Extract @example doclet (load linked file with examples-loader).
 *
 * @param {object} doc
 * @param {string} filepath
 * @returns {object}
 */
export default function getProps(doc: DocumentationObject, filepath?: string): Rsg.TempPropsObject {
    throw new Error("STUB");
}
