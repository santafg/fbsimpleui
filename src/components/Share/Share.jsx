import React from "react";

import { PermMedia , Label , Room , EmojiEmotions } from "@material-ui/icons";
import "./share.css";
const Share = () => {
  return (
    <>
      <div className="shareContainer">
        <div className="shareBox">
          <div className="topSection">
            <img
              src="assets/person/2.jpeg"
              alt="Profile pic"
              className="profilePic"
            />
            <textarea placeholder="what's in your mind..." name="" id="" cols="30" rows="4"></textarea>
            
          </div>
          <hr />
          <div className="bottomSection">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor='tomato' className='shareicon' /> <span>Photo/Video</span>
              </div>
              <div className="shareOption">
                <Label htmlColor='blue' className='shareicon' /> <span>Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor='green' className='shareicon' /> <span>Locations</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor='goldenrod' className='shareicon' /> <span>Fellings</span>
              </div>
            </div>
            <div className="btn">
              <button>Share</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
