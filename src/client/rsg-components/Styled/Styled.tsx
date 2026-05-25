import React, { Component, ComponentType } from 'react';
import { Styles, StyleSheet, Classes } from 'jss';
import Context, { StyleGuideContextContents } from 'rsg-components/Context';
import createStyleSheet from '../../styles/createStyleSheet';
import * as Rsg from '../../../typings';

export interface JssInjectedProps {
	classes: Classes;
}

export default function StyleHOC<P extends JssInjectedProps>(
	styles: (t: Rsg.Theme) => Styles<string>
): (WrappedComponent: ComponentType<P>) => ComponentType<Omit<P, keyof JssInjectedProps>> {
    throw new Error("STUB");
}
