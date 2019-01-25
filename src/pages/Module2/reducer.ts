import { IAction } from "../../common/interfaceConstants";
import * as CONST from "../../common/actionTypeConstants";

interface IModule2State {
  n: string;
}

const initState: IModule2State = {
  n: "module2",
};

export default function homeReducers(state = initState, action: IAction): IModule2State {
  const { type, payload } = action;
  switch (type) {
    case CONST.SYNC_DATA:
      return { ...state, n: payload.data };
    case CONST.ASYNC_DATA:
      return { ...state, n: payload.data };
    default:
      return { ...state };
  }
}
