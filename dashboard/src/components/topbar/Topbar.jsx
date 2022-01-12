import React from 'react'
import "./topbar.css"
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
                </div>
            </div>
        </div>
    )
}

