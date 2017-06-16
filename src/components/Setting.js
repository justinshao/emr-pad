import React from 'react';
import NavBackHeaderBar from './NavBackHeaderBar';
import SettingContent from './SettingContent';
import { contentStyle } from '../styles';

class Setting extends React.Component {

    constructor(props) {
        super(props);

        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
    }

    handleNavBackRequest() {
        let { history } = this.props;

        history.goBack();
    }

    render() {
        return (
            <div>
                <NavBackHeaderBar title="设置" onNavBackRequest={this.handleNavBackRequest} />
                <SettingContent style={ Object.assign({}, contentStyle, { paddingTop: '74px' }) } />
            </div>
        );
    }
}

export default Setting;