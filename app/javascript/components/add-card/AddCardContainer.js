import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCard from './AddCard';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateCard: (title, callback) => {
      dispatch(createCard(title, ownProps.listId, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
