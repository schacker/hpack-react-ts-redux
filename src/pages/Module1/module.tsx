import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd/lib/index";
import * as TYPE from "../../common/interfaceConstants";
import { Dispatch, bindActionCreators } from "redux";
import * as actions from "./action";

class Module1Component extends Component<any, TYPE.IModule1State> {

  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [],
    };
  }

  /**
   * addList
   */
  public addListItem() {
    this.props._addList({
      key: Date.now() + "",
      name: "胡彦斌12",
      age: 32,
      address: "西湖区湖底公园12号",
      tags: ["1"],
    });
  }
  /**
   * removeListItem
   */
  public removeListItem() {
    this.props._removeList();
  }

  public render() {
    const { columns, dataSource } = this.props.data;
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
  return {
    data: state.Module1,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Module1 = connect(mapStateToProps, mapDispatchToProps)(Module1Component);

export default Module1;
