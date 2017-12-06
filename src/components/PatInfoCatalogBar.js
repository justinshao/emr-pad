import React from 'react';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';
import { List, ListItem } from 'material-ui/List';
import { Icon } from 'semantic-ui-react';

const color={
    color:"rgba(0, 188, 212,1)",
    paddingLeft:'10px'
};

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
            <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onMenuRequestChange} openSecondary={true} containerStyle={{ overflow: 'hidden' }}>
                <PatInfoWrapper onPaitentInfor={this.handlePaitentInfor} />
                <List>
                    <ListItem
                        key='zhuyuan'
                        primaryText='住院信息'
                        onClick={this.handlePatHospital}
                        leftIcon={<Icon disabled name='hospital' size='large' style={color}/>}
                    />
                    <ListItem
                        key='jiben'
                        primaryText='基本信息'
                        onClick={this.handlePatBasicInfor}
                        leftIcon={<Icon disabled name='id badge' size='large' style={color}/>}
                    />
                    <ListItem
                        key='guomin'
                        primaryText='过敏信息'
                        onClick={this.handlePatAllergy}
                        leftIcon={<Icon disabled name='heartbeat' size='large' style={color}/>}
                    />
                    <ListItem
                        key='yinshi'
                        primaryText='饮食医嘱'
                        onClick={this.handlePatDiet}
                        leftIcon={<Icon disabled name='doctor' size='large' style={color}/>}
                    />
                    <ListItem
                        key='guanlian'
                        primaryText='关联住院'
                        onClick={this.handlePatAssociatHospital}
                        leftIcon={<Icon disabled name='sitemap' size='large' style={color}/>}
                    />
                    <ListItem
                        key='lunzhuan'
                        primaryText='轮转信息'
                        onClick={this.handlePatRotation}
                        leftIcon={<Icon disabled name='history' size='large' style={color}/>}
                    />
                    <ListItem
                        key='biangeng'
                        primaryText='住院变更'
                        onClick={this.handlePatChangeHospital}
                        leftIcon={<Icon disabled name='exchange' size='large' style={color}/>}
                    />
                    <ListItem
                        key='zhanghu'
                        primaryText='住院账户'
                        onClick={this.handlePatAccount}
                        leftIcon={<Icon disabled name='payment' size='large' style={color}/>}
                    />
                </List>
            </Drawer>
        );
    }
}

export default PatCatalogBar;
