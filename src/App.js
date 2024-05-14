import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/about"  />
            <Route path="/" element={<News country="in" category="general" />} />
            <Route path="/general" element={<News country="in" category="general" />} />
            <Route path="/sports" element={<News country="in" category="sports" />} />
            <Route path="/science" element={<News country="in" category="science" />} />
            <Route path="/business" element={<News country="in" category="business" />} />
            <Route path="/health" element={<News country="in" category="health" />} />
          </Routes> 
        </div>
      </Router>
    )
  }
}
