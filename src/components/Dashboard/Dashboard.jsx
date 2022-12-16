import React from "react";
import "./Dashboard.css";
import Caret from "../../assets/Caret_down_font_awesome.png";
import { useState } from "react";

export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="Dash-Btn">
      <a href="#" className="Dashboard-sub" onClick={() => setOpen(!open)}>
        Dashboard
        <img id="caret" src={Caret} alt="" />
        <span className="profile-pic">{props.icon}</span>
      </a>
      {open && props.children}
    </li>
  );
}
