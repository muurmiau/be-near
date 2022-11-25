import React from 'react';
import content from './../Content.module.css'
import cls from './SideBar.module.css'
import user_path from './../../../../Figma-Sources/user.svg'

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
            <div className={cls.item}>
              <NavLink to="/Home/friends"><div>Friends</div></NavLink>
            </div>
            <div className={cls.item}>
              <NavLink to="/Home/messages"><div>Messages</div></NavLink>
            </div>
            <div className={cls.item}>
              <NavLink to="/Home/locator"><div>Locator</div></NavLink>
            </div>
        </div>
      </nav>
    )
}

export default SideBar;