import React from 'react';
import { Link } from 'react-router-dom';
import { Link as PrismicLink, RichText } from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-configuration';

export const ImageGallery = (props) => {
  
  var galleryTitle = RichText.render(props.slice.primary.gallery_title);
  var gallery = props.slice.items.map(function(galleryItem, index){
    
    var description = RichText.render(galleryItem.image_description, PrismicConfig.linkResolver);
    var link = PrismicLink.url(galleryItem.link, PrismicConfig.linkResolver);
    var label = RichText.asText(galleryItem.link_label);
    var button = null;
    if (link && label != " ") {
      button = <p className="gallery-link"><Link to={link}>{label}</Link></p>;
    }
    
    return (
      <div className="gallery-item"  key={index}>
        <img src={galleryItem.image.url}/>
        { description }
        { button }
      </div>
    );
  });
  
  return (
    <section className="image-gallery content-section">
      { galleryTitle }
      <div className="gallery">
        { gallery }
      </div>
    </section>
  );
};

export default ImageGallery;