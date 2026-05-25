import React from 'react';
import copy from 'clipboard-copy';
import { MdContentCopy } from 'react-icons/md';
import ToolbarButton from 'rsg-components/ToolbarButton';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ space, fontFamily, fontSize, color }: Rsg.Theme) => { throw new Error("STUB"); };

interface Props extends JssInjectedProps {
	children?: React.ReactNode;
}

export const PathlineRenderer = ({ classes, children }: Props) => {
    throw new Error("STUB");
};

export default Styled<JssInjectedProps>(styles)(PathlineRenderer);
