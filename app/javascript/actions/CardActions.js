import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}
export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, payload: card };
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
