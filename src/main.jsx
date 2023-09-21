/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './Home/Home.jsx';
// import About from './About/About.jsx';
// import Contact from './contact/Contact.jsx';
// import Categories from './categories/categories.jsx';
// import Bycategory from './Bycategory/Bycategory.jsx';
// import Detail from './Detail/Detail.jsx';
// import Root from './Root/Root.jsx';

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Root></Root>,
//   children: [{
//     path: '/home',
//     element: <Home></Home>
//   },

//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact'
//     , element: <Contact></Contact>
//   },
//   {
//     path: '/categories',
//     loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
//     element: <Categories  ></Categories>

//   },
//   {
//     path: '/categories/:Cname',
//     loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.Cname}`),
//     element: <Bycategory></Bycategory>
//   }
//     , {
//     path: '/categories/:Cname/:Cdetail',
//     loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Cdetail}`)
//     ,
//     element: <Detail></Detail>
//   }
//   ]
// }]
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
