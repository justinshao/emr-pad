import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import IconButton from 'material-ui/IconButton';
import LoginBox from './LoginBox';
import auth from '../auth';
import { headerBarStyle } from '../styles';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            usrError: null,
            pwdError: null,
            loading: false
        }

        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
    }

    handleLoginRequest(usr, pwd) {
        this.setState({ loading: true });

        auth.authenticate(usr, pwd, err => {
            this.setState({
                redirectToReferrer: !err,
                pwdError: err,
                loading: false
            });
        });
    }
    handleSettings() {
        this.props.history.push('/setting');
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div>
                <AppBar title="登录" style={headerBarStyle}
                    iconElementLeft={<IconButton onTouchTap={this.handleSettings}><SettingsIcon /></IconButton>} />
                <LoginBox onLoginRequest={this.handleLoginRequest} style={{ paddingTop: '200px' }}
                    usrError={this.state.usrError}
                    pwdError={this.state.pwdError}
                    loading={this.state.loading} />
            </div>
        );
    }
}

export default Login;