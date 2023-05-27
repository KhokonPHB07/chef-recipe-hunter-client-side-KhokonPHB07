import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Recipie from './Pages/Recipie/Recipie.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import BlogPages from './Pages/BlogPages/BlogPages.jsx';
import ChefRecipiePage from './Pages/ChefRecipiePage/ChefRecipiePage.jsx';

import Error from './Pages/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Recipie></Recipie>,
        loader: () => fetch("https://chef-recipie-server-pi.vercel.app/chefBio")
      }

    ]
  },
  {
    path: "/chefrecipiepage/:id",
    element: <ChefRecipiePage></ChefRecipiePage>,
    loader: ({ params }) => fetch(`https://chef-recipie-server-pi.vercel.app/chefBio/${params.id}`)
  },
  {
    path: "/blog",
    element: <BlogPages></BlogPages>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  // {
  //   path: "/BestChefRecipie",
  //   element: <BestChefRecipie></BestChefRecipie>,
  //   loader: async () => await fetch("https://chef-recipie-server-pi.vercel.app/recipie")

  // }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

