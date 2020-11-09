import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10" placeholder="hello"></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div className={cl.posts}>
                <Post message="Hi z9bls"/>
                <Post message="Hi kavo"/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;