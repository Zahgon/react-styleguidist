import React from 'react';
import { PropTypeDescriptor } from 'react-docgen';
import Type from 'rsg-components/Type';
import ComplexType from 'rsg-components/ComplexType';

import { getType, PropDescriptor, TypeDescriptor } from './util';

interface ExtendedPropTypeDescriptor extends Omit<PropTypeDescriptor, 'name'> {
	name: string;
}

export function renderType(type: ExtendedPropTypeDescriptor): string {
    throw new Error("STUB");
}

function renderAdvancedType(type: PropTypeDescriptor | TypeDescriptor): React.ReactNode {
    throw new Error("STUB");
}

export default function renderTypeColumn(prop: PropDescriptor): React.ReactNode {
    throw new Error("STUB");
}
