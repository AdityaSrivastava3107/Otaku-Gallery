import React from 'react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <>
      <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin:'0 auto' }}>
        <h1>Your Feed</h1>
      </div>
      <div className="container h-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', margin: '0 auto' }}>
        <Carousel />
      </div>
    </>
  )
}

export default Home
