import webpack from 'webpack';
import makeWebpackConfig from './make-webpack-config';
import * as Rsg from '../typings';

export default function build(
	config: Rsg.SanitizedStyleguidistConfig,
	callback: (err: Error, stats: webpack.Stats) => void
) {
    throw new Error("STUB");
}
