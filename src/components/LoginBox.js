import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import EnterIcon from 'material-ui/svg-icons/hardware/keyboard-return';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class LoginBox extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usr: props.usr,
            pwd: props.pwd
        };

        this.handleLoginTouchTap = this.handleLoginTouchTap.bind(this);
        this.handleUsrChange = this.handleUsrChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
    }

    handleLoginTouchTap() {
        if (this.props.onLoginRequest) {
            this.props.onLoginRequest(this.state.usr, this.state.pwd);
        }
    }
    handleUsrChange(event, value) {
        this.setState({ usr: value, usrError: null });
    }
    handlePwdChange(event, value) {
        this.setState({ pwd: value, pwdError: null });
    }

    render() {
        const icon = (
            this.props.loading ? <RefreshIndicator
                size={30}
                left={10}
                top={0}
                status="loading"
                style={{
                    display: 'inline-block',
                    position: 'relative'
                }} /> : <EnterIcon />
        );

        return (
            <div style={Object.assign({}, { textAlign: 'center' }, this.props.style)}>
                <TextField hintText="请输入工号" value={this.state.usr}
                    errorText={this.props.usrError}
                    onChange={this.handleUsrChange} style={{ marginBottom: '10px' }} /><br />
                <TextField hintText="请输入密码" value={this.state.pwd}
                    errorText={this.props.pwdError}
                    onChange={this.handlePwdChange} type="password" style={{ marginBottom: '10px' }} /><br />
                <FlatButton label="登录"
                    onTouchTap={this.handleLoginTouchTap}
                    labelPosition="before"
                    style={{ width: '200px', height: '50px' }}
                    labelStyle={{ fontSize: '20px' }}
                    icon={icon} primary />
            </div>
        );
    }
}

export default LoginBox;