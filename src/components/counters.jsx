import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  constructor() {
    super();
    console.log("Counters constructor");
  }

  componentDidMount() {
    //ajax call
    // this.setState()
    console.log("Counters didMount");
  }
  render() {
    console.log("Counters render")
    const { counters, onDelete, onIncreament, onReset } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncreament={onIncreament}
          />
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}
