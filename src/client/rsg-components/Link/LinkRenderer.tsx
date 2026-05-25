import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color }: Rsg.Theme) => { throw new Error("STUB"); };

interface LinkProps extends JssInjectedProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	target?: string;
	onClick?: () => void;
}

export const LinkRenderer: React.FunctionComponent<LinkProps> = ({
	classes,
	children,
	...props
}) => {
    throw new Error("STUB");
};

LinkRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any,
	className: PropTypes.string,
	href: PropTypes.string,
};

export default Styled<LinkProps>(styles)(LinkRenderer);
