import * as actionsTypes from "./actionsTypes";
import actionCreator from "./actionCreator";

export const addDay = actionCreator(actionsTypes.DAY_ADD, "value");
