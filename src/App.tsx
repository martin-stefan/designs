import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { items } from './core/items';
import Home from './core/Home';

function App() {
  return (
    <div className="App">

      <Link to="/" className="homeBtn">Home</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {
          items.map(el => (
            <Route path={`/${el.title}`} element={el.component} key={el.title}/>
          ))
        }

      </Routes>
    </div>
  );
}

export default App;
