import React , {useState} from "react";

import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

import imgBoy from "../../assets/boy.png";
import imgPlus from "../../assets/plus.png";

function Header({OpenSidebar}) {
 




  return (
    <header className="header ">
      <div className="main-header-join">
         <div className="main-heager-div">
        {" "}
        <div className="dash-logo">
          <span className="logo-p">Health </span> care.
        </div>
      </div>
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar}  />
        <div className=""></div>
      </div>
      </div>
      <div className="header-search-bar-img">
        <div className="search-bar" style={{ display: "flex", gap: "7px" }}>
          <div className="dash-search">
            <div className="head-search">
              <BsSearch className="icon head-search"></BsSearch>
            </div>
            <div className="head-search-name">Search</div>
          </div>
          <div className=" bell-icon-dash">
            <BsFillBellFill className="icon " />
          </div>
        </div>

        {/* /* <div className='bell-icon-dash-a'>
           <img src="{iBoy}" alt="#boy" />
                 <img src=" {iPlus}" alt="#plus" /> 

        </div> */}
        <div className="dash-header-boy-img">
          <div id="boy-img" className="dash-header-boy dash-header-boy-one ">
            <img src={imgBoy} alt="Boy" style={{ width: "20px" }} />
          </div>
          <div id="plus-img" className="dash-header-boy dash-header-boy-two">
            <img src={imgPlus} alt="Plus" style={{ height: "20px" }} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
