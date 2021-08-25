declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  // import React from "react";
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}