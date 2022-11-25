import React from 'react';
import SideBar from './SideBar/SideBar'
import ContentBody from './ContentBody/ContentBody';
import cls from './Content.module.css'
import glob from './../Global.module.css'

const Content = () => {
    return (
      <div className={cls.wrapper}>
          <div className={glob.content_width}>
              <div className={cls.grid}>
                <SideBar />
                <ContentBody />
              </div>
          </div>
        </div>
    )
  }

export default Content;