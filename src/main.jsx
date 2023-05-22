import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Recipie from './Pages/Recipie/Recipie.jsx';
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/home',
        element : <Home></Home>
      },
      
      {
        path : '/recipie',
        element : <Recipie></Recipie>
      }
    ]
  },
  {
    path : '/login',
    element : <Login></Login>
  },
  {
    path : '/register',
    element : <Register></Register>
  },
  {
    path : '*',
    element : <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
