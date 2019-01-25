import { IAction, IModule1State } from "../../common/interfaceConstants";
import * as ACTION_TYPE from "../../common/actionTypeConstants";

const initState: IModule1State = {
  dataSource: [],
  columns: [],
};

export default function homeReducers(state = initState, action: IAction): IModule1State {
  const { type, payload } = action;
  console.log(state, action);
  switch (type) {
    case ACTION_TYPE.ACTION_ADD:
      state.dataSource.push(payload.data);
      console.log(JSON.stringify(state.dataSource));
      return Object.assign({}, { ...state }, { dataSource: state.dataSource });
    case ACTION_TYPE.ACTION_REMOVE:
      state.dataSource.pop();
      return { ...state, dataSource: state.dataSource};
    default:
      return { ...state };
  }
}
