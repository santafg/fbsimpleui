import React from 'react'
import './rightbar.css'

import Online from '../Online Friends/Online'

import {Users} from '../../dummyData';


const Rightbar = () => {
    return (
        <>
            <div className="rightbarContainer">
                <div className="rightbarBox">
                    <div className="birthdayBox">
                        <img src="/assets/gift.png" alt="Birth day" className='giftPic'/>
                        <span><b>Apurba</b> and <b>4 other friends</b> have birthday today</span>
                    </div>
                    <img src="/assets/ad.png" alt="Rightbar Ad" className='rightBarAd' />
                    <hr/>
                    <h4>Online friends</h4>
                    <ul className="onlineFriendList">
                        {
                            Users.map((user)=><Online key={user.id} user={user}/>)
                        }
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Rightbar
