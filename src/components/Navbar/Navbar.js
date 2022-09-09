import React from "react";
import Logo from "../../images/BookrepLogo.png";
import SearchIcon from "../../images/searchIcon.png";
import "./navbar.css";
import Dashboard from "../Dashboard/Dashboard.js";

export default function Navbar(props) {
  return (
    <ul className="navbar">
      <img id="Logo" src={Logo} alt="BookrepLogo" />

      <div className="Btns">
        <a className="nav-Btn" href="#">
          Explore
        </a>
        <a className="nav-Btn" href="#">
          Request
        </a>
        <a className="nav-Btn" href="#">
          Issues
        </a>
      </div>
      <div class="searchBox">
        <table className="searchContainer">
          <tr key="">
            <td>
              <input type="text" placeholder="Search" className="search" />
            </td>
            <td>
              <img class="searchIcon" src={SearchIcon} alt="search icon" />
            </td>
          </tr>
        </table>
      </div>
      <Dashboard icon="😊">Hello world</Dashboard>
    </ul>
  );
}
