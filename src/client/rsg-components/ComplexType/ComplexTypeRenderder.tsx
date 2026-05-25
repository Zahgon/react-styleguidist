import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import { MdInfoOutline } from 'react-icons/md';
import Text from 'rsg-components/Text';
import Tooltip from 'rsg-components/Tooltip';
import * as Rsg from '../../../typings';

export const styles = ({ space }: Rsg.Theme) => { throw new Error("STUB"); };

export interface ComplexTypeProps extends JssInjectedProps {
	name: string;
	raw: string;
}

function ComplexTypeRenderer({ classes, name, raw }: ComplexTypeProps) {
    throw new Error("STUB");
}

export default Styled<ComplexTypeProps>(styles)(ComplexTypeRenderer);
