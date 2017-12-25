import React from 'react';
import BorderColorIcon from 'material-ui/svg-icons/editor/border-color';
import KeyboardVoiceIcon from 'material-ui/svg-icons/hardware/keyboard-voice';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoodIcon from 'material-ui/svg-icons/social/mood';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import StopIcon from 'material-ui/svg-icons/av/stop';
import InsertLinkIcon from 'material-ui/svg-icons/editor/insert-link';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import VideoIcon from 'material-ui/svg-icons/av/videocam';
import CameraIcon from 'material-ui/svg-icons/image/camera';
import NavBackHeaderBar from './NavBackHeaderBar';
import CircularProgress from 'material-ui/CircularProgress';
import { headerBarStyle, headerBarBtnStyle, headerBarLoadingStyle } from '../styles';
import { getPat } from '../service';

class EmrHeaderBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      recording: false,
      narrowScreen1: false,
      narrowScreen2: false
    }

    this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
    this.handleRecordTouchTap = this.handleRecordTouchTap.bind(this);
    this.handleSignTouchTap = this.handleSignTouchTap.bind(this);
    this.handleInformedTouchTap = this.handleInformedTouchTap.bind(this);
    this.handleAttachTouchTap = this.handleAttachTouchTap.bind(this);
    this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handlePhotoTouchTap = this.handlePhotoTouchTap.bind(this);
    this.handleVideoTouchTap = this.handleVideoTouchTap.bind(this);
  }

  componentDidMount() {
    this.adaptScreen();

    window.addEventListener('resize', this.handleWindowResize);

    getPat(this.props.regId)
      .then(patInfo => this.setState({ title: `${patInfo.Name}（${patInfo.Sex} ${patInfo.VisitNo}）` }))
      .catch(() => this.setState({ title: '获取病人信息出错' }));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleNavBackRequest() {
    if (this.props.onNavBackRequest) {
      this.props.onNavBackRequest();
    }
  }
  handleRecordTouchTap() {
    if (this.state.recording) {
      this.setState({ recording: false });

      if (this.props.onStopEmrRecordRequest) {
        this.props.onStopEmrRecordRequest();
      }
    } else {
      this.setState({ recording: true });

      if (this.props.onEmrRecordRequest) {
        this.props.onEmrRecordRequest();
      }
    }
  }
  handleSignTouchTap() {
    if (this.props.onEmrSignRequest) {
      this.props.onEmrSignRequest();
    }
  }
  handleInformedTouchTap() {
    if (this.props.onEmrInformedRequest) {
      this.props.onEmrInformedRequest();
    }
  }
  handleMenuButtonTouchTap() {
    if (this.props.onOpenMenuRequest) {
      this.props.onOpenMenuRequest();
    }
  }
  handleAttachTouchTap() {
    if (this.props.onEmrAttachRequest) {
      this.props.onEmrAttachRequest();
    }
  }
  handlePhotoTouchTap() {
    if (this.props.onTakePhotoRequest) {
      this.props.onTakePhotoRequest();
    }
  }
  handleVideoTouchTap() {
    if (this.props.onVideoRequest) {
      this.props.onVideoRequest();
    }
  }
  handleWindowResize() {
    this.adaptScreen();
  }

  adaptScreen() {
    let narrowScreen1 = document.body.clientWidth < 400;
    let narrowScreen2 = !narrowScreen1 && document.body.clientWidth < 800;

    if (narrowScreen1 !== this.state.narrowScreen1 || narrowScreen2 !== this.state.narrowScreen2) {
      this.setState({ narrowScreen1: narrowScreen1, narrowScreen2: narrowScreen2 });
    }
  }

  render() {
    let { narrowScreen1, narrowScreen2, recording } = this.state;

    let title = (this.state.title ||
      <CircularProgress color="white" size={headerBarLoadingStyle.size} style={headerBarLoadingStyle} />);
    var optBtns = narrowScreen1 ? false : narrowScreen2 ? [
      <FlatButton
        key='record'
        label={recording ? '停止' : '录音'}
        icon={recording ? <StopIcon color="red" /> : <KeyboardVoiceIcon />}
        style={headerBarBtnStyle}
        onTouchTap={this.handleRecordTouchTap}
      />,
      <FlatButton
        key='sign'
        label='签名'
        icon={<BorderColorIcon />}
        style={headerBarBtnStyle}
        onTouchTap={this.handleSignTouchTap}
      />
    ] : [
        <FlatButton
          key='record'
          label={recording ? '停止' : '录音'}
          icon={recording ? <StopIcon color="red" /> : <KeyboardVoiceIcon />}
          style={headerBarBtnStyle}
          onTouchTap={this.handleRecordTouchTap}
        />,
        <FlatButton
          key='sign'
          label='签名'
          icon={<BorderColorIcon />}
          style={headerBarBtnStyle}
          onTouchTap={this.handleSignTouchTap}
        />,
        <FlatButton
          key='informed'
          label='知情'
          icon={<MoodIcon />}
          style={headerBarBtnStyle}
          onTouchTap={this.handleInformedTouchTap}
        />,
        <FlatButton
          key='attach'
          label='附件'
          icon={<InsertLinkIcon />}
          style={headerBarBtnStyle}
          onTouchTap={this.handleAttachTouchTap}
        />
      ];
    let optMenuItems = narrowScreen1 ? [
      <MenuItem key="record" primaryText={recording ? '停止' : '录音'} leftIcon={recording ? <StopIcon color="red" /> : <KeyboardVoiceIcon />}
        onTouchTap={this.handleRecordTouchTap} />,
      <MenuItem key="sign" primaryText="签名" leftIcon={<BorderColorIcon />} onTouchTap={this.handleSignTouchTap} />,
      <MenuItem key="informed" primaryText="知情" leftIcon={<MoodIcon />} onTouchTap={this.handleInformedTouchTap} />,
      <MenuItem key="attach" primaryText="附件" leftIcon={<InsertLinkIcon />} onTouchTap={this.handleAttachTouchTap} />,
      <MenuItem key="photo" primaryText="拍照" leftIcon={<CameraIcon />} onTouchTap={this.handlePhotoTouchTap} />,
      <MenuItem key="video" primaryText="视频" leftIcon={<VideoIcon />} onTouchTap={this.handleVideoTouchTap} />
    ] :
      narrowScreen2 ? [
        <MenuItem key="informed" primaryText="知情" leftIcon={<MoodIcon />} onTouchTap={this.handleInformedTouchTap} />,
        <MenuItem key="attach" primaryText="附件" leftIcon={<InsertLinkIcon />} onTouchTap={this.handleAttachTouchTap} />,
        <MenuItem key="photo" primaryText="拍照" leftIcon={<CameraIcon />} onTouchTap={this.handlePhotoTouchTap} />,
        <MenuItem key="video" primaryText="视频" leftIcon={<VideoIcon />} onTouchTap={this.handleVideoTouchTap} />
      ] : [
          <MenuItem key="photo" primaryText="拍照" leftIcon={<CameraIcon />} onTouchTap={this.handlePhotoTouchTap} />,
          <MenuItem key="video" primaryText="视频" leftIcon={<VideoIcon />} onTouchTap={this.handleVideoTouchTap} />
        ];

    let optMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton style={{ height: '100%', padding: '20px 12px' }}><MoreVertIcon color="white" /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }} >
        {optMenuItems}
      </IconMenu>
    );

    return (
      <NavBackHeaderBar
        title={title}
        onNavBackRequest={this.handleNavBackRequest}
        style={headerBarStyle}>
        {optBtns}
        {optMenu}
        <FlatButton
          icon={<MenuIcon />}
          style={headerBarBtnStyle}
          onTouchTap={this.handleMenuButtonTouchTap}
        />
      </NavBackHeaderBar>
    );
  }

}

export default EmrHeaderBar;