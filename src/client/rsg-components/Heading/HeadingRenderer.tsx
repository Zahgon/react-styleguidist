import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color, fontFamily, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

interface HeadingProps extends JssInjectedProps, React.HTMLAttributes<HTMLHeadingElement> {
	children?: React.ReactNode;
	level: number;
}

const HeadingRenderer: React.FunctionComponent<HeadingProps> = ({
	classes,
	level,
	children,
	...props
}) => {
    throw new Error("STUB");
};

HeadingRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
	children: PropTypes.any,
};

export default Styled<HeadingProps>(styles)(HeadingRenderer);
