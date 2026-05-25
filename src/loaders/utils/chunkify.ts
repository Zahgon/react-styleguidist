import remark from 'remark';
import visit from 'unist-util-visit';
import highlightCode from './highlightCode';
import parseExample, { ExampleError } from './parseExample';
import * as Rsg from '../../typings';

const PLAYGROUND_LANGS = ['javascript', 'js', 'jsx', 'typescript', 'ts', 'tsx'];
const CODE_PLACEHOLDER = '<%{#code#}%>';

function isErrorExample(example: any): example is ExampleError {
    throw new Error("STUB");
}

/**
 * Separate Markdown and code examples that should be rendered as a playground in a style guide.
 *
 * @param {string} markdown
 * @param {Function} updateExample
 * @param {Array<string>} playgroundLangs
 * @returns {Array}
 */
export default function chunkify(
	markdown: string,
	updateExample?: (example: Omit<Rsg.CodeExample, 'type'>) => Omit<Rsg.CodeExample, 'type'>,
	playgroundLangs = PLAYGROUND_LANGS
): (Rsg.CodeExample | Rsg.MarkdownExample)[] {
    throw new Error("STUB");
}
