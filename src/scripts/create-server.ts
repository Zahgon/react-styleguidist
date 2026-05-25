import webpack from 'webpack';
import WebpackDevServer, { Configuration } from 'webpack-dev-server';
import makeWebpackConfig from './make-webpack-config';
import * as Rsg from '../typings';

export default function createServer(
	config: Rsg.SanitizedStyleguidistConfig,
	env: 'development' | 'production' | 'none'
): { app: WebpackDevServer; compiler: webpack.Compiler } {
    throw new Error("STUB");
}
