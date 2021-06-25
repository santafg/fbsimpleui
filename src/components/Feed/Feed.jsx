import React from "react";
import './feed.css'

import Share from "../Share/Share";
import Post from "../Post/Post";

import {Posts } from '../../dummyData'

const Feed = () => {
  return (
    <>
      <div className="feedContainer">
        <Share />
        {
          Posts.map((p)=>{
            return <Post key={p.id} post={p}/>
          })
        }
        
      </div>
    </>
  );
};

export default Feed;
