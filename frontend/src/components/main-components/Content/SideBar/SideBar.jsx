import React from 'react';
import content from '../Content.module.css'
import cls from './SideBar.module.css'
import user_path from '../../../../Figma-Sources/user.svg'
import friends_path from '../../../../Figma-Sources/friends-icon.svg'
import messages_path from '../../../../Figma-Sources/messages-icon.svg'
import locator_path from '../../../../Figma-Sources/locator-icon.svg'

import {NavLink} from 'react-router-dom'

const SideBar = () => {
    return (
      <nav id="sidebar" className={content.block}>
        
          <div className={cls.head}>
          <NavLink to="/Home/profile">
            <img src={user_path} alt="user"></img>
          </NavLink>
          <NavLink to="/Home/profile">
            <div className={cls.name}>Name</div>
          </NavLink>
          </div>
        <div className={cls.items_wrapper}>
            <NavLink className={cls.item} to="/Home/friends">
                <img className={cls.sidebar_icon} src={friends_path} alt="friends"></img>
                <span className={cls.sidebar_text}> Friends</span>
            </NavLink>
            <NavLink className={cls.item} to="/Home/messages">
                <img className={cls.sidebar_icon} src={messages_path} alt="messages"></img>
                <span className={cls.sidebar_text}> Messages</span>
            </NavLink>
            <NavLink className={cls.item} to="/Home/locator">
                <img className={cls.sidebar_icon} src={locator_path} alt="locator"></img>
                <span className={cls.sidebar_text}> Messages</span>
            </NavLink>
        </div>
      </nav>
    )
}

export default SideBar;