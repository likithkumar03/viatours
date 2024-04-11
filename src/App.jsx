import React, { useState } from 'react';
import './App.scss';
import Home  from './pages/home/Home';
import  Destination  from './pages/destinations/Destination';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Activies  from './pages/activites/Activites';
import Usd from "./pages/usd/Usd"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/activies" element={<Activies />} />
          <Route path="/usd" element={<Usd />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

