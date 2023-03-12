import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import Layout from '../components/Layout';
import { ContextProvider } from '../hooks/useContext';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  </React.StrictMode>,
)
