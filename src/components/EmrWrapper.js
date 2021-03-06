import React from 'react';
import EmrHeaderBar from './EmrHeaderBar';
import EmrCalalogBar from './EmrCalalogBar';
import ImageViewer from './ImageViewer';
import mobileApi from '../mobileApi';
import EmrBottomMenu from './EmrBottomMenu';
import { fullContentStyle } from '../styles';

class EmrWrapper extends React.Component {

    constructor(props) {
        super(props);

        let { emrId } = this.props.match.params;
        this.state = {
            menuOpen: !emrId,
            reload: false
        };

        this.handleOpenMenuRequest = this.handleOpenMenuRequest.bind(this);
        this.handleMenuRequestChange = this.handleMenuRequestChange.bind(this);
        this.handleEmrSelected = this.handleEmrSelected.bind(this);
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleEmrSignRequest = this.handleEmrSignRequest.bind(this);
        this.handleEmrInformedRequest = this.handleEmrInformedRequest.bind(this);
        this.handleEmrAttachRequest = this.handleEmrAttachRequest.bind(this);
        this.handleEmrRecordRequest = this.handleEmrRecordRequest.bind(this);
        this.handleStopEmrRecordRequest = this.handleStopEmrRecordRequest.bind(this);
        this.handleEmrLoaded = this.handleEmrLoaded.bind(this);
        this.handleEmrLoadError = this.handleEmrLoadError.bind(this);
        this.handlePatSignResult = this.handlePatSignResult.bind(this);
        this.handleTakePhotoRequest = this.handleTakePhotoRequest.bind(this);
        this.handleVideoRequest = this.handleVideoRequest.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let { emrId } = nextProps.match.params;

        this.setState({
            menuOpen: !emrId,
            reload: false
        });
    }

    handleOpenMenuRequest() {
        this.setState({ menuOpen: true, reload: false });
    }
    handleMenuRequestChange(open) {
        this.setState({ menuOpen: open, record: false });
    }
    handleEmrSelected(emrId) {
        let { history } = this.props;
        let { regId } = this.props.match.params;

        history.replace(`/emr/${regId}/${emrId}`);
    }
    handleNavBackRequest() {
        let { history } = this.props;

        history.goBack();
    }
    handleEmrSignRequest() {
        let { regId, emrId } = this.props.match.params;
        let { history } = this.props;

        if (emrId) {
            history.push(`/sign/${regId}/${emrId}`);
        }
    }
    handleEmrInformedRequest() {
        let { regId, emrId } = this.props.match.params;
        let { history } = this.props;

        if (emrId) {
            history.push(`/informed/${regId}/${emrId}`);
        }
    }
    handleEmrAttachRequest() {
        let { regId, emrId } = this.props.match.params;
        let { history } = this.props;

        if (emrId) {
            history.push(`/media/${regId}/${emrId}`);
        }
    }
    handleEmrRecordRequest() {
        let { emrId } = this.props.match.params;

        if (emrId && global.native) {
            global.native.record(Number(emrId));
        }
    }
    handleStopEmrRecordRequest() {
        if (global.native) {
            global.native.stopRecord();
        }
    }
    handleTakePhotoRequest() {
        let { emrId } = this.props.match.params;

        if (emrId && global.native) {
            global.native.takePhoto(Number(emrId));
        }
    }
    handleVideoRequest() {
        let { emrId } = this.props.match.params;

        if (emrId && global.native) {
            global.native.takeVideo(Number(emrId));
        }
    }
    handleEmrLoaded(src) {
        let emrId = src.replace('/api/EmrFile/', '');

        if (global.native) {
            global.native.selectEmr(Number(emrId));
        }
    }
    handleEmrLoadError() {
        if (global.native) {
            global.native.clearEmr();
        }
    }
    handlePatSignResult() {
        this.setState({
            reload: true
        });
    }

    componentDidMount() {
        let { emrId } = this.props.match.params;

        mobileApi.setPatSignResultListener(this.handlePatSignResult);

        if (global.native) {
            emrId ? global.native.selectEmr(Number(emrId)) : global.native.clearEmr();
        }
    }
    componentWillUnmount() {
        mobileApi.removePatSignResultListener();

        if (global.native) {
            global.native.clearEmr();
        }
    }

    render() {
        let { regId, emrId } = this.props.match.params;

        return (
            <div>
                <EmrHeaderBar regId={regId}
                    onOpenMenuRequest={this.handleOpenMenuRequest}
                    onEmrSignRequest={this.handleEmrSignRequest}
                    onEmrInformedRequest={this.handleEmrInformedRequest}
                    onEmrAttachRequest={this.handleEmrAttachRequest}
                    onEmrRecordRequest={this.handleEmrRecordRequest}
                    onStopEmrRecordRequest={this.handleStopEmrRecordRequest}
                    onTakePhotoRequest={this.handleTakePhotoRequest}
                    onVideoRequest={this.handleVideoRequest}
                    onNavBackRequest={this.handleNavBackRequest} />
                <EmrCalalogBar regId={regId}
                    open={this.state.menuOpen}
                    onEmrSelected={this.handleEmrSelected}
                    onRequestChange={this.handleMenuRequestChange} />
                <EmrBottomMenu
                    onEmrSelected={this.handleEmrSelected}
                    regId={regId}
                />
                {emrId &&
                    <div style={fullContentStyle}>
                        <ImageViewer
                            src={`/api/EmrFile/${emrId}`}
                            force={this.state.reload}
                            onImageLoaded={this.handleEmrLoaded}
                            onImageLoadError={this.handleEmrLoadError} />
                    </div>}
            </div>
        );
    }
}

export default EmrWrapper;