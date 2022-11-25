import React from 'react';
import './App.css';
import Header from './../Header/Header'
import Content from './../Content/Content'
import HomePage from './../HomePage/HomePage'
import SignIn from './../SignIn/SignIn'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Home/*" element={<Content />}/>
        <Route path="/SignIn/*" element={<SignIn />}/>
      </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App;
