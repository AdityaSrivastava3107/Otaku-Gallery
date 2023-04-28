import React from 'react'

const TopPosts = () => {
  return (
    <>
    <div className="container my-3" style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height : '1rem'}}>
        <h1>Today's Top Arts!</h1>
    </div>
        <div className="container" style={{display: 'flex',alignItems: 'center',justifyContent: 'center',height: '100vh',}}>
            <div className="h-96 carousel carousel-vertical rounded-box" style={{height : '40rem'}}>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">USER1</h2>
                            <p>Artwork of Ichigo Kurosaki.</p>
                        </div>
                        <figure><img src="https://dthezntil550i.cloudfront.net/lt/latest/lt2011060857104450013333053/1280_960/042805e7-ea68-45f8-b119-3faef6e2b75d.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">USER2</h2>
                            <p>Artwork of Izuku.</p>
                        </div>
                        <figure><img src="https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/01/9-izuku-midoriya-drawing-lesson.jpg.webp" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">USER2</h2>
                            <p>Kaneki sketch.</p>
                        </div>
                        <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">Your Post!</h2>
                            <p>This is a Card.</p>
                        </div>
                        <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">Your Post!</h2>
                            <p>This is a Card.</p>
                        </div>
                        <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">Your Post!</h2>
                            <p>This is a Card.</p>
                        </div>
                        <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
                <div className="carousel-item h-full">
                    <div className="card w-96 bg-info-content shadow-xl" style={{width : '45rem'}}>
                        <div className="card-body">
                            <h2 className="card-title">Your Post!</h2>
                            <p>This is a Card.</p>
                        </div>
                        <figure><img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/img_20200921_002031_476-1rWaxJScSLehYoCG.jpg" alt="Shoes" /></figure>
                    </div>
                </div>
            </div>
            </div>
        </>
  )
}

export default TopPosts
