import * as actionsTypes from "../actions/actionsTypes";

const initialState = { value: 0, loading: false };

const daysReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.DAY_ADD:
      return { ...state, value: state.value + action.value };
    case actionsTypes.DAY_LOADING_START:
      return { ...state, loading: true };
    case actionsTypes.DAY_LOADING_STOP:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default daysReducer;
