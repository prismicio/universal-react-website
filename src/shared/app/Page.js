import React from 'react';
import NotFound from './NotFoundPage';

import { Link } from 'react-router-dom';

import PrismicReact from '../../prismic-react';

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
      const linkUrl = this.props.PRISMIC_UNIVERSAL_DATA.uid === 'get-started' ? '/page/second-page' : '/page/get-started';
      return (
        <div>
          <Link to={linkUrl}>Link</Link>
          <pre>
          {JSON.stringify(this.props.PRISMIC_UNIVERSAL_DATA, null, 2)}
          </pre>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFoundPage />;
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getByUID('page', props.match.params.uid, {}),
  component: Page
});