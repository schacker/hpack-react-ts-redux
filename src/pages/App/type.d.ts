import * as React from "react";

export interface IRoute {
  path: string;
  title: string;
  component: any;
  show: boolean;
  exact: boolean;
}

export interface IProps extends React.Props<any> {
  router: IRoute[];
}