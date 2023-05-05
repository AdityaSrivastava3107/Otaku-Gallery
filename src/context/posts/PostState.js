import postContext from "./postContext"
import { useState } from "react"
import axios from "axios"
const PostState = (props) => {
    const host = "http://localhost:5000"
    const postInitial = []
    // eslint-disable-next-line 
    const [post, setPost] = useState(postInitial)
    const token = localStorage.getItem('auth-token');

    // Get all user's Posts
    const fetchPosts = async () => {

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        };

        try {
            const response = await axios.get(`${host}/api/displayposts/posts`, { headers })
            setPost(response.data)
        } catch (error) {
            console.log(error);
        }

    }
    fetchPosts()
    
    const [username, setUsername] = useState('')
    // eslint-disable-next-line 
    const fetchUsername = () => {
        axios.post('http://localhost:5000/api/authorize/createuser', {
            username: username,
           
        }).then(response => {
            const { username } = response.data;
            setUsername(username);
        }).catch(error => {
            console.error(error);
        });
    }


    return (
        <postContext.Provider value={{ token, fetchPosts, username }}>
            {props.children}
        </postContext.Provider>
    )
}
export default PostState;