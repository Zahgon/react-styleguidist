import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Heading from 'rsg-components/Heading';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color, space }: Rsg.Theme) => { throw new Error("STUB"); };

interface SectionHeadingRendererProps extends JssInjectedProps {
	children?: React.ReactNode;
	toolbar?: React.ReactNode;
	id: string;
	href?: string;
	depth: number;
	deprecated?: boolean;
}

const SectionHeadingRenderer: React.FunctionComponent<SectionHeadingRendererProps> = ({
	classes,
	children,
	toolbar,
	id,
	href,
	depth,
	deprecated,
}) => {
    throw new Error("STUB");
};

SectionHeadingRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any,
	toolbar: PropTypes.any,
	id: PropTypes.string.isRequired,
	href: PropTypes.string,
	depth: PropTypes.number.isRequired,
	deprecated: PropTypes.bool,
};

export default Styled<SectionHeadingRendererProps>(styles)(SectionHeadingRenderer);
