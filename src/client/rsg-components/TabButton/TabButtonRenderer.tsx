import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import { Styles } from 'jss';
import cx from 'clsx';
import * as Rsg from '../../../typings';

export const styles = ({
	space,
	color,
	fontFamily,
	fontSize,
	buttonTextTransform,
}: Rsg.Theme): Styles => { throw new Error("STUB"); };

interface TabButtonProps extends JssInjectedProps {
	className?: string;
	name: string;
	onClick: (e: React.MouseEvent) => void;
	active?: boolean;
	children: React.ReactNode;
}

export const TabButtonRenderer: React.FunctionComponent<TabButtonProps> = ({
	classes,
	name,
	className,
	onClick,
	active = false,
	children,
}) => {
    throw new Error("STUB");
};

export default Styled<TabButtonProps>(styles)(TabButtonRenderer);
