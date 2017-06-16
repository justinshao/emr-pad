import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ErrorMessage from './ErrorMessage';
import { fullContentStyle, contentCenter } from '../styles';

class EmrViewer extends React.Component {

  state = {
    loading: true,
    error: null,
    q: null
  }

  constructor(props) {
    super(props);

    this.handleImgLoaded = this.handleImgLoaded.bind(this);
    this.handleImgError = this.handleImgError.bind(this);
  }

  handleImgLoaded() {
    this.setState({ loading: false, error: null, force: false });

    if(this.props.onEmrLoaded){
      this.props.onEmrLoaded(this.props.emrId);
    }
  }

  handleImgError(){
    this.setState({ loading: false, error: '病历加载出错', force: false });

    if(this.props.onEmrLoadError){
      this.props.onEmrLoadError(this.props.emrId);
    }
  }

  componentWillReceiveProps(nextProps) {
    let force = nextProps.force;
    let change = this.props.emrId !== nextProps.emrId;

    if (force || change) {
      this.setState({
        loading: true,
        error: null,
        q: !change && force ? new Date().getTime() : null
      });
    }
  }

  render() {
    let loading = (this.state.loading &&
                    <CircularProgress size={60} thickness={7} style={{ margin: '100px' }} />);
    let error = (this.state.error && <ErrorMessage message={this.state.error}/>);
    let img = <img onLoad={this.handleImgLoaded} onError={this.handleImgError}
                    src={`/api/EmrFile/${this.props.emrId}${this.state.q ? '?_=' + this.state.q : ''}`} alt=""
                    style={{ maxWidth: '100%', display: this.state.loading ? 'none' : undefined }} />;
    
    return (
      <div style={Object.assign({}, fullContentStyle, contentCenter)}>
        {loading}
        {error || img}
      </div>
    );
  }
}

export default EmrViewer;