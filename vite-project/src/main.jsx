import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";      // relative import
import "./index.css";              // relative import


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);