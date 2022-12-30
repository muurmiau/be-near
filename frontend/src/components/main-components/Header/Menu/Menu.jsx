import React from 'react';
import cls from './Menu.module.css'

const Menu = () => {
    return (
        <div className={cls.menu}>
            <Button type="main" name="More"/>
            <Button type="simple" name="English"/>
        </div>
    )
}

const Button = (props) => {
    return (
        <button className={`${cls.button} ${(props.type === "main" ? cls.main : cls.simple)}`}>{props.name}</button>
    )
}

export default Menu;