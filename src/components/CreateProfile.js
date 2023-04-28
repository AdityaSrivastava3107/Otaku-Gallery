import React from 'react'

const CreateProfile = () => {
    return (
        <>
            <div className="container my-2">
                <h1 style={{ textAlign: 'center', alignSelf: 'center' }}>Create Your Profile!</h1>
            </div>
            <div className="avatar placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25vh' }}>
                <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-1xl">Add Image</span>
                </div>
            </div>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
                <input type="text" placeholder="Your name?" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vh' }}>
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
            </div>
        </>
    )
}

export default CreateProfile
