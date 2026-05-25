import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import { DOCS_COMPONENTS } from '../../../scripts/consts';
import * as Rsg from '../../../typings';

const styles = ({ space, maxWidth }: Rsg.Theme) => { throw new Error("STUB"); };

interface WelcomeProps extends JssInjectedProps {
	patterns: string[];
}

export const WelcomeRenderer: React.FunctionComponent<WelcomeProps> = ({ classes, patterns }) => {
    throw new Error("STUB");
};

WelcomeRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	patterns: PropTypes.array.isRequired,
};

export default Styled<WelcomeProps>(styles)(WelcomeRenderer);
