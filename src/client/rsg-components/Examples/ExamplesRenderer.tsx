import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = () => { throw new Error("STUB"); };

interface ExamplesRendererProps extends JssInjectedProps {
	children?: React.ReactNode;
	name?: string;
}

export const ExamplesRenderer: React.FunctionComponent<ExamplesRendererProps> = ({
	classes,
	name,
	children,
}) => {
    throw new Error("STUB");
};

ExamplesRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	name: PropTypes.string.isRequired,
	children: PropTypes.any,
};

export default Styled<ExamplesRendererProps>(styles)(ExamplesRenderer);
