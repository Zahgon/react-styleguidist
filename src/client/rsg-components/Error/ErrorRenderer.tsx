import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ fontFamily, fontSize, color, space }: Rsg.Theme) => { throw new Error("STUB"); };

interface ErrorProps extends JssInjectedProps {
	error: any;
	info: React.ErrorInfo;
}

export const ErrorRenderer: React.FunctionComponent<ErrorProps> = ({ classes, error, info }) => {
    throw new Error("STUB");
};

ErrorRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	error: PropTypes.object.isRequired,
	info: PropTypes.any.isRequired,
};

export default Styled<ErrorProps>(styles)(ErrorRenderer);
