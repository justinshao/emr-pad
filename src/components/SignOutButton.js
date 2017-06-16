import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ExitIcon from 'material-ui/svg-icons/action/exit-to-app';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import auth from '../auth';
import { logger } from '../logger';

const loading = <RefreshIndicator
    size={30}
    left={10}
    top={0}
    status="loading"
    style={{
        display: 'inline-block',
        position: 'relative'
    }} />;

class SignOutButton extends React.Component {

    state = {
        processing: false
    }

    constructor(props) {
        super(props);

        this.handleExitApp = this.handleExitApp.bind(this);
    }

    handleExitApp() {
        this.setState({ processing: true });

        auth.signout((err) => {
            if (err) {
                logger.error(err);
            }

            if (this.props.onLoginout) {
                this.props.onLoginout();
            }
        });
    }

    render() {
        return this.state.processing ? (
            <FlatButton style={this.props.style} icon={loading}/>
        ) : (
                <FlatButton
                    icon={<ExitIcon />}
                    style={this.props.style}
                    onTouchTap={() => this.handleExitApp()}
                />
            )
    }
}

export default SignOutButton;