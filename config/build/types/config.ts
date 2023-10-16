export type BuildMode = "production" | "development";

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}

export interface BuildOptions {
  paths: BuildPath;
  mode: BuildMode;
  port: number;
  isDev: boolean;
}
