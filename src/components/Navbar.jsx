import React from "react";
import Logo from "../assets/BookrepLogo.avif";
import SearchIcon from "../assets/searchIcon.avif";
import "./card";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";

export default function Navbar() {
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
      {/* <Dashboard icon="😊">
        <DropdownItem name="Home" />
        <DropdownItem name="Courses" />
      </Dashboard> */}
    </ul>
  );
}
