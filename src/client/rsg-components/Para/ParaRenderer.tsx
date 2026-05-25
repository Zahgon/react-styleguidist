import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ space, color, fontFamily, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

interface ParaProps extends JssInjectedProps {
	semantic?: 'p';
	children: React.ReactNode;
}

export const ParaRenderer: React.FunctionComponent<ParaProps> = ({
	classes,
	semantic,
	children,
}) => {
    throw new Error("STUB");
};

ParaRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	semantic: PropTypes.oneOf(['p']),
	children: PropTypes.any.isRequired,
};

export default Styled<ParaProps>(styles)(ParaRenderer);
