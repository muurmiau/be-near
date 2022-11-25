import React from 'react';
import cls from './Header.module.css'
import glob from './../Global.module.css'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
      <header className={cls.wrapper}>
          <div className={glob.content_width}>
            <div className={cls.content}>
              <NavLink to="/"><Logo /></NavLink>
              <Menu />
            </div>
          </div>
        </header>
    )
  }

export default Header;