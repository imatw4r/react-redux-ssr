import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersListPage extends Component {
  componentDidMount() {
    console.log("Component Did Render");
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    console.log("Rendering UsersList...");
    console.log("Users", this.props.users);
    return (
      <div>
        Here's a big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  console.log("State", state);
  return { users: state.users };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage),
  loadData
};
