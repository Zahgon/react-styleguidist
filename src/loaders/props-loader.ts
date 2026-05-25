import path from 'path';
import isArray from 'lodash/isArray';
import { Handler, parse, DocumentationObject, PropDescriptor } from 'react-docgen';
import { ASTNode } from 'ast-types';
import { NodePath } from 'ast-types/lib/node-path';
import { generate } from 'escodegen';
import toAst from 'to-ast';
import createLogger from 'glogg';
import getExamples from './utils/getExamples';
import getProps from './utils/getProps';
import defaultSortProps from './utils/sortProps';
import * as consts from '../scripts/consts';
import * as Rsg from '../typings';

const logger = createLogger('rsg');

const ERROR_MISSING_DEFINITION = 'No suitable component definition found.';

export default function (this: Rsg.StyleguidistLoaderContext, source: string) {
    throw new Error("STUB");
}
