import React from 'react'
//import OnlineUsers from './OnlineUsers'
import { Link } from 'react-router-dom'
const OtherUsers = () => {
  return (
    <>
      <ul className="menu bg-base-100 w-56 rounded-box">
        <li className="hover-bordered"><Link>
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #1</Link></li>
        <li className="hover-bordered"><Link>
        <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #2</Link></li>
        <li className="hover-bordered"><Link>
        <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #3</Link></li>
        <li className="hover-bordered"><Link>
        <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #4</Link></li>
        <li className="hover-bordered"><Link>
        <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #5</Link></li>
        <li className="hover-bordered"><Link>
        <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
            </div></div>Online User #6</Link></li>
      </ul>
    </>
  )
}

export default OtherUsers
