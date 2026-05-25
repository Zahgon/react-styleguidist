import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space }: Rsg.Theme) => { throw new Error("STUB"); };

interface TableProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const TableRenderer: React.FunctionComponent<TableProps> = ({ classes, children }) => {
    throw new Error("STUB");
};

TableRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<TableProps>(styles)(TableRenderer);
