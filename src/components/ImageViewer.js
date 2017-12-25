import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ErrorMessage from './ErrorMessage';
import { fullContentStyle, contentCenter } from '../styles';

class ImageViewer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      q: null
    }

    this.handleImgLoaded = this.handleImgLoaded.bind(this);
    this.handleImgError = this.handleImgError.bind(this);
  }

  handleImgLoaded() {
    this.setState({ loading: false, error: null, force: false });

    if (this.props.onImageLoaded) {
      this.props.onImageLoaded(this.props.src);
    }
  }

  handleImgError() {
    this.setState({ loading: false, error: '加载出错', force: false });

    if (this.props.onImageLoadError) {
      this.props.onImageLoadError(this.props.src);
    }
  }

  componentWillReceiveProps(nextProps) {
    let force = nextProps.force;
    let change = this.props.src !== nextProps.src;

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
    let error = (this.state.error && <ErrorMessage message={this.state.error} />);
    let img = <img onLoad={this.handleImgLoaded} onError={this.handleImgError}
      src={`${this.props.src}${this.state.q ? '?_=' + this.state.q : ''}`} alt=""
      style={{ maxWidth: '100%', display: this.state.loading ? 'none' : undefined }} />;

    return (
      <div style={Object.assign({}, fullContentStyle, contentCenter)}>
        {loading}
        {error || img}
      </div>
    );
  }
}

export default ImageViewer;