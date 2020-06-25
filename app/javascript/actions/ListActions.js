import apiClient from '../lib/ApiClient';
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function createList(title, boardId, callback) {
  return (dispatch) => {
    dispatch(createListRequest());
    apiClient.createList(title, boardId, callback)
  }
}