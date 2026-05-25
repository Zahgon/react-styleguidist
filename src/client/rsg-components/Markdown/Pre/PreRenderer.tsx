import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import prismTheme from '../../../styles/prismTheme';
import * as Rsg from '../../../../typings';

const styles = ({ space, color, fontSize, fontFamily, borderRadius }: Rsg.Theme) => { throw new Error("STUB"); };

export interface PreProps {
	className?: string;
	children: React.ReactNode;
}

type PrePropsWithClasses = JssInjectedProps & PreProps;

export const PreRenderer: React.FunctionComponent<PrePropsWithClasses> = ({
	classes,
	className,
	children,
}) => {
    throw new Error("STUB");
};

PreRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	className: PropTypes.string,
	children: PropTypes.any.isRequired,
};

export default Styled<PrePropsWithClasses>(styles)(PreRenderer);
