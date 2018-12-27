import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserById } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUserById(this.props.userId);
  }

  render() {
    return <div>Author: {this.props.user.name}</div>;
  }
}

export default connect(
  null,
  { fetchUserById }
)(UserHeader);
