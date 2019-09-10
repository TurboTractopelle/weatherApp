import React, { Component } from "react";
import { connect } from "react-redux";

class Days extends Component {
	render() {
		return <div>Days: {this.props.dayNumber} </div>;
	}
}

const mapStateToProps = state => {
	return {
		dayNumber: state.daysReducer.value
	};
};

export default connect(mapStateToProps)(Days);
