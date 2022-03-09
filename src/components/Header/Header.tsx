import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import logo from '../../logo.svg';

export function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid justify-content-center justify-content-sm-between">
          <NavLink className="navbar-brand text-white" to="/">
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
          <div>
            <ul className="nav me-auto my-2 my-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(navlink) => `nav-link${navlink.isActive ? ' active' : ''}`}
                  to="/"
                >
                  Buscador de películas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
