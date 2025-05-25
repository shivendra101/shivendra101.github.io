import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import './scss/main.scss'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}
