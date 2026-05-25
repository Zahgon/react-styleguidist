import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ color }: Rsg.Theme) => { throw new Error("STUB"); };

interface TableHeadProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const TableHeadRenderer: React.FunctionComponent<TableHeadProps> = ({
	classes,
	children,
}) => {
    throw new Error("STUB");
};

TableHeadRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<TableHeadProps>(styles)(TableHeadRenderer);
