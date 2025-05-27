import React , {useState} from "react";
import "./App.css";
import "./styles/sidebar.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/responsive.css";
import Header from "./components/Header/Header.jsx";
import Content_main from "./components/Content-main/Content_main";
import Home from "./components/Home/Home.jsx";

function App() {
  const [openSidebarToggle , setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  





  return (
    <div className="dashboard-container">
      <div  className="dashboard-container-second">
        <div className="flex-row">
          <div className="right-column">
            <Header OpenSidebar={OpenSidebar} />
          </div>
        </div>

        <div className="content">
          <div className="left-column">
            <Content_main  openSidebarToggle={openSidebarToggle}  />
          </div>
          <div className="home-row">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
