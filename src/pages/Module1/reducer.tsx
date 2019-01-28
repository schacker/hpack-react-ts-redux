import { IAction, IModule1State } from "../../common/interfaceConstants";
import * as ACTION_TYPE from "../../common/actionTypeConstants";
import * as React from "react";
import { Tag } from "antd/lib/index";

const initState: IModule1State = {
  dataSource: [],
  columns: [{
    title: "姓名",
    dataIndex: "name",
    key: "name",
    text: (text) => <a href="javascript:;">{text}</a>,
  }, {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  }, {
    title: "住址",
    dataIndex: "address",
    key: "address",
  }, {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag: string) => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    ),
  }, {
    title: "Action",
    key: "action",
    render: (text, record) => (
        <span>
          <a href="javascript:;">Invite {record && record.name}</a>
          <a href="javascript:;">Delete</a>
        </span>
    ),
  }],
};

export default function module1Reducers(state = initState, action: IAction): IModule1State {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.ACTION_ADD:
      state.dataSource.push(payload.data);
      return Object.assign({}, { ...state }, { dataSource: state.dataSource });
    case ACTION_TYPE.ACTION_REMOVE:
      state.dataSource.pop();
      return { ...state, dataSource: state.dataSource};
    default:
      return { ...state };
  }
}
