import React from 'react';
import PropTypes from 'prop-types';
import TabButton from 'rsg-components/TabButton';
import isEmpty from 'lodash/isEmpty';

export interface UsageTabButtonProps {
	name: string;
	onClick: (e: React.MouseEvent) => void;
	active?: boolean;
	props: {
		props?: any[];
		methods?: any[];
	};
}

const UsageTabButton = (props: UsageTabButtonProps) => {
    throw new Error("STUB");
};

UsageTabButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	props: PropTypes.shape({
		props: PropTypes.array,
		methods: PropTypes.array,
	}).isRequired,
	active: PropTypes.bool,
};

export default UsageTabButton;
