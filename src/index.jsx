import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import imageData from './components/DataComponent';
// import AppClass from "./AppClass";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  imageData={imageData} />   
    {/* <AppClass imageData={imageData}/> */}
    {/* change the above line - for interchanging between App and AppClass */}
  </React.StrictMode>
);
