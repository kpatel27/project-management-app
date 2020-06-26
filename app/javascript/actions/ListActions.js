import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list };
}

export function createList(title, boardId, callback) {
  return dispatch => {
    dispatch(createListRequest());
    apiClient.createList(title, boardId, newList => {
      dispatch(createListSuccess(newList));

      if (callback) {
        callback();
      }
    });
  };
}

export function editList(newProperties, listId, callback) {
  return dispatch => {
    // dispatch(createListRequest());
    apiClient.editList(newProperties, listId, updatedList => {
      dispatch(editListSuccess(updatedList));

      if (callback) {
        callback();
      }
    });
  };
}
