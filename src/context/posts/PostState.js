import postContext from "./postContext"
import { useState } from "react"
import axios from "axios"
const PostState = (props) => {
    const host = "http://localhost:5000"
    const postInitial = []
    const [post, setPost] = useState(postInitial)
    const token = localStorage.getItem('auth-token');
    
    // Get all user's Posts
    const fetchPosts = async () => {

        const headers = {
            'auth-token': token
        };

        try {
            const response = await axios.get(`${host}/api/displayposts/posts`, { headers })
            setPost(response.data)
        } catch (error) {
            console.log(error);
        }

    }
    fetchPosts()


    return (
        <postContext.Provider value={{ token, fetchPosts }}>
            {props.children}
        </postContext.Provider>
    )
}
export default PostState;