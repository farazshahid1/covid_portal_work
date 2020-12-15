import React from "react";

import ReactBuilderContext from "../reactbuilder/ReactBuilderContext.jsx";

class Users extends ReactBuilderContext {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.Userkey = "users";
    this.showHandler = this.showHandler.bind(this);
  }

  showHandler() {
    const data = [...this.get(this.Userkey)];
    data.splice(5);
    this.setState({
      data,
    });
  }

  render() {
    let title = null;
    if (this.state.data.length > 0) {
      title = this.state.data.map((user) => {
        return <h3 key={user.id}>{user.title}</h3>;
      });
    }

    return (
      <div>
        <button onClick={this.showHandler}>Show Users</button>
        {title}
      </div>
    );
  }
}

export default Users;
