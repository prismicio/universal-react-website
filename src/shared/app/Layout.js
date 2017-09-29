import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header className="site-header">
      <Link to="/" className="logo">Example Site</Link>
      <nav>
        <ul>
          <li><Link to="/static">Static</Link></li>
          <li><Link to="/page/about">About</Link></li>
          <li><Link to="/page/more-info">More Info</Link></li>
        </ul>
      </nav>
    </header>
    <div>{props.children}</div>
    <footer>
      <p>Proudly published with  <a href="https://prismic.io" target="_blank">prismic.io</a><br/><a href="https://prismic.io" target="_blank"><img src="/images/logo-prismic.svg" className="footer-logo"/></a></p>
    </footer>
  </div>
);

export default Layout;