import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import Layout from '../components/Layout';
import { ContextProvider } from '../hooks/useContext';
import ErrorPage from './ErrorPage';
import Home from './Home';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Home />,

    }]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  </React.StrictMode>,
)
