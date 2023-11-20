import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import About from './day 7/about';
import Home from './day 7/home';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/Home",
    element:<Home />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider  router={router }/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
