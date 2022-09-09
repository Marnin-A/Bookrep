import React from "react";
import Logo from "../../images/BookrepLogo.png";
import SearchIcon from "../../images/searchIcon.png";
import "./navbar.css";
import Dropdown from "../Dropdown/Dropdown";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img id="Logo" src={Logo} alt="BookrepLogo" />

      <div className="Btns">
        <a className="navBtn" href="#">
          Explore
        </a>
        <a className="navBtn" href="#">
          Request
        </a>
        <a className="navBtn" href="#">
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
      <Dropdown className="DashBtn"></Dropdown>
    </div>
  );
}
