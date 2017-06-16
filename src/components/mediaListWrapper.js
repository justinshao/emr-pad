import React from 'react';

export default (MediaList, getMedias, playMedia, deleteMedia) => {
    return class extends React.Component {
        state = {
            loading: true,
            medias: [],
            error: null,
            alertError: ''
        }

        constructor(props) {
            super(props);

            this.handlePlay = this.handlePlay.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
        }

        componentDidMount() {
            this.fetch();
        }

        handlePlay(id) {
            playMedia(id);
        }

        handleDelete(id) {
            deleteMedia(id)
                .then(() => this.fetch())
                .catch(() => this.props.onError && this.props.onError('删除数据出错'));
        }

        fetch() {
            this.setLoadingState();

            getMedias(this.props.emrId)
                .then(medias => this.setMediaState(medias))
                .catch(() => this.setErrorState('获取数据出错'));
        }

        setLoadingState() {
            this.setState({ loading: true, medias: [], error: null, alertError: '' });
        }
        setMediaState(medias) {
            this.setState({ loading: false, medias: medias, error: null, alertError: '' });
        }
        setErrorState(error) {
            this.setState({ loading: false, medias: [], error: error, alertError: '' });
        }

        render() {
            const { loading, medias, error } = this.state;

            return (
                <MediaList loading={loading} medias={medias} error={error}
                        playHandler={this.handlePlay} deleteHandler={this.handleDelete}
                        {...this.props} />
            );
        }
    }
}