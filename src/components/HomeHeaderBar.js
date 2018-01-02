import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import SignOutButton from './SignOutButton';
import { headerBarBtnStyle } from '../styles';
import { getWards, getLoginInfo } from '../service';
import logger from '../logger';
import { Icon, Dropdown } from 'semantic-ui-react';
import '../styles/App.css'


const styles = {
    signOut: {
        height: 'inherit',
        minWidth: '50px'
    },
    changeIcon: {
        opacity: '0.5',
        position: 'fixed',
        right: '0px',
        bottom: '20px'
    }
}

class HomeHeaderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            wards: [],
            changeIcon: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleExitApp = this.handleExitApp.bind(this);
        this.handleUserHome = this.handleUserHome.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
    }

    componentDidMount() {
        getWards().then(wards => {
            if (wards.length) {
                this.setState({ wards: wards });
                if (!this.props.wardId) {
                    let value = wards[0].Id;
                    this.selectWard(value);
                }
            }
        })
            .catch(() => logger.error('获取病区列表出错'));

        getLoginInfo().then(info => this.setState({ title: `${info.Name}（${info.Dept}）` }))
            .catch(() => this.setState({ title: '获取登录信息出错' }));
    }

    handleExitApp() {
        if (this.props.onExitAppRequest) {
            this.props.onExitAppRequest();
        }
    }

    handleUserHome() {
        if (this.props.onUserHomeRequest) {
            this.props.onUserHomeRequest();
        }
    }

    // 向上传入筛选的wardid
    selectWard(wardId) {
        if (this.props.onSelectedWardChange) {
            this.props.onSelectedWardChange(wardId);
        }
    }

    handleChangeType() {
        if (this.props.onChangeType) {
            this.props.onChangeType();
        }
        this.setState({
            changeIcon: !this.state.changeIcon
        })
    }

    handleChange(e, { value }) {
        this.setState({ value });
        this.selectWard(value);
    }

    render() {
        let leftElement = (<IconButton onTouchTap={this.handleUserHome}><AccountCircleIcon /></IconButton>);
        let value = this.props.wardId;
        var options = [];
        value ? this.state.wards.map(w => {
            let option = { key: '', text: '', value: '' };
            option.key = w.Id;
            option.text = w.Name;
            option.value = w.Id;
            options.push(option);
        }) : '';

        let rightElement = this.state.wards.length ? <div style={{ marginRight: '16px', height: '100%', lineHeight: '64px' }}><Dropdown onChange={this.handleChange}
            options={options}
            placeholder='Choose an option'
            floating
            scrolling
            icon='filter'
            value={value}
            style={{ border: 'none', background: 'none', color: 'white' }}
            className={'wardStyle'}
        /></div> : <div></div>;

        return (
            <AppBar
                iconElementLeft={leftElement}
                iconElementRight={rightElement}
                iconStyleRight={{ marginTop: '0px' }}
                title={this.state.title}
                style={this.props.style}
                titleStyle={{ fontSize: '18px' }}
            >
                <SignOutButton style={Object.assign({}, headerBarBtnStyle, styles.signOut)} onLoginout={this.handleExitApp} />
                <div style={styles.changeIcon} onClick={this.handleChangeType}>
                    {
                        this.state.changeIcon ? <Icon inverted color='grey' name='block layout' size='huge' /> :
                            <Icon inverted color='grey' name='list layout' size='huge' />
                    }
                </div>
            </AppBar>
        );
    }
}

export default HomeHeaderBar;