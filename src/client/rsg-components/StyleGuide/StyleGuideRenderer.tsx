import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'rsg-components/Logo';
import Markdown from 'rsg-components/Markdown';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import cx from 'clsx';
import Ribbon from 'rsg-components/Ribbon';
import Version from 'rsg-components/Version';
import * as Rsg from '../../../typings';

const styles = ({ color, fontFamily, fontSize, sidebarWidth, mq, space, maxWidth }: Rsg.Theme) => { throw new Error("STUB"); };

interface StyleGuideRendererProps extends JssInjectedProps {
	title: string;
	version?: string;
	homepageUrl: string;
	children: React.ReactNode;
	toc?: React.ReactNode;
	hasSidebar?: boolean;
}

export const StyleGuideRenderer: React.FunctionComponent<StyleGuideRendererProps> = ({
	classes,
	title,
	version,
	homepageUrl,
	children,
	toc,
	hasSidebar,
}) => {
    throw new Error("STUB");
};

StyleGuideRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	title: PropTypes.string.isRequired,
	version: PropTypes.string,
	homepageUrl: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	toc: PropTypes.any.isRequired,
	hasSidebar: PropTypes.bool,
};

export default Styled<StyleGuideRendererProps>(styles)(StyleGuideRenderer);
