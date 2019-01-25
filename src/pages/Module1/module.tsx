import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Table, Tag, Button } from "antd/lib/index";
import * as TYPE from "../../common/interfaceConstants";
import { Dispatch, bindActionCreators } from "redux";
import * as actions from "./action";

class Module1Component extends Component<any, TYPE.IModule1State> {

  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: [{
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
        tags: ["nice", "developer"],
      }, {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园2号",
        tags: ["loser"],
      }],
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
            {/* <span>{JSON.stringify(text)}</span> */}
            <a href="javascript:;">Invite {record && record.name}</a>
            <a href="javascript:;">Delete</a>
          </span>
        ),
      }],
    };
  }

  /**
   * addList
   */
  public addListItem() {
    // const { dataSource } = this.state;
    this.props._addList({
      key: "3",
      name: "胡彦斌12",
      age: 32,
      address: "西湖区湖底公园12号",
      tags: ["1"],
    });
    // dataSource.push({
    //   key: "3",
    //   name: "胡彦斌12",
    //   age: 32,
    //   address: "西湖区湖底公园12号",
    //   tags: ["1"],
    // });
    // this.setState({dataSource});
  }
  /**
   * removeListItem
   */
  public removeListItem() {
    const { dataSource } = this.state;
    dataSource.pop();
    this.setState({ dataSource });
  }

  public render() {
    const { columns, dataSource } = this.state;
    return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
      <section>
        <Button onClick={this.addListItem.bind(this)}>add</Button>
        <Button onClick={this.removeListItem.bind(this)}>remove</Button>
      </section>
    </div>);
  }
}

const mapStateToProps = (state: any) => {
  const { dataSource, columns } = state.Module1;
  return Object.assign({}, { dataSource, columns });
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Module1 = connect(mapStateToProps, mapDispatchToProps)(Module1Component);

export default Module1;
