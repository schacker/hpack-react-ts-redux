import Module1 from "pages/Module1/module";
import Module2 from "pages/Module2/module";

interface IRouter {
    path: string;
    title: string;
    component: any;
    show: boolean;
    exact: boolean;
}

export const routes: IRouter[] = [
  {
    path: "/",
    title: "模块1",
    component: Module1,
    show: true,
    exact: true,
  },
  {
    path: "/path2",
    title: "模块2",
    component: Module2,
    show: true,
    exact: true,
  },
];
