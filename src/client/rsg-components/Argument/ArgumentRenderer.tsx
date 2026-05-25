import React from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import Markdown from 'rsg-components/Markdown';
import Name from 'rsg-components/Name';
import Type from 'rsg-components/Type';
import Group from 'react-group';
import doctrine from 'doctrine';
import * as Rsg from '../../../typings';

export const styles = ({ space }: Rsg.Theme) => { throw new Error("STUB"); };

export interface ArgumentProps {
	name?: string;
	type?: any;
	default?: string;
	description?: string;
	returns?: boolean;
	block?: boolean;
}

type ArgumentPropsWithClasses = ArgumentProps & JssInjectedProps;

export const ArgumentRenderer: React.FunctionComponent<ArgumentPropsWithClasses> = ({
	classes,
	name,
	type,
	description,
	returns,
	block,
	...props
}) => {
    throw new Error("STUB");
};

ArgumentRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	name: PropTypes.string,
	type: PropTypes.object,
	default: PropTypes.string,
	description: PropTypes.string,
	returns: PropTypes.bool,
	block: PropTypes.bool,
};

export default Styled<ArgumentPropsWithClasses>(styles)(ArgumentRenderer);
