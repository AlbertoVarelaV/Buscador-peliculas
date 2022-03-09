import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header.tsx';

export function MainLayout() {
  return (
    <div id="main" className="bg-primary">
      <Header />
      <div className="bg-white rounded-top pt-28">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
