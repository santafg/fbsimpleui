import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="feed">
          <Feed />
        </div>
        <div className="rightbar">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Home;
