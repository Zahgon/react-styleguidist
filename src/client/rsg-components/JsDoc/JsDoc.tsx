import React from 'react';
import PropTypes from 'prop-types';
import { TagProps, TagObject } from 'react-docgen';
import map from 'lodash/map';
import Markdown from 'rsg-components/Markdown';

const plural = (array: TagObject[], caption: string) =>
	array.length === 1 ? caption : `${caption}s`;
const list = (array: TagObject[]) => array.map(item => { throw new Error("STUB"); }).join(', ');
const paragraphs = (array: TagObject[]) => array.map(item => { throw new Error("STUB"); }).join('\n\n');

const fields = {
	deprecated: (value: TagObject[]) => { throw new Error("STUB"); },
	see: (value: TagObject[]) => { throw new Error("STUB"); },
	link: (value: TagObject[]) => { throw new Error("STUB"); },
	author: (value: TagObject[]) => { throw new Error("STUB"); },
	version: (value: TagObject[]) => { throw new Error("STUB"); },
	since: (value: TagObject[]) => { throw new Error("STUB"); },
};

export function getMarkdown(props: TagProps) {
    throw new Error("STUB");
}

export default function JsDoc(props: TagProps) {
    throw new Error("STUB");
}

JsDoc.propTypes = {
	deprecated: PropTypes.array,
	see: PropTypes.array,
	link: PropTypes.array,
	author: PropTypes.array,
	version: PropTypes.array,
	since: PropTypes.array,
};
