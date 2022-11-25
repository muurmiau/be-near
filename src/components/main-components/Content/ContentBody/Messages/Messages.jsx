import React from 'react';
import cls from './Messages.module.css'
import {NavLink, Route, Routes} from 'react-router-dom'

const Messages = (props) => {
    return (
        <div className={cls.wrapper}>
            <nav className={cls.users}>
                <User friend_id="tima" friend_name="Tima" />
                <User friend_id="vlad" friend_name="Vlad" />
            </nav>
            <Routes>
                <Route path='/tima' element={<Dialog friend_name="Tima" />}/>
                <Route path='/vlad' element={<Dialog friend_name="Vlad" />}/>
            </Routes>
        </div>
    )
}

const User = (props) => {
    return (
        <NavLink to={"/messages/" + props.friend_id}>
            <div className={`${cls.item}`}>
            {props.friend_name}
        </div>
        </NavLink>
    )
}

const Dialog = (props) => {
    return (
        <div className={cls.dialog}>
            <div className={`${cls.dialog} ${cls.header}`}>
                <div className={cls.contact}>
                    {props.friend_name}
                </div>
            </div>
            <div className={`${cls.dialog} ${cls.footer}`}>
                <Chat message={"Wassup " + props.friend_name}/>
            </div>

        </div>
    )
}

const Chat = (props) => {
    return (
        <div className={`${cls.chat}`}>
            {props.message}
        </div>
    )
}

export default Messages;