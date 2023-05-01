import React from 'react'
import Carousel from './Carousel'
import OtherUsers from './OtherUsers'
import StatBox from './StatBox'
const Home = () => {
  return (
    <>
    <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin:'0 auto' }}>
        <h1>Your Feed</h1>
      </div>
    <div className="grid-cols-4 grid">   
    <div className='ml-20' style={{ height: '30rem', borderRadius: '12px' }}>
      <StatBox/>
    </div>
      <div className="col-span-2 h-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', margin: '0 auto' }}>
        <Carousel />
      </div>
      <div className='' >
           <OtherUsers />
        </div>
        </div>
    </>
  )
}

export default Home
