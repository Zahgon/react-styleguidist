import React from 'react';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ fontFamily, fontSize, color }: Rsg.Theme) => { throw new Error("STUB"); };

export interface TextProps extends JssInjectedProps {
	semantic?: 'em' | 'strong';
	size?: 'inherit' | 'small' | 'base' | 'text';
	color?: 'base' | 'light';
	underlined?: boolean;
	children: React.ReactNode;
	[intrinsicAttribute: string]: any;
}

export const TextRenderer: React.FunctionComponent<TextProps> = ({
	classes,
	semantic,
	size = 'inherit',
	color = 'base',
	underlined = false,
	children,
	...props
}) => {
    throw new Error("STUB");
};

export default Styled<TextProps>(styles)(TextRenderer);
