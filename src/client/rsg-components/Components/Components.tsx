import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from 'rsg-components/ReactComponent';
import ComponentsRenderer from 'rsg-components/Components/ComponentsRenderer';

interface ComponentsProps {
	components: any[];
	depth: number;
	exampleMode?: string;
	usageMode?: string;
}

const Components: React.FunctionComponent<ComponentsProps> = ({
	components,
	depth,
	exampleMode,
	usageMode,
}) => {
    throw new Error("STUB");
};

Components.propTypes = {
	components: PropTypes.array.isRequired,
	depth: PropTypes.number.isRequired,
	exampleMode: PropTypes.string.isRequired,
	usageMode: PropTypes.string.isRequired,
};

export default Components;
