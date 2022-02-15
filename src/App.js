import * as React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import CatchAll from "./CatchAll";


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to='product/1'>Product1</Link>
      <br/>
      <Link to='product/2'>Product2</Link>
      <br/>
      <Link to='product/3'>Product3</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='product/:id' element={<Product />} />
        
        <Route path='*' element={<CatchAll />} />

      </Routes>
    </div>
  );
}

export default App;
