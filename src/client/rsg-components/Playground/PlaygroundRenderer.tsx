import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

export const styles = ({ space, color, borderRadius }: Rsg.Theme) => { throw new Error("STUB"); };

interface PlaygroundRendererProps extends JssInjectedProps {
	exampleIndex: number;
	name?: string;
	padded: boolean;
	preview: React.ReactNode;
	// TODO: need to find a better type here too
	previewProps: any;
	tabButtons: React.ReactNode;
	tabBody: React.ReactNode;
	toolbar: React.ReactNode;
}

export const PlaygroundRenderer: React.FunctionComponent<PlaygroundRendererProps> = ({
	classes,
	exampleIndex,
	name,
	padded,
	preview,
	previewProps,
	tabButtons,
	tabBody,
	toolbar,
}) => {
    throw new Error("STUB");
};

PlaygroundRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	exampleIndex: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	padded: PropTypes.bool.isRequired,
	preview: PropTypes.any.isRequired,
	previewProps: PropTypes.object.isRequired,
	tabButtons: PropTypes.any.isRequired,
	tabBody: PropTypes.any.isRequired,
	toolbar: PropTypes.any.isRequired,
};

export default Styled<PlaygroundRendererProps>(styles)(PlaygroundRenderer);
