import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Aaa from './routers/aaa' 
import Bbb from './routers/bbb' 
import Board from './routers/board1';

const pages = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/aaa", element: <Aaa />},
    {path: "/bbb", element: <Bbb />},
    {path: "/board", element: <Board />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={pages} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
