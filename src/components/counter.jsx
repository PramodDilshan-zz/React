import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    console.log("Counter constructor");
  }

  componentWillUnmount() {
    console.log("counter unmount");
  }

  componentDidUpdate(preProps, preState) {
    console.log("preProps", preProps.counter.value);
    console.log("thisProps", this.props.counter.value);
    console.log("preState", preState);
  }

  componentDidMount() {
    //ajax call
    // this.setState()
    console.log("Counter didMount");
  }
  render() {
    console.log("Counter render");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}
