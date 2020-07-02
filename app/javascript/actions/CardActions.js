import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, payload: card };
}
export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}
export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, payload: card };
}

export function fetchCard(id, callback) {
  return (dispatch) => {
    // dispatch(createListRequest());
    apiClient.fetchCard(id, (card) => {
      dispatch(fetchCardSuccess(card));

      if (callback) {
        callback(card);
      }
    });
  };
}

export function createCard(title, listId, callback) {
  return (dispatch) => {
    // dispatch(createListRequest());
    apiClient.createCard(title, listId, (newCard) => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}
