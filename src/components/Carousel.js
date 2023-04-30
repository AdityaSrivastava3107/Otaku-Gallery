import React from 'react'

const Carousel = () => {
    return (
        <>
          <div className="h-96 carousel carousel-vertical rounded-box" style={{ height: '40rem' }}>
            <div className="carousel-item h-full" style={{ justifyContent: 'center'}}>
              <div className="card w-96 bg-base-200 shadow-xl" style={{ width: '35rem', marginBottom: '25px'}}>
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
                    </div>
                  </div>
                  <h2 className="card-title" style={{ marginLeft: '45px', marginTop: '-39px' }}>Username</h2>
                  <p>Description of the post made by the user.</p>
                </div>
                <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
              </div>
            </div>
            <div className="carousel-item h-full" style={{ justifyContent: 'center'}} >
              <div className="card w-96 bg-base-200 shadow-xl" style={{ width: '35rem',  marginBottom: '25px' }}>
                <div className="card-body">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src="https://i.pinimg.com/originals/bf/b4/b6/bfb4b6bf038b30c42116828d2f539b30.jpg" alt='' />
                    </div>
                  </div>
                  <h2 className="card-title" style={{ marginLeft: '45px', marginTop: '-39px' }}>Username</h2>
                  <p>Description of the post made by the user.</p>
                </div>
                <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
              </div>
            </div>
          </div>
        </>
    )
}

export default Carousel
