import React from "react";
import "./Dashboard.css";
import { useState } from "react";

export default function Dashboard(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="Dash-Btn">
      <a href="#" className="Dashboard-sub" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      <span>Dashboard</span>
      {open && props.children}
    </li>
  );
}
