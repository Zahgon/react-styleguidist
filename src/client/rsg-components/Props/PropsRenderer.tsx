import React from 'react';
import PropTypes from 'prop-types';
import Arguments from 'rsg-components/Arguments';
import Argument from 'rsg-components/Argument';
import JsDoc from 'rsg-components/JsDoc';
import Markdown from 'rsg-components/Markdown';
import Name from 'rsg-components/Name';
import Para from 'rsg-components/Para';
import Table from 'rsg-components/Table';
import renderTypeColumn from './renderType';
import renderExtra from './renderExtra';
import renderDefault from './renderDefault';
import { PropDescriptor } from './util';

function renderDescription(prop: PropDescriptor) {
    throw new Error("STUB");
}

function renderName(prop: PropDescriptor) {
    throw new Error("STUB");
}

export function getRowKey(row: { name: string }) {
	return row.name;
}

export const columns = [
	{
		caption: 'Prop name',
		render: renderName,
	},
	{
		caption: 'Type',
		render: renderTypeColumn,
	},
	{
		caption: 'Default',
		render: renderDefault,
	},
	{
		caption: 'Description',
		render: renderDescription,
	},
];

interface PropsProps {
	props: PropDescriptor[];
}

const PropsRenderer: React.FunctionComponent<PropsProps> = ({ props }) => {
    throw new Error("STUB");
};

PropsRenderer.propTypes = {
	props: PropTypes.array.isRequired,
};

export default PropsRenderer;
