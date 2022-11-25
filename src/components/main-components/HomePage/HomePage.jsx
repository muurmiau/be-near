import React from "react";
import cls from './HomePage.module.css'
import glob from './../Global.module.css'

import img1 from './../../../Figma-Sources/StockSnap_O8EAEFRYBP.jpg'
import img2 from './../../../Figma-Sources/andy-vult-DeyonzU6E4M-unsplash.jpg'
import img3 from './../../../Figma-Sources/StockSnap_ZXOBOKAJEQ.jpg'

import {NavLink} from 'react-router-dom'

const HomePage = () => {
    return (
        <main className={cls.main}>
            <section className={glob.content_width}>
                        <img id={cls.img1} src={img1} alt="img"></img>
                        <img id={cls.img2} src={img2} alt="img"></img>
                        <img id={cls.img3} src={img3} alt="img"></img>

                        <section className={cls.sign}>
                            <strong>Start conversation easily</strong>
                            <div id={cls.sign_login}>
                                <NavLink to="/Home">
                                    <div className={cls.try}>
                                        Try
                                    </div>
                                </NavLink>
                                <NavLink to="/Home">
                                    Alredy signed up? Login
                                </NavLink>
                            </div>
                        </section>
            </section>
        </main>
    )
}

export default HomePage;