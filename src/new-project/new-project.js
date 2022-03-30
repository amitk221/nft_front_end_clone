import React from 'react';

import Header from '../new-project/Header';
import Home from '../new-project/Home';
import Footer from '../new-project/Footer';
 import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Explore from '../new-project/Explore';
const New = () =>{
  
   return (
      <>
      <Header />
      <Routes>
     
         <Route path="/" element={<Home />}></Route>
         <Route path="/explore" element={<Explore />}></Route>
         <Route path="/collection" element={<h2>Hii collection</h2>}></Route>
         <Route path="/transactions" element={<h2>Hii trasansbs</h2>}></Route>
         <Route path="*" element={<h1>Page not found</h1>}></Route>

      </Routes>
     
      </>
     );
}
export default New;