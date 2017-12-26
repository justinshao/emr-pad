import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import SignOutButton from './SignOutButton';
import { headerBarDDMenuStyle, headerBarBtnStyle } from '../styles';
import { getWards, getLoginInfo } from '../service';
import logger from '../logger';
import { Icon } from 'semantic-ui-react'

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
        this.handleChangeType=this.handleChangeType.bind(this);
    }

    componentDidMount() {
        getWards().then(wards => {
            if (wards.length) {
                this.setState({ wards: wards });
                if (!this.props.wardId) {
                    this.selectWard(wards[0].Id);
                }
            }
        })
            .catch(() => logger.error('获取病区列表出错'));

        getLoginInfo().then(info => this.setState({ title: `${info.Name}（${info.Dept}）` }))
            .catch(() => this.setState({ title: '获取登录信息出错' }));
    }

    handleChange(event, index, value) {
        this.selectWard(value);
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

    selectWard(wardId) {
        if (this.props.onSelectedWardChange) {
            this.props.onSelectedWardChange(wardId);
        }
    }

    handleChangeType() {
        if(this.props.onChangeType){
            this.props.onChangeType();
        }
        this.setState({
            changeIcon:!this.state.changeIcon
        })
    }

    render() {
        let leftElement = (<IconButton onTouchTap={this.handleUserHome}><AccountCircleIcon /></IconButton>);
        let rightElement = (
            this.state.wards.length ?
                <DropDownMenu value={this.props.wardId}
                    style={headerBarDDMenuStyle}
                    labelStyle={headerBarDDMenuStyle.label}
                    onChange={this.handleChange}>
                    {
                        this.state.wards.slice().map(w =>
                            <MenuItem key={w.Id} value={w.Id} primaryText={w.Name} leftIcon={<PlaceIcon />} />
                        )
                    }
                </DropDownMenu> : <div></div>
        );

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