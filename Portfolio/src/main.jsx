import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './pages/home';
import Errorpage from './pages/Errorpage';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "About",
        element: <About />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
