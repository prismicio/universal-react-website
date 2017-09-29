import React from 'react';

function UniversalComponent({request: fnFetchData, component: WrappedComponent}) {
  if (!fnFetchData) throw new Error('Missing prismic query in Fetch Decorator <--> Prismic React');

  return class extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        PRISMIC_UNIVERSAL_DATA: null
      };
    }
    
    static PRISMIC_FETCH_REQUEST() {
      return fnFetchData;
    }

    isValidObject(obj) {
      return obj && obj.constructor === Object && Object.keys(obj).length > 0;
    }

    componentWillMount() {
      this.isValidObject(this.props.PRISMIC_UNIVERSAL_DATA) ? Promise.resolve(this.props.PRISMIC_UNIVERSAL_DATA) : fnFetchData(this.props.prismicCtx, this.props)
      .then((PRISMIC_UNIVERSAL_DATA) => {
        this.setState({PRISMIC_UNIVERSAL_DATA});
      })
      .catch((e) => console.log(e.message));
    }

    componentWillReceiveProps(props) {
      fnFetchData(props.prismicCtx, props)
      .then((PRISMIC_UNIVERSAL_DATA) => {
        this.setState({PRISMIC_UNIVERSAL_DATA});
      })
      .catch((e) => console.log(e.message));
    }

    render() {
      
      const refreshedState = this.state.PRISMIC_UNIVERSAL_DATA ? {PRISMIC_UNIVERSAL_DATA: this.state.PRISMIC_UNIVERSAL_DATA} : {};
      const newProps = Object.assign({}, this.props, refreshedState);
      return <WrappedComponent {...newProps}/>
    }
  }
}

export default {UniversalComponent};
