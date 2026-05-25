import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';
import SectionHeadingRenderer from 'rsg-components/SectionHeading/SectionHeadingRenderer';

interface SectionHeadingProps {
	children?: React.ReactNode;
	id: string;
	slotName: string;
	slotProps: Record<string, unknown>;
	depth: number;
	href?: string;
	deprecated?: boolean;
	pagePerSection?: boolean;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
	slotName,
	slotProps,
	children,
	id,
	href,
	...rest
}) => {
    throw new Error("STUB");
};

SectionHeading.propTypes = {
	children: PropTypes.any,
	id: PropTypes.string.isRequired,
	slotName: PropTypes.string.isRequired,
	slotProps: PropTypes.any.isRequired,
	depth: PropTypes.number.isRequired,
	deprecated: PropTypes.bool,
	pagePerSection: PropTypes.bool,
};

export default SectionHeading;
