import React from 'react';
import Markdown from 'rsg-components/Markdown';
import Argument from 'rsg-components/Argument';
import Arguments from 'rsg-components/Arguments';
import Name from 'rsg-components/Name';
import JsDoc from 'rsg-components/JsDoc';
import Table from 'rsg-components/Table';
import { MethodDescriptor } from 'react-docgen';

const getRowKey = (row: MethodDescriptor): string => row.name;

export const columns = [
	{
		caption: 'Method name',
		// eslint-disable-next-line react/prop-types
		render: ({ name, tags = {} }: MethodDescriptor) => { throw new Error("STUB"); },
	},
	{
		caption: 'Parameters',
		// eslint-disable-next-line react/prop-types
		render: ({ params = [] }: MethodDescriptor) => { throw new Error("STUB"); },
	},
	{
		caption: 'Description',
		// eslint-disable-next-line react/prop-types
		render: ({ description, returns, tags = {} }: MethodDescriptor) => { throw new Error("STUB"); },
	},
];

const MethodsRenderer: React.FunctionComponent<{ methods: MethodDescriptor[] }> = ({ methods }) => { throw new Error("STUB"); };

export default MethodsRenderer;
