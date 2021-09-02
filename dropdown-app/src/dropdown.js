import React from "react";

class Dropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-menu">
          Choose One
          <span className="fa fa-caret-down"></span>
        </div>
        <div className="dropdown-content">
          <div className="dropdown-item">React</div>
          <div className="dropdown-item">Vue</div>
          <div className="dropdown-item">Angular</div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
