import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ fontFamily, fontSize, color }: Rsg.Theme) => { throw new Error("STUB"); };

interface PlaygroundErrorProps extends JssInjectedProps {
	message: string;
}

export const PlaygroundErrorRenderer: React.FunctionComponent<PlaygroundErrorProps> = ({
	classes,
	message,
}) => { throw new Error("STUB"); };

PlaygroundErrorRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	message: PropTypes.string.isRequired,
};

export default Styled<PlaygroundErrorProps>(styles)(PlaygroundErrorRenderer);
