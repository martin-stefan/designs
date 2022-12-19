import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { items } from './core/items';
import Directory from './core/Directory';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Directory/>}/>
        {
          items.map(el => (
            <Route path={`/${el.title}`} element={el.component}/>
          ))
        }

      </Routes>
    </div>
  );
}

export default App;
