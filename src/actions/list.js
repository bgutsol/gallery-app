import axios from 'axios';

export const GET_CARDS_LIST = 'GET_CARDS_LIST_REQUEST';
export const GET_CARDS_LIST_SUCCESS = 'GET_CARDS_LIST_SUCCESS';
export const GET_CARDS_LIST_FAIL = 'GET_CARDS_LIST_FAIL';

export function getCardsListRequest () {
  return {
    type: GET_CARDS_LIST
  };
}

export function getCardsListRequestSucccess (data) {
  return {
    type: GET_CARDS_LIST_SUCCESS,
    data: data.data.data.children
  };
}

export function getCardsListRequestFail (error) {
  return {
    type: GET_CARDS_LIST_FAIL,
    error
  };
}

export function fetchCardsList () {
  return (dispatch, getState) => {
    dispatch(getCardsListRequest());

    axios.get(`https://www.reddit.com/r/aww.json`)
      .then(function (response) {
        dispatch(getCardsListRequestSucccess(response));
      })
      .catch(function (error) {
        dispatch(getCardsListRequestFail(error));
      });
  };
}
