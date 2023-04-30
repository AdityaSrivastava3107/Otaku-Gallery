import React from 'react'

const CreateProfile = () => {
    return (
        <>
            <div className="container prose" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin: '0 auto' }}>
                <h1>Set Your Profile!</h1>
            </div>
            <div className="avatar placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20vh', margin: '0 auto' }}>
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text">
                        <button className="btn btn-circle btn-outline">
                        <svg fill="#f5f7fa" width="800px" height="800px" viewBox="0 0 24 24" id="plus"  xmlns="http://www.w3.org/2000/svg" class="icon"><path id="primary" d="M12,20a1,1,0,0,1-1-1V13H5a1,1,0,0,1,0-2h6V5a1,1,0,0,1,2,0v6h6a1,1,0,0,1,0,2H13v6A1,1,0,0,1,12,20Z" style={{fill: 'rgb(255, 255, 255)'}}></path></svg>
                        </button>
                    </span>
                </div>
            </div>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh', margin: '0 auto' }}>
                <input type="text" placeholder="Your name?" className="input input-bordered input-primary w-full max-w-xs" />
            </div>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vh', margin: '0 auto' }}>
                <textarea className="textarea textarea-primary w-80" placeholder="Bio"></textarea>
            </div>
        </>
    )
}

export default CreateProfile
