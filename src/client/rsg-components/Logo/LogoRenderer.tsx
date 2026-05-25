import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color, fontFamily, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

interface Props extends JssInjectedProps {
	children?: React.ReactNode;
}

export const LogoRenderer = ({ classes, children }: Props) => {
    throw new Error("STUB");
};

export default Styled<JssInjectedProps>(styles)(LogoRenderer);
