import React from 'react';
import {
  Link
} from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';
import PatTile from './PatTile';
import ErrorMessage from './ErrorMessage';
import { getPats } from '../service';
import { contentCenter } from '../styles';

const styles = {
  loading:{
    display: 'block',
    margin: '30px auto'
  },
  tile:{
    backgroundColor: '#0096a9',
    boxShadow: '2px 2px 5px #777777',
    borderTopRightRadius: '5px',
    borderBottomLeftRadius: '5px'
  }
}

const emptyPatList = [];

class PatList extends React.Component {

  state = {
    pats: emptyPatList,
    error: null,
    loading: false
  }

  componentDidMount() {
    if (this.props.wardId) {
      this.loadPats(this.props.wardId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.wardId !== nextProps.wardId) {
      this.loadPats(nextProps.wardId);
    }
  }

  loadPats(wardId) {
    this.setLoadingState();
    this.fetchPats(wardId);
  }

  setLoadingState() {
    this.setState({ pats: emptyPatList, error: null, loading: true });
  }
  setListState(pats) {
    this.setState({ pats: pats, error: null, loading: false });
  }
  setErrorState(error) {
    this.setState({ pats: emptyPatList, error: error, loading: false });
  }

  fetchPats(wardId) {
    getPats(wardId)
      .then(pats => this.setListState(pats))
      .catch(() => this.setErrorState('获取病人数据出错'));
  }

  render() {
    let loading = (this.state.loading && <CircularProgress size={60} thickness={7} style={styles.loading} />);
    let error = (this.state.error && <ErrorMessage message={this.state.error} style={contentCenter}/>);
    let patList = (
      this.state.pats.length &&
      <GridList cellHeight={ this.props.cellHeight || 300 } cols={ this.props.col || 5 } padding={20}>
        {
          this.state.pats.slice().map(pat =>
            <GridTile key={pat.VisitId} style={styles.tile}>
              <Link to={`/clinic/${pat.VisitId}/2`}>
                <PatTile pat={pat} />
              </Link>
            </GridTile>
          )
        }
      </GridList>
    );
    let none = this.props.wardId && !patList && <h1>暂无病人</h1>

    return (
      <div style={this.props.style}>
        {loading || error || patList || none}
      </div>
    );
  }
}

export default PatList;