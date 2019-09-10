import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/days";

class Days extends Component {
  addValue = value => () => {
    this.props.storeAdd(value);
  };

  addValueAsync = value => () => {
    this.props.storeAddAsync(value);
  };

  render() {
    const loading = this.props.loading && <p>...</p>;

    return (
      <div>
        Days: {this.props.dayNumber}
        <div>
          <h3>sync</h3>
          <button onClick={this.addValue(1)}>+1</button>
          <button onClick={this.addValue(2)}>+2</button>
          <button onClick={this.addValue(-1)}>-1</button>
          <button onClick={this.addValue(-2)}>-2</button>
        </div>
        <div>
          <h3>async</h3>
          {loading}
          <button onClick={this.addValueAsync(1)}>+1</button>
          <button onClick={this.addValueAsync(2)}>+2</button>
          <button onClick={this.addValueAsync(-1)}>-1</button>
          <button onClick={this.addValueAsync(-2)}>-2</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dayNumber: state.daysReducer.value,
  loading: state.daysReducer.loading
});

const mapDispatchToProps = dispatch => {
  return {
    storeAdd: value => dispatch(actions.addDay(value)),
    storeAddAsync: value => dispatch(actions.addDayAsync(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Days);
