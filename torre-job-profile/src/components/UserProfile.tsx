import React from 'react'
import userStyle from '../styles/userprofile.module.css'
import {FiHexagon} from 'react-icons/Fi'
import Image from 'next/image';
import { userAgent } from 'next/server';



function UserProfile({data, image}) {
  return (
        <main>
            <div className={userStyle.container}>
                <FiHexagon className={userStyle.hexagon} />
                <img src={image !== undefined ? image : "User doesn't exist"} alt = "profile-pic" width={80} height={80} id={userStyle.img}/>
                <div>
                    <center>
                        <h1 className={userStyle.name}>{data}</h1>
                    </center>
                </div>
            </div>
        </main>
    )
}
export default UserProfile