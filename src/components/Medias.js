import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Snackbar from 'material-ui/Snackbar';
import AudioList from './AudioList';
import PicList from './PicList';
import VideoList from './VideoList';
import { contentCenter } from '../styles';

export default class Medias extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: props.props || 0,
            error: ''
        };

        this.handleErrorClose = this.handleErrorClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }

    handleChange(value) {
        this.setState({
            slideIndex: value,
            error: ''
        });
    }

    handleErrorClose() {
        this.setState({
            error: ''
        });
    }

    handleError(error) {
        this.setState({
            error: error
        });
    }

    handleAlertClose() {
        this.setState({
            error: ''
        });
    }

    render() {
        return (
            <div style={this.props.style}>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}>
                    <Tab label="图片" value={0} />
                    <Tab label="音频" value={1} />
                    <Tab label="视频" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}>
                    <PicList emrId={this.props.emrId} onError={this.handleError} />
                    <AudioList emrId={this.props.emrId} onError={this.handleError} />
                    <VideoList emrId={this.props.emrId} onError={this.handleError} />
                </SwipeableViews>
                <Snackbar
                    open={!!this.state.error}
                    message={this.state.error}
                    contentStyle={contentCenter}
                    autoHideDuration={3000}
                    onRequestClose={this.handleAlertClose} />
            </div>
        );
    }
}