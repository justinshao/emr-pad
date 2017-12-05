import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import SaveIcon from 'material-ui/svg-icons/content/save';
import Snackbar from 'material-ui/Snackbar';
import SignBoard from './SignBoard';
import { signBoardStyle, appThemeColor } from '../styles';
import { patSign } from '../service';

const btnStyle = {
    width: '200px',
    height: '70px'
};
const btnLabelStyle = {
    fontSize: '20px',
    color: appThemeColor
};

class Sign extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            empty: true,
            alertMessage: ''
        }

        this.handleClear = this.handleClear.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleWritingPost = this.handleWritingPost.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }

    handleClear(){
        this.setState({ empty: true });
    }
    handlePost(){
        const data = this.data;
        const { emrId } = this.props;
        if(data){
            let base64 = data.match(/data:image\/.+;base64,(.+)/)[1];

            patSign(emrId, base64)
                .then(() => this.setState({ alertMessage: '' }))
                .catch((e) => this.setState({ alertMessage: e.message }))
        }
    }
    handleWritingPost(data){
        this.data = data;
    }

    handleAlertClose() {
        this.setState({
            alertMessage: ''
        });
    }

    render() {
        let btns = [
            <FlatButton
                key="clear"
                label="清除"
                labelPosition="after"
                icon={<CloseIcon color={appThemeColor} />}
                style={btnStyle}
                labelStyle={btnLabelStyle}
                onTouchTap={this.handleClear}
            />,
            <FlatButton
                key="ok"
                label="确定"
                labelPosition="after"
                icon={<SaveIcon color={appThemeColor} />}
                style={btnStyle}
                labelStyle={btnLabelStyle}
                onTouchTap={this.handlePost}
            />
        ];
        const { alertMessage } = this.state;

        return (
            <div style={this.props.style}>
                <SignBoard width={600} height={200} style={ signBoardStyle } empty={ this.state.empty }
                        onPost={this.handleWritingPost}/><br/>
                { btns }
                <Snackbar
                    open={!!alertMessage}
                    message={alertMessage}
                    autoHideDuration={3000}
                    onRequestClose={this.handleAlertClose}
                />
            </div>
        );
    }
}

export default Sign;