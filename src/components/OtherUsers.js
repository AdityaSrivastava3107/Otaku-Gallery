import React from 'react'
import OnlineUsers from './OnlineUsers'

const OtherUsers = () => {
    return (
        <>
            <div className="h-1 carousel carousel-vertical rounded-box h-20">
                <div className="carousel-item h-full">
                   <OnlineUsers/>
                    </div>
                    <div className="carousel-item h-full">
                    <OnlineUsers/>
                </div>
            </div>
        </>
    )
}

export default OtherUsers
