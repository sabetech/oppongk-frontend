import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/main/Home';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import Customers from './pages/main/Customers';
import Items from './pages/main/Items';
import Suppliers from './pages/main/Suppliers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />
        // loader: teamLoader,
      },
      {
        path: "/customers",
        element: <Customers />
      },
      {
        path: "/items",
        element: <Items />
      },
      {
        path: "/suppliers",
        element: <Suppliers />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
