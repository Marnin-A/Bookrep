import React from "react";
import "./Dashboard.css";

export default function Dropdown() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        {props.children}
      </a>
    );
  }
  return <div className="dropdown">Dropdown</div>;
}
