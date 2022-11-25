import React from 'react';
import content from './../Content.module.css'
import {Route, Routes} from 'react-router-dom'

import Messages from './Messages/Messages'
import Friends from './Friends/Friends'
import Profile from './Profile/Profile'
import Locator from './Locator/Locator'
const ContentBody = () => {
    return (
      <div id="content" className={content.block}>
          <Routes>
            <Route path='/profil/*' element={<Profile/>}/>
            <Route path='/messages/*' element={<Messages/>}/>
            <Route path='/friends/*' element={<Friends/>}/>
            <Route path='/locator/*' element={<Locator/>}/>
          </Routes>
        </div>
    )
  }

export default ContentBody;