import React from 'react'
import { Link } from 'react-router-dom'
const Notifications = () => {
  return (
    <div>
      <ul className="menu bg-base-100 w-56 rounded-box ">
        <li className="hover-bordered"><Link>Notification #1</Link></li>
        <li className="hover-bordered"><Link>Notification #2</Link></li>
        <li className="hover-bordered"><Link>Notification #3</Link></li>
      </ul>
    </div>
  )
}

export default Notifications
