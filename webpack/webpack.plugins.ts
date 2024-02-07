import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  // make sure to include the plugin for the magic
  new VueLoaderPlugin(),
];
