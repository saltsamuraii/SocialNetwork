import React from "react";
import cl from "./ProfileInfo.module.css";



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""/>
            </div>
            <div className={cl.description}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;