import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-configuration';

export const ImageHighlight = (props) => {
  
  var highlight = props.slice;
  var link = PrismicLink.url(highlight.primary.link, PrismicConfig.linkResolver);
  var label = RichText.asText(highlight.primary.link_label);
  var button = null;
  if (link && label != " ") {
    button = <p><Link to={link}>{label}</Link></p>;
  }
  
  return (
    <section className="highlight content-section">
      <div className="highlight-left">
        { RichText.render(highlight.primary.title, PrismicConfig.linkResolver) }
        { RichText.render(highlight.primary.headline, PrismicConfig.linkResolver) }
        { button }
      </div>
      <div className="highlight-right">
        <img src={ highlight.primary.featured_image.url } />
      </div>
    </section>
  );
};

export default ImageHighlight;