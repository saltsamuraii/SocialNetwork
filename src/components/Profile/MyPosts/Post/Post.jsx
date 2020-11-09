import React from "react";
import cl from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={cl.item}>
            <img
                src="https://static.wikia.nocookie.net/ninjago/images/6/6e/IMG_20200705_190743.JPG/revision/latest/top-crop/width/450/height/450?cb=20200705160948&path-prefix=ru"
                alt=""/>
                {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;