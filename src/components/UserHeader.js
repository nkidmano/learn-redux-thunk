import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserById } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUserById(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">Author: {user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user : state.users.find(user => user.id === ownProps .userId) };
};

export default connect(
  mapStateToProps,
  { fetchUserById }
)(UserHeader);
