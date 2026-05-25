import React from 'react';
import { MethodDescriptor } from 'react-docgen';
import { PropDescriptor } from 'rsg-components/Props/util';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';
import isEmpty from 'lodash/isEmpty';

const Usage: React.FunctionComponent<{
	props: { methods?: MethodDescriptor[]; props?: PropDescriptor[] };
}> = ({ props: { props, methods } }) => {
    throw new Error("STUB");
};

export default Usage;
