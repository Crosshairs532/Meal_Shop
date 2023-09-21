import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './contact/Contact.jsx';
import Categories from './categories/categories.jsx';
import Bycategory from './Bycategory/Bycategory.jsx';
import Detail from './Detail/Detail.jsx';
import Root from './Root/Root.jsx';
import Orders from './Orders/Orders';

function App() {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([])

  const handleCart = (cart) => {
    console.log(cart, 'cart')
    setArr((arr) => [...arr, cart])
    console.log(arr, 'arr')
    setCount(arr.length + 1)
    console.log('arr->', arr.length, arr, 'c->', count)
  }
  const router = createBrowserRouter([{
    path: '/',
    element: <Root arr={arr} count={count} ></Root>,
    children: [{
      path: '/',
      element: <Home></Home>
    },

    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/contact'
      , element: <Contact></Contact>
    },
    {
      path: '/categories',
      loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      element: <Categories handleCart={handleCart}></Categories>

    },
    {
      path: '/categories/:Cname',
      loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.Cname}`),
      element: <Bycategory></Bycategory>
    }
      , {
      path: '/categories/:Cname/:Cdetail',
      loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.Cdetail}`)
      ,
      element: <Detail handleCart={handleCart}></Detail>
    }, {
      path: '/order',
      element: <Orders arr={arr}></Orders>,
    }
    ]
  }]
  )
  return (

    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
