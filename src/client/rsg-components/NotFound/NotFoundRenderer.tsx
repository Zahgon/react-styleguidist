import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ maxWidth }: Rsg.Theme) => { throw new Error("STUB"); };

export const NotFoundRenderer: React.FunctionComponent<JssInjectedProps> = ({ classes }) => {
    throw new Error("STUB");
};

NotFoundRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Styled(styles)(NotFoundRenderer);
