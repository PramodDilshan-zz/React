import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
