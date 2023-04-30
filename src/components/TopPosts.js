import React from 'react'
import Carousel from './Carousel'

const TopPosts = () => {
  return (
    <>
    <div className="container prose" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '10vh',  margin:'0 auto'}}>
        <h1>Today's Top Arts!</h1>
    </div>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', margin:'0 auto' }}>
    <Carousel/>
    </div>
        </>
  )
}

export default TopPosts
