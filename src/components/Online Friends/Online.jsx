import React from "react";


import './online.css'

const Online = ({user}) => {
  return (
    <>
      <li className="onlineFriend">
        <div className="profilePic">
          <img src={user.profilePicture} alt="Pic" className="pic" />
          <span className="online"></span>
        </div>
        <span>{user.username}</span>
      </li>
    </>
  );
};

export default Online;
