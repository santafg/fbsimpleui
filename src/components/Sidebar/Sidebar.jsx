import React from "react";
import "./sidebar.css";

import { RssFeed, Videocam, Group, Bookmark, LiveTv } from "@material-ui/icons";

import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <div className="box">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Videocam />
              <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
              <LiveTv />
              <span className="sidebarListItemText">Go live</span>
            </li>
            <li className="sidebarListItem">
              <Group />
              <span className="sidebarListItemText">Group</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
          </ul>
          <button>Show more</button>
          <hr />
          <ul className="friendList">
            {Users.map((user) => 
              <li className="friend" key={user.id}>
                <img
                  src={user.profilePicture}
                  alt="Profile Picture"
                  className="profilePic"
                />
                <span className="name">{user.username}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
