import webpack from "webpack";

export function buildRules(): webpack.RuleSetRule[] {
  const tsRules = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsRules];
}
