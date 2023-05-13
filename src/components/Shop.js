import React from 'react'
import ShopCard from './ShopCard'

const Shop = () => {
  return (
    <>
      <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin: '0 auto' }}>
        <h1>This is Shop.</h1>
      </div>
      <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin: '0 auto' }}>
      <h3>Buy Art from your favourite Artist</h3>
      </div>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
      <div className="grid grid-cols-3 gap-4">
        <div><ShopCard/></div>
        <div><ShopCard/></div>
        <div><ShopCard/></div>
        <div><ShopCard/></div>
        <div><ShopCard/></div>
        <div><ShopCard/></div>
      </div>
      </div>
    </>
  )
}

export default Shop
