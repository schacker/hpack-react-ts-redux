import * as React from "react";
import { connect } from "react-redux";
import Header from "components/Header/module";
import Container from "components/Container/module";
import * as TYPE from "./type";

import "./index.styl";

class AppComponent extends React.Component<TYPE.IProps, {}> {

  constructor(props: TYPE.IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="wrap-container">
        <Header />
        <Container router={this.props.router} />
      </div>
    );
  }
}

const mapStateToProps = (state: null) => {
  return {};
};

const App = connect(mapStateToProps)(AppComponent);

export default App;
