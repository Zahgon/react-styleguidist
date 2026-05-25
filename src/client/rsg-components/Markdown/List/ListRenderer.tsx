import React, { cloneElement, Children } from 'react';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface ListProps extends JssInjectedProps {
	ordered?: boolean;
	children: React.ReactNode;
}

export const ListRenderer: React.FunctionComponent<ListProps> = ({
	classes,
	ordered = false,
	children,
}) => {
    throw new Error("STUB");
};

export default Styled<ListProps>(styles)(ListRenderer);
