import path from 'path';
import filter from 'lodash/filter';
import map from 'lodash/map';
import values from 'lodash/values';
import flatten from 'lodash/flatten';
import { generate } from 'escodegen';
import toAst from 'to-ast';
import { builders as b } from 'ast-types';
import chunkify from './utils/chunkify';
import expandDefaultComponent from './utils/expandDefaultComponent';
import getImports from './utils/getImports';
import requireIt from './utils/requireIt';
import resolveESModule from './utils/resolveESModule';
import * as Rsg from '../typings';

const absolutize = (filepath: string) => path.resolve(__dirname, filepath);

const REQUIRE_IN_RUNTIME_PATH = absolutize('utils/client/requireInRuntime');
const EVAL_IN_CONTEXT_PATH = absolutize('utils/client/evalInContext');

export default function examplesLoader(this: Rsg.StyleguidistLoaderContext, source: string) {
    throw new Error("STUB");
}
