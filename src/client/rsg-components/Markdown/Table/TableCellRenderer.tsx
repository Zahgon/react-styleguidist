import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface TableCellProps extends JssInjectedProps {
	children: React.ReactNode;
	header?: boolean;
}

export const TableCellRenderer: React.FunctionComponent<TableCellProps> = ({
	classes,
	header = false,
	children,
}) => {
    throw new Error("STUB");
};

export default Styled<TableCellProps>(styles)(TableCellRenderer);
