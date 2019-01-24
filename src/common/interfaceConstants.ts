
export interface IAction {
  type: string;
  payload: any;
}

export interface IModule1Prop {
  type: string;
  payload: any;
}

interface IModule1StateListItem {
  key: number | string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
interface IModule1StateColumnsItem {
  title: string;
  dataIndex?: string;
  key: string;
  text?: (text: string) => JSX.Element;
  render?: (text?: any, record?: any) => JSX.Element;
}

export interface IModule1State {
  dataSource: IModule1StateListItem[];
  columns: IModule1StateColumnsItem[];
}
