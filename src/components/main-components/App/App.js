import React from 'react';
import './App.css';
import Header from './../Header/Header'
import Content from './../Content/Content'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  )
}

export default App;
