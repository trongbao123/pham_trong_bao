import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers/router';

function App() {
  return (
    <BrowserRouter  >
      <Routers />
    </BrowserRouter>
  );
}

export default App;
