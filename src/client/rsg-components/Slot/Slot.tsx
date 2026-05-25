// Inspired by https://github.com/camwest/react-slot-fill

import React from 'react';
import PropTypes from 'prop-types';
import { useStyleGuideContext, SlotObject } from 'rsg-components/Context';

interface SlotProps {
	name: string;
	active?: string;
	onlyActive?: boolean;
	props?: {
		onClick?: (id: string, ...attrs: any[]) => void;
		active?: boolean;
		name?: string;
		[propId: string]: any;
	};
	className?: string;
}

export default function Slot({ name, active, onlyActive, className, props = {} }: SlotProps) {
    throw new Error("STUB");
}

Slot.propTypes = {
	name: PropTypes.string.isRequired,
	active: PropTypes.string,
	onlyActive: PropTypes.bool,
	props: PropTypes.object,
	className: PropTypes.string,
};
