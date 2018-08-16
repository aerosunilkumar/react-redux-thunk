import { FETACH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log("Fetching")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: FETACH_POSTS,
                payload: data
            });
        })
}

export const createPost = (post) => dispatch => {
    console.log("Fetching");
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch({
                type: NEW_POST,
                payload: data
            });
        });
}