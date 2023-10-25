import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
    return (
        <div className="Notifications">
            <button style={{
                float: 'right',
                marginTop: '-50px',
                marginRight: '-50px',
                backgroundColor: '#fff',
                border: 'none',
                
                }} aria-label='Close'>
                <img src={closeIcon} alt="close" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" 
                    dangerouslySetInnerHTML={{
                        __html: getLatestNotification(),
                }}></li>
            </ul>
        </div>
    );
}

export default Notifications;