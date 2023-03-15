import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import { ContextProvider } from '../hooks/useContext';
import Layout from '../components/Layout';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Contact from './Contact';

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contacts',
        element: <Contact />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  </React.StrictMode>,
)
