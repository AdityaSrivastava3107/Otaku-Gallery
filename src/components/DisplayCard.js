import React from 'react'

const DisplayCard = () => {
  return (
    <>
      <div className="card w-96 bg-info-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Your Post!</h2>
          <p>This is a Card.</p>
        </div>
        <figure><img src= "https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
      </div>
    </>
  )
}

export default DisplayCard
