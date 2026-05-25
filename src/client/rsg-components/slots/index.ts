import Editor from 'rsg-components/Editor';
import Usage from 'rsg-components/Usage';
import IsolateButton from 'rsg-components/slots/IsolateButton';
import CodeTabButton from 'rsg-components/slots/CodeTabButton';
import UsageTabButton from 'rsg-components/slots/UsageTabButton';
import * as Rsg from '../../../typings';

export const EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';
export const DOCS_TAB_USAGE = 'rsg-usage';

const toolbar = [IsolateButton];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (config?: Rsg.ProcessedStyleguidistConfig) => {
    throw new Error("STUB");
};
