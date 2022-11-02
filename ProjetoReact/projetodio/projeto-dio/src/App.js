import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"; //importa as tags da router

import {Home} from './pages/home'; // importando os componentes que criamos

import {Login} from './pages/login';// importando os componentes que criamos

import {Feed} from './pages/feed';

function App() {
  return (
    <Router> 
       <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />

      </Routes>
    </Router>
  );
}

export default App;
