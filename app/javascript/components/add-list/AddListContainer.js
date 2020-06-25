import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddList from './AddList';
import { createList } from '../../actions/ListActions';

const mapStateToProps = (state, ownProps) => ({
  boardId: ownProps.boardId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addList: (title, callback) => {
    dispatch(createList(title, ownProps.boardId, callback));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddList)
