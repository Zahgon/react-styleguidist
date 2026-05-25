import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ space, color, fontFamily, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

interface TableProps extends JssInjectedProps {
	columns: {
		caption: string;
		render(row: any): React.ReactNode;
	}[];
	rows: any[];
	getRowKey(row: any): string;
}

export const TableRenderer: React.FunctionComponent<TableProps> = ({
	classes,
	columns,
	rows,
	getRowKey,
}) => {
    throw new Error("STUB");
};

TableRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			caption: PropTypes.string.isRequired,
			render: PropTypes.func.isRequired,
		}).isRequired
	).isRequired,
	rows: PropTypes.arrayOf(PropTypes.object).isRequired,
	getRowKey: PropTypes.func.isRequired,
};

export default Styled<TableProps>(styles)(TableRenderer);
