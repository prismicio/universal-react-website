import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-configuration';

export const HomeBanner = (props) => {
  
  var banner = props.document.data.homepage_banner[0];
  var bannerStyle = { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url + ')' };
  
  var link = PrismicLink.url(banner.button_link, PrismicConfig.linkResolver);
  var label = RichText.asText(banner.button_label);
  var button = null;
  if (link && label != " ") {
    button = <Link to={link} className="banner-button">{label}</Link>;
  }
  
  return (
    <section className="homepage-banner" style={bannerStyle}>
      <div className="banner-content container">
        <h2 className="banner-title">{ RichText.asText(banner.title) }</h2>
        <p className="banner-description">{ RichText.asText(banner.tagline) }</p>
        { button }
      </div>
    </section>
  );
};

export default HomeBanner;