import React from 'react';
import NotFound from './NotFoundPage';

import PrismicReact from '../../prismic-react';
import TextSection from './pageComponents/TextSection';
import FullWidthImage from './pageComponents/FullWidthImage';
import Quote from './pageComponents/Quote';
import ImageGallery from './pageComponents/ImageGallery';
import ImageHighlight from './pageComponents/ImageHighlight';
import HomeBanner from './pageComponents/HomeBanner';

class HomePage extends React.Component {
  
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
      
      return (
        <div>
          <HomeBanner document={document}/>
          { pageContent }
          <pre>
          {JSON.stringify(document, null, 2)}
          </pre>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getSingle('homepage', {}),
  component: HomePage
});