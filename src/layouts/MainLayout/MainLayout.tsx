import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header.tsx';

export function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
