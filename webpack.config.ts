import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPath } from "./config/build/types/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "dist"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";

const config = buildWebpackConfig({
  paths,
  mode,
});

export default config;
