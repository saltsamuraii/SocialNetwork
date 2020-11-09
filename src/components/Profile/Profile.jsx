import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={cl.content}>
        <img
            src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
            alt=""/>
        <div className={cl.avatar}>
            <img src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt=""/>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;