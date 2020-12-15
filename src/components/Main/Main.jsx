import React, { Component } from "react";

import ReactBuilderParent from "../../reactbuilder/ReactBuilderParent";
import User from "../Users/Users";
import Form from "../Forms/Forms";
import Info from "../Info/Info";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __initContext: [
        {
          url: "https://jsonplaceholder.typicode.com/posts",
          key: "users",
        },
      ],
    };
  }

  render() {
    return (
      <ReactBuilderParent __initContext={this.state.__initContext}>
        <Form />
        <Info />
        <User />
      </ReactBuilderParent>
    );
  }
}

export default Main;
