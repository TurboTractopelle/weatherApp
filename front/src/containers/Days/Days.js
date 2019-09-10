import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/days";

class Days extends Component {
	addValue = value => e => {
		this.props.storeAdd(value);
	};

	render() {
		return (
			<div>
				Days: {this.props.dayNumber}
				<button onClick={this.addValue(1)}>+1</button>
				<button onClick={this.addValue(2)}>+2</button>
				<button onClick={this.addValue(-1)}>-1</button>
				<button onClick={this.addValue(-2)}>-2</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		dayNumber: state.daysReducer.value
	};
};

const mapDispatchToProps = dispatch => {
	return {
		storeAdd: value => dispatch(actions.addDay(value))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Days);
