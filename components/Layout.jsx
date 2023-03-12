import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {

  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  );
}
