import React, { Component } from "react";

export default class counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this);
  //   }

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
    console.log(this);
    console.log("clicked");
  };

  renderTags() {
    return this.state.tags.length === 0 ? (
      <p>No Tags</p>
    ) : (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

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
