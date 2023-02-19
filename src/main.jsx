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
import Sale from './pages/main/Sale';

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
      },
      {
        path: "/sales",
        element: <Sale />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
