import React from 'react';
import logo_path from '../../../../Figma-Sources/logo-full.svg'
import cls from './Logo.module.css'

const Logo = () => {
    return (
        <div className={cls.wrapper}>
            <img src={logo_path} alt="logo" className={cls.logo}></img>
        </div>
    )
}

export default Logo;