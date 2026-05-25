import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	children?: React.ReactNode;
}

export const TableRowRenderer = ({ children }: Props) => {
    throw new Error("STUB");
};
TableRowRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableRowRenderer;
