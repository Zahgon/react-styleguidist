import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ fontFamily, fontSize, color }: Rsg.Theme) => { throw new Error("STUB"); };

interface NameProps extends JssInjectedProps {
	children: React.ReactNode;
	deprecated?: boolean;
}

export const NameRenderer: React.FunctionComponent<NameProps> = ({
	classes,
	children,
	deprecated,
}) => {
    throw new Error("STUB");
};

NameRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
	deprecated: PropTypes.bool,
};

export default Styled<NameProps>(styles)(NameRenderer);
