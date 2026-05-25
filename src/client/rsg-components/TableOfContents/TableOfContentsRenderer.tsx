import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from 'jss';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import * as Rsg from '../../../typings';

const styles = ({ space, color, fontFamily, fontSize, borderRadius }: Rsg.Theme): Styles => { throw new Error("STUB"); };

interface TableOfContentsRendererProps extends JssInjectedProps {
	children?: React.ReactNode;
	searchTerm: string;
	onSearchTermChange(term: string): void;
}

export const TableOfContentsRenderer: React.FunctionComponent<TableOfContentsRendererProps> = ({
	classes,
	children,
	searchTerm,
	onSearchTermChange,
}) => {
    throw new Error("STUB");
};

TableOfContentsRenderer.propTypes = {
	classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	children: PropTypes.any,
	searchTerm: PropTypes.string.isRequired,
	onSearchTermChange: PropTypes.func.isRequired,
};

export default Styled<TableOfContentsRendererProps>(styles)(TableOfContentsRenderer);
