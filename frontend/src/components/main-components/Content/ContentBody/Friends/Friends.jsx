import React from 'react';
import cls from './Friends.module.css'
import vlad from '../../../../../Figma-Sources/andy-vult-DeyonzU6E4M-unsplash.jpg'
import tima from '../../../../../Figma-Sources/azat-satlykov-XgHZzKdgVKc-unsplash.jpg'
import egor from '../../../../../Figma-Sources/jodyhongfilms-lMQXWu1tQMk-unsplash.jpg'
const Friends = () => {
    return (
        <div className={cls.wrapper}>
            <Friend friend_name="Vlad" avatar={vlad}/>
            <Friend friend_name="Tima" avatar={tima}/>
            <Friend friend_name="Egor" avatar={egor}/>
        </div>
    )
}

const Friend = (props) => {
    return (
        <div className={cls.item}>
            <img className={cls.friendAvatar} src={props.avatar} alt="Here is your friend"></img>
            <div>{props.friend_name}</div>
        </div>
    )
}

export default Friends;