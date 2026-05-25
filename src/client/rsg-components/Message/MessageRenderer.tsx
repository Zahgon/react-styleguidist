import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ space }: Rsg.Theme) => { throw new Error("STUB"); };

interface MessageProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const MessageRenderer: React.FunctionComponent<MessageProps> = ({ classes, children }) => {
    throw new Error("STUB");
};

MessageRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<MessageProps>(styles)(MessageRenderer);
