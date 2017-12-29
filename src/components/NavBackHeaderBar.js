import React from 'react';
import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import AppBar from 'material-ui/AppBar';
import { headerBarStyle } from '../styles';

class NavBackHeaderBar extends React.Component {

    constructor(props) {
        super(props);

        this.handleNavBackTouchTap = this.handleNavBackTouchTap.bind(this);
    }

    handleNavBackTouchTap() {
        if (this.props.onNavBackRequest) {
            this.props.onNavBackRequest();
        }
    }

    render() {
        return (
            <AppBar
                title={this.props.title}
                iconElementLeft={<IconButton><BackIcon /></IconButton>}
                iconElementRight={this.props.iconElementRight}
                onLeftIconButtonTouchTap={this.handleNavBackTouchTap}
                style={headerBarStyle}
                titleStyle={{ 'fontSize': '18px' }}>
                {this.props.children}
            </AppBar>
        );
    }
}

export default NavBackHeaderBar;