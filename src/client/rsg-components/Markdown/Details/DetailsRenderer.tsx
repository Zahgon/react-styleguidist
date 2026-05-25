import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme) => { throw new Error("STUB"); };

interface DetailsProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const DetailsRenderer: React.FunctionComponent<DetailsProps> = ({ classes, children }) => {
    throw new Error("STUB");
};

DetailsRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<DetailsProps>(styles)(DetailsRenderer);
