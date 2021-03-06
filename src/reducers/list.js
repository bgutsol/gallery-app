import {
  GET_CARDS_LIST,
  GET_CARDS_LIST_SUCCESS,
  GET_CARDS_LIST_FAIL
} from '../actions/list';

const initialState = {
  cards: [],
  isLoading: false,
  hasError: false
};

const list = function (state = initialState, action) {
  switch (action.type) {
    case GET_CARDS_LIST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_CARDS_LIST_SUCCESS:
      return {
        ...state,
        cards: action.data,
        isLoading: false,
      };
    case GET_CARDS_LIST_FAIL:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
};

export default list;
