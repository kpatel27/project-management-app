import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}
export function createCardSuccess() {
  return { type: types.CREATE_CARD_SUCCESS };
}

export function createCard(title, listId, callback) {
  return dispatch => {
    // dispatch(createListRequest());
    apiClient.createCard(title, listId, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}
