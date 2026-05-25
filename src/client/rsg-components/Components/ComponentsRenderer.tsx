import React from 'react';
import PropTypes from 'prop-types';

export default function ComponentsRenderer({ children }: { children: React.ReactNode }) {
    throw new Error("STUB");
}
ComponentsRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};
