import * as actionsTypes from "../actions/actionsTypes";

const initialState = { value: 0 };

const daysReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionsTypes.DAY_ADD:
			return { ...state, value: state.value + action.value };
		default:
			return state;
	}
};

export default daysReducer;
