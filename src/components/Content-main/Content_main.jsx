import React , {useState} from "react";
import { BsCart3 } from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
  import { MdDashboard } from "react-icons/md";
  import { MdDownload } from "react-icons/md";
import {
 
  FaHistory,
  FaCalendarAlt,
  FaRegClock,
  FaChartBar,
  FaComments,
   FaPhone,
  FaCog
} from "react-icons/fa";

function Content_main({openSidebarToggle}) {

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""} >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          {/* <BsCart3 className='icon_header'/>Shop  */}
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <h6 className="sidebar-list-item">General</h6>
        <li className="sidebar-list-item">
          <a href="" style={{ listStyle: "none" }}>
            <MdDashboard
              style={{ marginRight: "8px", color: "black", fontWeight: "900" }}
            />{" "}
            Dashboard
          </a>{" "}
        </li>
        <li className="sidebar-list-item">
          <FaHistory style={{ marginRight: "8px",  color: "#9e9ea4" }} /> History
        </li>
        <li className="sidebar-list-item">
          <FaCalendarAlt style={{ marginRight: "8px", color: '#9e9ea4' }} />{" "}
          Calendar
        </li>
        <li className="sidebar-list-item">
          <FaRegClock style={{ marginRight: "8px", color: "#555" }} />{" "}
          Appointments
        </li>
        <li className="sidebar-list-item">
          <FaChartBar style={{ marginRight: "8px", color: "#555" }} />{" "}
          Statistics
        </li>

        <h6 className="sidebar-list-item sidebar-list-item-tool">Tool</h6>

        <li className="sidebar-list-item">
          <FaComments style={{ marginRight: "8px", color: "#555" }} /> Chat
        </li>
        <li className="sidebar-list-item">
          <FaPhone style={{ marginRight: "8px", color: "#555" }} /> Support
        </li>

         <li className="sidebar-list-item set-name">
          <FaCog style={{ marginRight: "8px", color: "#555" }} /> Setting
        </li>
 

      </ul>
    </aside>
  );
}

export default Content_main;
