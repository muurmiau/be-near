import React from 'react';
import cls from './Profile.module.css'

import img1 from '../../../../../Figma-Sources/StockSnap_YNKHEDUMB5.jpg'
import img2 from '../../../../../Figma-Sources/StockSnap_VISYYURYFA.jpg'
import img3 from '../../../../../Figma-Sources/StockSnap_TNKLX6MUWC.jpg'
import img4 from '../../../../../Figma-Sources/StockSnap_SZCQC1QEW1.jpg'
import img5 from '../../../../../Figma-Sources/StockSnap_H8PHYPQ7O8.jpg'
import user_path from '../../../../../Figma-Sources/user.svg'


const Profile = () => {
    return (
        <div className={cls.profileWrapper}>
            <Header />
            <Content />
        </div>
    )
}

const Header = (props) => {
    return (
        <div className={cls.header}>
            <div className={cls.user}>
                <img className={cls.user_img} src={user_path} alt="user"></img>
                Name
            </div>
        </div>
    )
}


const Content = () => {
    return (
        <div className={cls.wrapper}>
            <img className={cls.photo} src={img1} alt="unluck"></img>
            <img className={cls.photo} src={img2} alt="unluck"></img>
            <img className={cls.photo} src={img3} alt="unluck"></img>
            <img className={cls.photo} src={img4} alt="unluck"></img>
            <img className={cls.photo} src={img5} alt="unluck"></img>
        </div>
    )
}

export default Profile;