import * as TYPE from "../../common/interfaceConstants";
import * as ACTION_TYPE from "../../common/actionTypeConstants";
import { Dispatch } from "redux";

export function _addList(data: TYPE.IModule1StateListItem): any {
  return (dispatch: Dispatch) => {
    console.log(dispatch);
    return dispatch({
      type: ACTION_TYPE.ACTION_ADD,
      payload: {
        data: data || {},
      },
    });
  };
}

export function _removeList(data: TYPE.IModule1StateListItem): any {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTION_TYPE.ACTION_REMOVE,
      payload: {
        data: data || {},
      },
    });
  };
}
