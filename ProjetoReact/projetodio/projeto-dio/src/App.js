import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"; //importa as tags da router

import {Home} from './pages/home'; // importando os componentes que criamos

import {Login} from './pages/login';// importando os componentes que criamos

import {Feed} from './pages/feed';

import {Teste} from './pages/index';

function App() {
  return (
    <Router> 
       <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/teste" element={<Teste/>} />

      </Routes>
    </Router>
  );
}

export default App;
