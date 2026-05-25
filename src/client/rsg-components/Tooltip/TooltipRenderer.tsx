import React from 'react';
import Tippy from '@tippyjs/react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ space, color, borderRadius, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends JssInjectedProps {
	children: React.ReactNode;
	content: React.ReactNode;
	placement?: TooltipPlacement;
}

function TooltipRenderer({ classes, children, content, placement = 'top' }: TooltipProps) {
    throw new Error("STUB");
}

export default Styled<TooltipProps>(styles)(TooltipRenderer);
