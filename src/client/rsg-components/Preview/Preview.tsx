import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaygroundError from 'rsg-components/PlaygroundError';
import ReactExample from 'rsg-components/ReactExample';
import Context, { StyleGuideContextContents } from 'rsg-components/Context';
import { createRoot, Root } from 'react-dom/client';

const improveErrorMessage = (message: string) =>
	{ throw new Error("STUB"); };

interface PreviewProps {
	code: string;
	evalInContext(code: string): () => any;
}

interface PreviewState {
	error: string | null;
}

export default class Preview extends Component<PreviewProps, PreviewState> {
	public static propTypes = {
		code: PropTypes.string.isRequired,
		evalInContext: PropTypes.func.isRequired,
	};
	public static contextType = Context;

	private mountNode: Element | null = null;
	private reactRoot: Root | null = null;
	private timeoutId: number | null = null;

	public state: PreviewState = {
		error: null,
	};

	public componentDidMount() {
        throw new Error("STUB");
    }

	public shouldComponentUpdate(nextProps: PreviewProps, nextState: PreviewState) {
        throw new Error("STUB");
    }

	public componentDidUpdate(prevProps: PreviewProps) {
        throw new Error("STUB");
    }

	public componentWillUnmount() {
        throw new Error("STUB");
    }

	public unmountPreview() {
        throw new Error("STUB");
    }

	private executeCode() {
        throw new Error("STUB");
    }

	private handleError = (err: Error) => {
        throw new Error("STUB");
    };

	private callbackRef = (ref: HTMLDivElement | null) => {
        throw new Error("STUB");
    };

	public render() {
		const { error } = this.state;
		return (
			<>
				<div data-testid="mountNode" ref={this.callbackRef} />
				{error && <PlaygroundError message={error} />}
			</>
		);
	}
}
