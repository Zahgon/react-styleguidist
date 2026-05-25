import React from 'react';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import Argument, { ArgumentProps } from 'rsg-components/Argument';
import Heading from 'rsg-components/Heading';
import * as Rsg from '../../../typings';

export const styles = ({ space }: Rsg.Theme) => { throw new Error("STUB"); };

interface ArgumentsProps extends JssInjectedProps {
	heading?: boolean;
	args: ArgumentProps[];
}

export const ArgumentsRenderer: React.FunctionComponent<ArgumentsProps> = ({
	classes,
	args,
	heading,
}) => {
    throw new Error("STUB");
};

export default Styled<ArgumentsProps>(styles)(ArgumentsRenderer);
