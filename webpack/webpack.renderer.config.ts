import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.scss$/,
  use: [
    { loader: "vue-style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" },
  ],
});

rules.push({
  test: /\.vue$/,
  use: [{ loader: "vue-loader" }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
