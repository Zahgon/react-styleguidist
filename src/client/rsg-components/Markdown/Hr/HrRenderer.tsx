import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color }: Rsg.Theme) => { throw new Error("STUB"); };

export const HrRenderer: React.FunctionComponent<JssInjectedProps> = ({ classes }) => {
    throw new Error("STUB");
};
HrRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Styled<JssInjectedProps>(styles)(HrRenderer);
