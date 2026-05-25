import React from 'react';
import Text from 'rsg-components/Text';
import Code from 'rsg-components/Code';
import { showSpaces, unquote, PropDescriptor } from './util';

const defaultValueBlacklist = ['null', 'undefined'];

export default function renderDefault(prop: PropDescriptor): React.ReactNode {
    throw new Error("STUB");
}
