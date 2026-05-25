import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled, { JssInjectedProps } from 'rsg-components/Styled';
import SimpleEditor from 'react-simple-code-editor';
import { highlight as prismHighlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import { Styles } from 'jss';
import 'prismjs/components/prism-jsx';
import { space } from '../../styles/theme';
import prismTheme from '../../styles/prismTheme';
import * as Rsg from '../../../typings';

const highlight = (code: string) => { throw new Error("STUB"); };

const styles = ({ fontFamily, fontSize, color, borderRadius }: Rsg.Theme): Styles => { throw new Error("STUB"); };

export interface EditorProps extends JssInjectedProps {
	code: string;
	onChange: (code: string) => void;
}

interface EditorState {
	code: string;
	prevCode: string;
}

export class Editor extends Component<EditorProps> {
	public static propTypes = {
		code: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
	};

	public state = { code: this.props.code, prevCode: this.props.code };

	public static getDerivedStateFromProps(nextProps: EditorProps, prevState: EditorState) {
        throw new Error("STUB");
    }

	public shouldComponentUpdate(nextProps: EditorProps, nextState: EditorState) {
        throw new Error("STUB");
    }

	private handleChange = (code: string) => {
        throw new Error("STUB");
    };

	public render() {
		return (
			<SimpleEditor
				className={this.props.classes.root}
				value={this.state.code}
				onValueChange={this.handleChange}
				highlight={highlight}
				// Padding should be passed via a prop (not CSS) for a proper
				// cursor position calculation
				padding={space[2]}
			/>
		);
	}
}

export default Styled<EditorProps>(styles)(Editor);
