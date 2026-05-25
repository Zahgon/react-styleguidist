import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface CodeProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const CodeRenderer: React.FunctionComponent<CodeProps> = ({ classes, children }) => {
    throw new Error("STUB");
};
CodeRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<CodeProps>(styles)(CodeRenderer);
