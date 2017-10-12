import React from 'react';
import NotFoundPage from './NotFoundPage';
import PrismicReact from '../../prismic-react';
import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';

class Page extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      notFound: false,
      linkResolver : null,
    };
  }

  render() {
    if (this.props.PRISMIC_UNIVERSAL_DATA) {
      const document = this.props.PRISMIC_UNIVERSAL_DATA;
      
      var pageContent = document.data.page_content.map(function(slice, index){
        switch (slice.slice_type) {
          case "text_section":
            return <TextSection key={index} slice={slice}/>;
            break;
          case "full_width_image":
            return <FullWidthImage key={index} slice={slice}/>;
            break;
          case "quote":
            return <Quote key={index} slice={slice}/>;
            break;
          case "image_gallery":
            return <ImageGallery key={index} slice={slice}/>;
            break;
          case "image_highlight":
            return <ImageHighlight key={index} slice={slice}/>;
            break;
          default:
            return <p>{slice.slice_type}</p>;
            break;
        }
      });
      
      return(
        <div className="container" data-wio-id={document.id}>
          { pageContent }
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getByUID('page', props.match.params.uid, {}),
  component: Page
});