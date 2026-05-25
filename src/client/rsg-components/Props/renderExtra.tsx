import React from 'react';
import Group from 'react-group';
import Type from 'rsg-components/Type';
import Code from 'rsg-components/Code';
import Name from 'rsg-components/Name';
import Markdown from 'rsg-components/Markdown';
import { PropTypeDescriptor } from 'react-docgen';

import { unquote, getType, showSpaces, PropDescriptor, TypeDescriptor } from './util';
import renderDefault from './renderDefault';
import { renderType } from './renderType';

function renderEnum(type: PropTypeDescriptor | TypeDescriptor): React.ReactNode {
    throw new Error("STUB");
}

function renderUnion(type: PropTypeDescriptor | TypeDescriptor): React.ReactNode {
    throw new Error("STUB");
}

function renderShape(props: Record<string, PropDescriptor>) {
    throw new Error("STUB");
}

export default function renderExtra(prop: PropDescriptor): React.ReactNode {
    throw new Error("STUB");
}
