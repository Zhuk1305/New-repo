import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildRules } from "./buildRules";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(),
    },
    resolve: buildResolve(),
  };
}
