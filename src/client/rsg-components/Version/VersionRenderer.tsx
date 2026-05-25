import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ color, fontFamily, fontSize }: Rsg.Theme) => { throw new Error("STUB"); };

interface VersionProps extends JssInjectedProps {
	children?: React.ReactNode;
}

export const VersionRenderer: React.FunctionComponent<VersionProps> = ({ classes, children }) => {
    throw new Error("STUB");
};

VersionRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any,
};

export default Styled<VersionProps>(styles)(VersionRenderer);
