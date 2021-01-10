import React, { Component } from "react";

export default class counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">
          Increament
        </button>
      </div>
    );
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
