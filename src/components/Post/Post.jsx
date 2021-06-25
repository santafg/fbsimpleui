import React, { useState } from 'react'

import {MoreVert} from '@material-ui/icons';

import './post.css'

import {Users} from '../../dummyData';

const Post = ({post}) => {
    const [like, setlike] = useState(post.like);
    const [isLike, setisLike] = useState(false);


    const clickHandle = () => {
        setlike(isLike ? like-1 : like+1);
        setisLike(!isLike);
    }

    return (
        <>
            <div className="postContainer">
                <div className="postBox">
                    <div className="top">
                        <div className="topLeft">
                            <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="ProfilePic" className='ProfilePic' />
                            <span className='name'>{Users.filter(u=>u.id === post.userId)[0].username}</span>
                            <span className="time">{post.date}</span>
                        </div>
                        <div className="topRight">
                            <MoreVert/>
                        </div>
                    </div>
                    <div className="center">
                        <span className="title">{post.dec}</span>
                        <img src={post.photo} alt="Post pic" className='postPic' />
                    </div>
                    <div className="bottom">
                        <div className="bottomLeft">
                            <img onClick={clickHandle} className='reactIcon' src="/assets/like.png" alt="like"/>
                            <img onClick={clickHandle} className='reactIcon' src="/assets/heart.png" alt="heart" />
                            <span>{like} people like it</span>
                        </div>
                        <div className="bottomRight">
                            <span>{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
