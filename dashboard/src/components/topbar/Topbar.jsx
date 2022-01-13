import React from 'react'
import "./topbar.css"
import profilephoto from "../../assets/image/profil-1.png"
import { NotificationsNone, MailOutline } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>EVA TECHNOLOGY</span>
                </div>

                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                         <NotificationsNone />
                         <span className='topIconBag'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                         <MailOutline />
                         <span className='topIconBag'>2</span>
                    </div>
                    <img src={profilephoto} className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}

