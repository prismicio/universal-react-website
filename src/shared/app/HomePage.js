import React from 'react';
import NotFoundPage from './NotFoundPage';

import PrismicReact from '../../prismic-react';
import TextSection from './slices/TextSection';
import FullWidthImage from './slices/FullWidthImage';
import Quote from './slices/Quote';
import ImageGallery from './slices/ImageGallery';
import ImageHighlight from './slices/ImageHighlight';
import HomeBanner from './slices/HomeBanner';

class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      notFound: 
        props.PRISMIC_UNIVERSAL_DATA &&
        !props.PRISMIC_UNIVERSAL_DATA.data ?
        true :
        false,
      linkResolver : null,
    };
  }
  
  componentWillReceiveProps(props) {
    this.setState({ notFound: !props.PRISMIC_UNIVERSAL_DATA })
  }
  
  componentWillMount() {
    if (typeof document !== 'undefined') document.body.classList.add('homepage');
  }
  
  componentWillUnmount() {
    if (typeof document !== 'undefined') document.body.classList.remove('homepage');
  }

  render() {
    const document = this.props.PRISMIC_UNIVERSAL_DATA;
    if (document && document.data) {
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
        <div data-wio-id={document.id}>
          <HomeBanner document={document}/>
          <div className="container">
            { pageContent }
          </div>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    } else {
      return <div className="container">Loading...</div>;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getSingle('homepage', {}),
  component: HomePage
});