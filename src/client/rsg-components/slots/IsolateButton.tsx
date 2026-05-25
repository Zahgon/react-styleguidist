import React from 'react';
import PropTypes from 'prop-types';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import ToolbarButton from 'rsg-components/ToolbarButton';
import getUrl from '../../utils/getUrl';

export interface IsolateButtonProps {
	name: string;
	example?: number;
	isolated?: boolean;
	href: string;
}

const IsolateButton = ({ name, example, isolated, href }: IsolateButtonProps) => {
    throw new Error("STUB");
};

IsolateButton.propTypes = {
	name: PropTypes.string.isRequired,
	example: PropTypes.number,
	isolated: PropTypes.bool,
};

export default IsolateButton;
