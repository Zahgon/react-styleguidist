import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from 'jss';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily }: Rsg.Theme): Styles => { throw new Error("STUB"); };

interface DetailsSummaryProps extends JssInjectedProps {
	children: React.ReactNode;
}

export const DetailsSummaryRenderer: React.FunctionComponent<DetailsSummaryProps> = ({
	classes,
	children,
}) => {
    throw new Error("STUB");
};

DetailsSummaryRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any.isRequired,
};

export default Styled<DetailsSummaryProps>(styles)(DetailsSummaryRenderer);
