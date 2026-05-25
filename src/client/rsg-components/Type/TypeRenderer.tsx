import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ fontFamily, fontSize, color }: Rsg.Theme) => { throw new Error("STUB"); };

interface TypeProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const TypeRenderer: React.FunctionComponent<TypeProps> = ({ classes, children }) => {
    throw new Error("STUB");
};

TypeRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<TypeProps>(styles)(TypeRenderer);
