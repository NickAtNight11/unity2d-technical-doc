import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TechDoc from './components/TechDoc'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/unity2d-technical-doc' exact element={<TechDoc/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
