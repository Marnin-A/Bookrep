import React from "react";
import "./Dashboard.css";
import Caret from "../../assets/Caret_down_font_awesome.png";
import { useState } from "react";

export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button onClick={handleOpen}>Dropdown</button>
      <span className="profile-pic">{props.icon}</span>
    </div>
  );
}
