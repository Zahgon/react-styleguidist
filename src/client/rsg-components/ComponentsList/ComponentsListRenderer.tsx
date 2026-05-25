import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Link from 'rsg-components/Link';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import { useStyleGuideContext } from 'rsg-components/Context';
import * as Rsg from '../../../typings';

const styles = ({ color, fontFamily, fontSize, space, mq }: Rsg.Theme) => { throw new Error("STUB"); };

interface ComponentsListRendererProps extends JssInjectedProps {
	items: Rsg.TOCItem[];
}

const ComponentsListSectionRenderer: React.FunctionComponent<Rsg.TOCItem & JssInjectedProps> = ({
	classes,
	heading,
	visibleName,
	href,
	content,
	shouldOpenInNewTab,
	selected,
	initialOpen,
	forcedOpen,
}) => {
    throw new Error("STUB");
};

export const ComponentsListRenderer: React.FunctionComponent<ComponentsListRendererProps> = ({
	classes,
	items,
}) => {
    throw new Error("STUB");
};

ComponentsListRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	items: PropTypes.array.isRequired,
};

export default Styled<ComponentsListRendererProps>(styles)(ComponentsListRenderer);
