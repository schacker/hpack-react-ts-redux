import * as React from "react";
import Header from "components/Header/module";
import Container from "components/Container/module";
import * as TYPE from "./type";

import "./index.styl";

class App extends React.Component<TYPE.IProps, {}> {

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

export default App;
