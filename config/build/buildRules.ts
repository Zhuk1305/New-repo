import webpack from "webpack";

export function buildRules(): webpack.RuleSetRule[] {
  const cssRules = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  const tsRules = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [tsRules, cssRules];
}
