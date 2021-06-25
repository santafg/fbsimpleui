import React from "react";
import {
  Search,
  PersonAdd,
  Chat,
  Notifications
} from "@material-ui/icons";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Social</span>
          </Link>
        </div>
        <div className="center">
          <div className="search">
            <Search className="searchIcon" />
            <input type="text" placeholder="search friends..." />
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <div className="iconDiv">
              <PersonAdd className="icon" />
              <span className="count">3</span>
            </div>
            <div className="iconDiv">
              <Chat className="icon" />
              <span className="count">4</span>
            </div>
            <div className="iconDiv">
              <Notifications className="icon" />
              <span className="count">1</span>
            </div>
            <div className="account">
              <Link to="/profile">
                <img
                  src="assets/person/7.jpeg"
                  alt="profile"
                  className="profilePic"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
