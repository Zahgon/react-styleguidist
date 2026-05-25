import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface BlockquoteProps extends JssInjectedProps {
	children: React.ReactNode;
	className?: string;
}

export const BlockquoteRenderer: React.FunctionComponent<BlockquoteProps> = ({
	classes,
	className,
	children,
}) => {
    throw new Error("STUB");
};

BlockquoteRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Styled<BlockquoteProps>(styles)(BlockquoteRenderer);
