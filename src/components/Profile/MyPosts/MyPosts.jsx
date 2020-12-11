import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let postsElement = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={cl.myPosts}>
            <h3>My posts</h3>
            <div className={cl.myWall}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button className={cl.btn} onClick={addPost}>Add post</button>
                <button className={cl.btn}>Remove post</button>
            </div>
            <div className={cl.posts}>
                { postsElement }
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;