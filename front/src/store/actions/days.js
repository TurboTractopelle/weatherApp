import * as actionsTypes from "./actionsTypes";
import actionCreator from "./actionCreator";

export const addDay = actionCreator(actionsTypes.DAY_ADD, "value");

export const addDayAsync = value => dispatch => {
  dispatch(dayLoadingStart());
  setTimeout(() => {
    dispatch(dayLoadingStop());
    dispatch(addDay(value));
  }, 1500);
};

export const dayLoadingStart = actionCreator(actionsTypes.DAY_LOADING_START);
export const dayLoadingStop = actionCreator(actionsTypes.DAY_LOADING_STOP);
