import React from 'react';
import PropTypes from 'prop-types';

interface Props {
	children?: React.ReactNode;
}

export const TableBodyRenderer = ({ children }: Props) => {
    throw new Error("STUB");
};
TableBodyRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableBodyRenderer;
