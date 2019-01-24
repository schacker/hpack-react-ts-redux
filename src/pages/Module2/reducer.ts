import { IAction } from "../../common/interfaceConstants";
import * as CONST from "../../common/actionTypeConstants";
import * as TYPES from "../../common/stateTypeConstants";

const initState: TYPES.IHomePageStoreState = {
  syncId: "默认值",
  asyncId: "默认值",
};

export default function homeReducers(state = initState, action: IAction): TYPES.IHomePageStoreState {
  const { type, payload } = action;
  switch (type) {
    case CONST.SYNC_DATA:
      return { ...state, syncId: payload.data };
    case CONST.ASYNC_DATA:
      return { ...state, asyncId: payload.data };
    default:
      return { ...state };
  }
}
