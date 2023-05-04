import React, { useState, useEffect} from 'react'
import axios from 'axios';
const Carousel = () => {
  const [post, setPost] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/displayprofile/profile', { headers: { 'Authorization': `Bearer ${localStorage.getItem('auth-token')}` } });
        const { post, description } = res.data.data;
        setPost(post);
        setDescription(description);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchProfile();
  }, []);
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
                  <p>{description}</p>
                </div>
                <figure><img src={`data:image/jpeg;base64,${post}`} alt="Shoes" /></figure>
              </div>
            </div>
          </div>
        </>
    )
}

export default Carousel
