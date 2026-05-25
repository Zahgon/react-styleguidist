import React from 'react';
import PropTypes from 'prop-types';
import Section from 'rsg-components/Section';
import SectionsRenderer from 'rsg-components/Sections/SectionsRenderer';
import * as Rsg from '../../../typings';

const Sections: React.FunctionComponent<{
	sections: Rsg.Section[];
	depth: number;
	root?: boolean;
}> = ({ sections, depth }) => {
    throw new Error("STUB");
};

Sections.propTypes = {
	sections: PropTypes.array.isRequired,
	depth: PropTypes.number.isRequired,
	root: PropTypes.bool,
};

export default Sections;
