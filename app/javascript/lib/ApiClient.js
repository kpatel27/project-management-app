import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: function(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: function(id, callback) {
    return axios
      .get(`${routes.BOARDS_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList: function(title, boardId, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, {
        board_id: boardId,
        list: {
          title,
        },
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  editList: function(properties, listId, callback) {
    return axios
      .patch(`${routes.CREATE_LIST_URL}/${listId}`, {
        position: properties.position,
        title: properties.title,
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  fetchCard: function(id, callback) {
    return axios
      .get(`${routes.CREATE_CARD_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard: function(title, listId, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, {
        list_id: listId,
        card: {
          title,
        },
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  editCard: function(id, newProps, callback) {
    return axios
      .patch(`${routes.CREATE_CARD_URL}/${id}`, {
        card: newProps,
      })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
