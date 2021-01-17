import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={cl.myPosts}>
            <h3>My posts</h3>
            <div className={cl.myWall}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/>
            </div>
            <div>
                <button className={cl.btn} onClick={onAddPost}>Add post</button>
                <button className={cl.btn}>Remove post</button>
            </div>
            <div className={cl.posts}>
                {postsElement}
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;