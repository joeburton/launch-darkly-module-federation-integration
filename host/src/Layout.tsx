import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <header>Launch Darkly & Module Federation Integration</header>
      <Outlet />
      <footer>---Integration---</footer>
    </div>
  );
}
