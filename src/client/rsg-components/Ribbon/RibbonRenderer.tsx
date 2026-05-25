import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ color, space, fontSize, fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface RibbonProps extends JssInjectedProps {
	url: string;
	text?: string;
}

export const RibbonRenderer: React.FunctionComponent<RibbonProps> = ({
	classes,
	url,
	text = 'Fork me on GitHub',
}) => {
    throw new Error("STUB");
};

export default Styled<RibbonProps>(styles)(RibbonRenderer);
