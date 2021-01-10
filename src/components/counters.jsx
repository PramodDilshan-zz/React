import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
          />
        ))}
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
      </div>
    );
  }
}
