import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import * as TYPE from "./type";
import "./index.styl";

export default class extends Component<TYPE.IProps, {}> {
  public render() {
    const { router } = this.props;
    return (
      <div className="side-container">
        {
          router.length > 0 && router.map((item, i) =>
          <div className="nav-container" key={i}>
            <NavLink strict exact={item.exact} to={item.path} activeClassName="selected">
              {item.title}
            </NavLink>
          </div>)
        }
      </div>
    );
  }
}
