import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModecontextProvider } from "./context/darkModecontext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkModecontextProvider>
    <App />
    </DarkModecontextProvider>
  </React.StrictMode>
);
reportWebVitals();
