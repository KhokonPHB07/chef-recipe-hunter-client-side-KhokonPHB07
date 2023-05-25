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
import AuthProvider from './Provider/AuthProvider.jsx';
import BlogPages from './Pages/BlogPages/BlogPages.jsx';
import ChefRecipiePage from './Pages/ChefRecipiePage/ChefRecipiePage.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import BestChefRecipie from './Components/BestChefRecipie/BestChefRecipie.jsx';
import ShowRecipie from './Components/ShowRecipie/ShowRecipie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <LandingPage></LandingPage>
      }
    ]
  },
  {
    path: '/chefBio',
    element: <Recipie></Recipie>,
    loader: () => fetch('http://localhost:5000/chefBio')

  },

  {
    path: '/chefrecipiepage/:id',
    element: <ChefRecipiePage></ChefRecipiePage>,
    loader: ({ params }) => fetch(`http://localhost:5000/chefBio/${params.id}`)
  },


  {
    path: '/blog',
    element: <BlogPages></BlogPages>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/BestChefRecipie',
    element: <BestChefRecipie></BestChefRecipie>,
    loader: () => fetch('http://localhost:5000/recipie'),
   
  },
  // {
  //   path: '/ShowRecipie',
  //   element: <ShowRecipie></ShowRecipie>
  // }
 
  // {
  //   path : '*',
  //   element : <Error></Error>
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
