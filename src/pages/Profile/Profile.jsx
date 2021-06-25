import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

import "./profile.css";

import { Users } from "../../dummyData";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="profileFeed">
          <div className="upper">
            <img src="assets/post/3.jpeg" alt="CoverPic" className="CoverPic" />
            <img
              src="assets/person/7.jpeg"
              alt="profilePic"
              className="profilePic"
            />
            <div className="details">
              <h1>Santanu Ghosh</h1>
              <p>Web Devloper</p>
            </div>
          </div>
          <div className="lower">
            <div className="feed">
              <Feed />
            </div>
            <div className="rightBar">
              <div className="info">
                <h3>User Information</h3>
                <p>
                  <b>City:</b>Kolkata
                </p>
                <p>
                  <b>From:</b>India
                </p>
                <p>
                  <b>Relationship:</b>Single
                </p>
              </div>
              <div className="friendsDiv">
                <h3>Friends</h3>
                <div className="friends">
                  {Users.map((user) => {
                    return <>
                      <div key={user.id} className="friend">
                        <img
                          src={user.profilePicture}
                          className="friendPic1"
                          alt="Friends"
                        />
                        <p>{user.username}</p>
                      </div>
                    </>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
