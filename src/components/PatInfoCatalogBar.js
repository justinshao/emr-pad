import React from 'react';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';
import { List, ListItem } from 'material-ui/List';
import { Icon } from 'semantic-ui-react';
import {  Menu } from 'semantic-ui-react';
import '../styles/App.css';

const color = {
    color: 'rgb(0, 188, 212)',
    paddingLeft: '10px'
};
const bodywidth=(document.body.clientWidth / 4);

class PatCatalogBar extends React.Component {

    constructor(props) {
        super(props);
        this.handlePatHospital = this.handlePatHospital.bind(this);
        this.handlePatBasicInfor = this.handlePatBasicInfor.bind(this);
        this.handlePatAllergy = this.handlePatAllergy.bind(this);
        this.handlePatDiet = this.handlePatDiet.bind(this);
        this.handlePatAssociatHospital = this.handlePatAssociatHospital.bind(this);
        this.handlePatRotation = this.handlePatRotation.bind(this);
        this.handlePatChangeHospital = this.handlePatChangeHospital.bind(this);
        this.handlePatAccount = this.handlePatAccount.bind(this);
    }

    //跳转住院信息
    handlePatHospital() {
        if (this.props.onPatHospital) {
            this.props.onPatHospital();
        }
    }

    //跳转基本信息
    handlePatBasicInfor() {
        if (this.props.onPatBasicInfor) {
            this.props.onPatBasicInfor();
        }
    }

    //跳转过敏信息
    handlePatAllergy() {
        if (this.props.onPatAllergy) {
            this.props.onPatAllergy();
        }
    }

    //跳转饮食医嘱信息
    handlePatDiet() {
        if (this.props.onPatDiet) {
            this.props.onPatDiet();
        }
    }

    //跳转关联住院信息
    handlePatAssociatHospital() {
        if (this.props.onPatAssociatHospital) {
            this.props.onPatAssociatHospital();
        }
    }

    //跳转轮转信息
    handlePatRotation() {
        if (this.props.onPatRotation) {
            this.props.onPatRotation();
        }
    }

    //跳转住院变更信息
    handlePatChangeHospital() {
        if (this.props.onPatChangeHospital) {
            this.props.onPatChangeHospital();
        }
    }

    //跳转住院账户信息
    handlePatAccount() {
        if (this.props.onPatAccount) {
            this.props.onPatAccount();
        }
    }

    render() {
        return (
            <div>
                <div className={'webComponentShow'}>
                    <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onMenuRequestChange} openSecondary={true} containerStyle={{ overflow: 'hidden' }}>
                        <PatInfoWrapper
                            onPaitentInfor={this.handlePaitentInfor}
                            regId={this.props.regId}
                            sourceType={this.props.sourceType}
                        />
                        <List>
                            <ListItem
                                key='zhuyuan'
                                primaryText='住院信息'
                                onClick={this.handlePatHospital}
                                leftIcon={<Icon disabled name='hospital' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='jiben'
                                primaryText='基本信息'
                                onClick={this.handlePatBasicInfor}
                                leftIcon={<Icon disabled name='id badge' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='guomin'
                                primaryText='过敏信息'
                                onClick={this.handlePatAllergy}
                                leftIcon={<Icon disabled name='heartbeat' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='yinshi'
                                primaryText='饮食医嘱'
                                onClick={this.handlePatDiet}
                                leftIcon={<Icon disabled name='doctor' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='guanlian'
                                primaryText='关联住院'
                                onClick={this.handlePatAssociatHospital}
                                leftIcon={<Icon disabled name='sitemap' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='lunzhuan'
                                primaryText='轮转信息'
                                onClick={this.handlePatRotation}
                                leftIcon={<Icon disabled name='history' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='biangeng'
                                primaryText='住院变更'
                                onClick={this.handlePatChangeHospital}
                                leftIcon={<Icon disabled name='exchange' size='large' style={color} color='grey' />}
                            />
                            <ListItem
                                key='zhanghu'
                                primaryText='住院账户'
                                onClick={this.handlePatAccount}
                                leftIcon={<Icon disabled name='payment' size='large' style={color} color='grey' />}
                            />
                        </List>
                    </Drawer>
                </div>
                <div className={'mobileComponentShow'}>
                <div className={'infoBottomMenu'}>
                    <Menu style={{ position: 'absolute', bottom: '0px', left: '0px',width:bodywidth*8}} widths='8'>
                        <Menu.Item key='zhuyuan' onClick={this.handlePatHospital}>住院信息</Menu.Item>
                        <Menu.Item key='jiben' onClick={this.handlePatBasicInfor}>基本信息</Menu.Item>
                        <Menu.Item key='guomin' onClick={this.handlePatAllergy}>过敏信息</Menu.Item>
                        <Menu.Item key='yinshi' onClick={this.handlePatDiet}>饮食医嘱</Menu.Item>
                        <Menu.Item key='guanlian' onClick={this.handlePatAssociatHospital}>关联住院</Menu.Item>
                        <Menu.Item key='lunzhuan' onClick={this.handlePatRotation}>轮转信息</Menu.Item>
                        <Menu.Item key='biangeng' onClick={this.handlePatChangeHospital}>住院变更</Menu.Item>
                        <Menu.Item key='zhanghu' onClick={this.handlePatAccount}>住院账户</Menu.Item>
                    </Menu>
                </div>
                </div>
            </div>
        );
    }
}

export default PatCatalogBar;
