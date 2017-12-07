import {
  CHANGE_SLIDER_FILTER_VALUE
} from '../actions/filter';

const initialState = {
  value: 0
};

const filter = function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SLIDER_FILTER_VALUE:
      return {
        value: action.value
      };

    default:
      return state;
  }
};

export default filter;
