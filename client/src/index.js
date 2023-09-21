import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//bootstrap 5 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
