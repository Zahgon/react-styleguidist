import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import cx from 'clsx';
import * as Rsg from '../../../typings';

export const styles = ({ space, color }: Rsg.Theme) => { throw new Error("STUB"); };

interface ToolbarButtonProps extends JssInjectedProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	onClick?: () => void;
	title?: string;
	small?: boolean;
	testId?: string;
}

export const ToolbarButtonRenderer: React.FunctionComponent<ToolbarButtonProps> = ({
	classes,
	className,
	onClick,
	href,
	title,
	small,
	testId,
	children,
}) => {
    throw new Error("STUB");
};

ToolbarButtonRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	onClick: PropTypes.func,
	title: PropTypes.string,
	small: PropTypes.bool,
	testId: PropTypes.string,
	children: PropTypes.any,
};

export default Styled<ToolbarButtonProps>(styles)(ToolbarButtonRenderer);
