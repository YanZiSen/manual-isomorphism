declare module "*.less" {
  const resource: { [k: string]: string };
  export = resource;
}
declare module "isomorphic-style-loader/*" {
  type StyleItem = {
    [x: string]: string;
  };
  type withStylesType = (...styles: StyleItem[]) => void;
  type useStylesType = (...useStyles: StyleItem[]) => void;
  const useStyles: useStylesType = (...styles) => {};
  export = withStyles;
}
