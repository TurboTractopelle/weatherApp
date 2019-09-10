import * as actionsTypes from "./actionsTypes";
import actionCreator from "./actionCreator";

export const addDay = actionCreator(actionsTypes.DAY_ADD, "value");

export const addDayAsync = value => dispatch => {
  console.log("addDayAsync");
  setTimeout(() => {
    dispatch(addDay(value));
  }, 1500);
};
