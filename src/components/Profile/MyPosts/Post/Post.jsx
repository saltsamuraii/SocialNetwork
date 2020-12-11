import React from "react";
import cl from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={cl.item}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Borat_in_Cologne.jpg"
                alt=""/>
                {props.message}
            <div>
                <button className={cl.btn}>like</button> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;