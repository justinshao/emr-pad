import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import LanguageIcon from 'material-ui/svg-icons/action/language';
import { appThemeColor, contentCenter } from '../styles';

const rIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})*$/;

class SettingContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appRoot: localStorage.getItem('appRoot'),
            appRootError: ''
        }

        this.handleOk = this.handleOk.bind(this);
        this.handleAppRootChange = this.handleAppRootChange.bind(this);
    }

    handleOk() {
        if (!rIp.test(this.state.appRoot)) {
            this.setState({ appRootError: 'IP地址格式错误' });
        } else{
            localStorage.setItem('appRoot', this.state.appRoot);
            if(global.native){
                global.native.saveAppRoot(this.state.appRoot);
            }
        }
    }
    handleAppRootChange(event, value) {
        this.setState({ appRoot: value, appRootError: '' });
    }

    render() {
        return (
            <div style={Object.assign({}, contentCenter, this.props.style)}>
                <List>
                    <ListItem leftIcon={<LanguageIcon color={appThemeColor} />} innerDivStyle={{ paddingTop: '0px' }}>
                        <TextField hintText="输入App IP地址 如：127.0.0.1"
                            value={this.state.appRoot}
                            errorText={this.state.appRootError}
                            onChange={this.handleAppRootChange}
                            fullWidth />
                    </ListItem>
                </List>
                <Divider />
                <FlatButton
                    label="确定"
                    labelPosition="before"
                    hoverColor={appThemeColor}
                    icon={<CheckIcon />}
                    style={{ width: '200px', height: '50px', marginTop: '20px' }}
                    labelStyle={{ fontSize: '20px' }}
                    onTouchTap={this.handleOk}
                />
            </div>
        );
    }
}

export default SettingContent;