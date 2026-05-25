import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = () => { throw new Error("STUB"); };

interface SectionsRendererProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const SectionsRenderer: React.FunctionComponent<SectionsRendererProps> = ({
	classes,
	children,
}) => {
    throw new Error("STUB");
};

SectionsRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any,
};

export default Styled<SectionsRendererProps>(styles)(SectionsRenderer);
