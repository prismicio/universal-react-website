import React from 'react';
import PrismicToolbar from 'prismic-toolbar';

function UniversalComponent({request: fnFetchData, component: WrappedComponent}) {
  if(!fnFetchData || !fnFetchData.request instanceof Promise) throw new Exception("[Prismic UniversalComponent] Missing parameter 'request' - must be an async call returning a Promise.");
  if(!WrappedComponent) throw new Exception("[Prismic UniversalComponent] Missing parameter 'component' - must be a valid React Component");
  
  return class extends React.Component {

    constructor(props) {
      super(props);
      if(!props.PRISMIC_UNIVERSAL_DATA) throw new Exception(`[Prismic - Component '${WrappedComponent.name}'] You must provide a props 'PRISMIC_UNIVERSAL_DATA'.`);
      if(!props.prismicCtx) throw new Exception(`[Prismic - Component '${WrappedComponent.name}'] You must provide a props 'prismicCtx' which contains at least the object 'api' and the api endpoint.`);
      if(!props.prismicCtx.api) throw new Exception(`[Prismic - Component '${WrappedComponent.name}'] You must provide a props 'prismicCtx' which contains at least the object 'api' and the api endpoint.`);
      if(!props.prismicCtx.endpoint) throw new Exception(`[Prismic - Component '${WrappedComponent.name}'] You must provide a props 'prismicCtx' which contains at least the object 'api' and the api endpoint.`);
      this.state = {
        SCOPED_DATA: props.PRISMIC_UNIVERSAL_DATA[props.match.url]
      };
    }
    
    static PRISMIC_FETCH_REQUEST() {
      return fnFetchData;
    }

    componentWillMount() {
      this.state.SCOPED_DATA ? Promise.resolve(this.state.SCOPED_DATA) : fnFetchData(this.props.prismicCtx, this.props)
      .then((SCOPED_DATA) => {
        this.setState({SCOPED_DATA});
      })
      .catch((e) => console.log(e.message));
    }

    componentWillReceiveProps(props) {
      fnFetchData(props.prismicCtx, props)
      .then((SCOPED_DATA) => {
        this.setState({SCOPED_DATA});
      })
      .catch((e) => console.log(e.message));
    }

    componentDidMount() {
      this.refreshToolbar(this.props.prismicCtx.api);
    }

    componentDidUpdate() {
      this.refreshToolbar(this.props.prismicCtx.api);
    }

    refreshToolbar(api) {
      const maybeCurrentExperiment = api.currentExperiment();
      if (maybeCurrentExperiment) {
        PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
      }
      PrismicToolbar.setup(this.props.prismicCtx.endpoint);
    }

    render() {
      const newProps = (() => {
        const copy = Object.assign({}, this.props);
        if(this.state.SCOPED_DATA) copy.PRISMIC_UNIVERSAL_DATA = this.state.SCOPED_DATA;
        else delete copy.PRISMIC_UNIVERSAL_DATA;
        return copy;
      })();
      return <WrappedComponent {...newProps}/>
    }
  }
}

export default {UniversalComponent};
