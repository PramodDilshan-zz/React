import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar render");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
