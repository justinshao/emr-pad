import React from 'react';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';
import { List, ListItem } from 'material-ui/List';

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
                    <ListItem key='zhuyuan' primaryText='住院信息' onClick={this.handlePatHospital} />
                    <ListItem key='jiben' primaryText='基本信息' onClick={this.handlePatBasicInfor} />
                    <ListItem key='guomin' primaryText='过敏信息' onClick={this.handlePatAllergy} />
                    <ListItem key='yinshi' primaryText='饮食医嘱' onClick={this.handlePatDiet} />
                    <ListItem key='guanlian' primaryText='关联住院' onClick={this.handlePatAssociatHospital} />
                    <ListItem key='lunzhuan' primaryText='轮转信息' onClick={this.handlePatRotation} />
                    <ListItem key='biangeng' primaryText='住院变更' onClick={this.handlePatChangeHospital} />
                    <ListItem key='zhanghu' primaryText='住院账户' onClick={this.handlePatAccount} />
                </List>
            </Drawer>
        );
    }
}

export default PatCatalogBar;
