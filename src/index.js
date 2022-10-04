import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
// import Home from './pages/Home';
import Favorite from './pages/Favorite'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favorite />
  </React.StrictMode>
);