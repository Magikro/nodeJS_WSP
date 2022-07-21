import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Login from "./pages/Login";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Layout />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );    
  }
}

export default App;
