import React from 'react';

function UniversalComponent({request: fnFetchData, component: WrappedComponent}) {
  if (!fnFetchData) throw new Error('Missing prismic query in Fetch Decorator <--> Prismic React');

  return class extends React.Component {

    constructor(props) {
      super(props);
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
