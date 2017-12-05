import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BookMarkIcon from 'material-ui/svg-icons/action/bookmark';
import CircularProgress from 'material-ui/CircularProgress';
import EmrCatalog from './EmrCatalog';
import ErrorMessage from './ErrorMessage';
import { catalogWrapperStyle, headerBarStyle, fullContentStyle, contentStyle } from '../styles';
import { getEmrCatalog } from '../service';

const emptyCatalog = [];

class EmrCatalogWrapper extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            error: null,
            emrCatalog: emptyCatalog
        }
    }

    componentDidMount() {
        this.loadCatalog(this.props.regId);
    }

    loadCatalog(regId) {
        this.setLoadingState();
        this.fetchCatalog(regId);
    }

    setLoadingState() {
        this.setState({ loading: true, error: null, emrCatalog: emptyCatalog });
    }
    setCatalogState(catalog) {
        this.setState({ loading: false, error: null, emrCatalog: catalog });
    }
    setErrorState(error) {
        this.setState({ loading: false, error: error, emrCatalog: emptyCatalog });
    }

    fetchCatalog(regId) {
        getEmrCatalog(regId)
            .then(catalog => this.setCatalogState(catalog))
            .catch(() => this.setErrorState('获取病历目录出错'));
    }

    render() {
        let loading = (
            this.state.loading &&
            <div style={{ marginTop: '100px', textAlign: 'center' }}>
                <CircularProgress size={60} thickness={7} />
                <h3>努力加载中...</h3>
            </div>
        );
        let error = (
            this.state.error &&
            <ErrorMessage style={contentStyle} message={this.state.error} />
        );
        let catalog = (
            this.state.emrCatalog.length !== 0 &&
            <EmrCatalog style={fullContentStyle}
                onDocumentSelected={this.props.onEmrSelected}
                catalog={this.state.emrCatalog} />
        );
        let none = (!catalog && <h3 style={Object.assign({}, contentStyle, { textAlign: 'center' })}>暂无病历</h3>);

        return (
            <div style={catalogWrapperStyle}>
                <AppBar title={<span>病历目录</span>}
                    iconElementLeft={<IconButton><BookMarkIcon /></IconButton>}
                    style={headerBarStyle} />
                {loading || error || catalog || none}
            </div>
        );
    }
}

export default EmrCatalogWrapper;