declare module "*.scss" {
  interface IClassNames {
    [classNames: string]: string;
  }

  const classes: IClassNames;

  export default classes;
}
