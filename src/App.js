import React from 'react';

// Importer le Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importer nos pages
import Home from './pages/Home';
import {Project1, Project2, Project3, Project4} from './pages/Projects';
import Contact from './pages/Contact';
import NotFound  from './pages/NotFound';


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project-1" exact element={<Project1/>} />
          <Route path="/project-2" exact element={<Project2/>} />
          <Route path="/project-3" exact element={<Project3/>} />
          <Route path="/project-4" exact element={<Project4/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
