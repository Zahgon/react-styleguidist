import React from 'react';
import PropTypes from 'prop-types';
import Examples from 'rsg-components/Examples';
import Components from 'rsg-components/Components';
import Sections from 'rsg-components/Sections';
import SectionRenderer from 'rsg-components/Section/SectionRenderer';
import { useStyleGuideContext } from 'rsg-components/Context';
import { DisplayModes } from '../../consts';
import * as Rsg from '../../../typings';

const Section: React.FunctionComponent<{
	section: Rsg.Section;
	depth: number;
}> = ({ section, depth }) => {
    throw new Error("STUB");
};

Section.propTypes = {
	section: PropTypes.any.isRequired,
	depth: PropTypes.number.isRequired,
};

export default Section;
