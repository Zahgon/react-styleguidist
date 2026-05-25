import React from 'react';
import PropTypes from 'prop-types';

import Styled, { JssInjectedProps } from 'rsg-components/Styled';

const styles = () => { throw new Error("STUB"); };

export const CheckboxRenderer: React.FunctionComponent<JssInjectedProps> = ({
	classes,
	...rest
}) => {
    throw new Error("STUB");
};
CheckboxRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Styled(styles)(CheckboxRenderer);
