import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../prismic-configuration';

export const Layout = (props) => {

  const menu = props.menu.data.menu_links.map(function(menuItem, index){
    var menuLink = PrismicLink.url(menuItem.link, PrismicConfig.linkResolver);
    var label = RichText.asText(menuItem.label);
    return <li key={index}><Link to={menuLink}>{label}</Link></li>;
  });
  
  return(
    <div className="app-container">
      <header className="site-header">
        <Link to="/" className="logo">Example Site</Link>
        <nav>
          <ul>{menu}</ul>
        </nav>
      </header>
      <div>{props.children}</div>
      <footer>
        <p>Proudly published with  <a href="https://prismic.io" target="_blank">prismic.io</a><br/><a href="https://prismic.io" target="_blank"><img src="/images/logo-prismic.svg" className="footer-logo"/></a></p>
      </footer>
    </div>
  );
};

export default Layout;