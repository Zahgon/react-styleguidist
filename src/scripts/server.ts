import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import createServer from './create-server';
import * as Rsg from '../typings';

export default function server(
	config: Rsg.SanitizedStyleguidistConfig,
	callback: (error?: Error) => void
): { app: WebpackDevServer; compiler: webpack.Compiler } {
    throw new Error("STUB");
}
