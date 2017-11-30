import React from 'react';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';
import { List, ListItem } from 'material-ui/List';

class PatientCatalogBar extends React.Component {

    constructor(props) {
        super(props);
        this.handlePatientHospital = this.handlePatientHospital.bind(this);
        this.handlePatientBasicInfor = this.handlePatientBasicInfor.bind(this);
        this.handlePatientAllergy = this.handlePatientAllergy.bind(this);
        this.handlePatientDiet = this.handlePatientDiet.bind(this);
        this.handlePatientAssociatHospital = this.handlePatientAssociatHospital.bind(this);
        this.handlePatientRotation = this.handlePatientRotation.bind(this);
        this.handlePatientChangeHospital = this.handlePatientChangeHospital.bind(this);
        this.handlePatientAccount = this.handlePatientAccount.bind(this);
    }

    //跳转住院信息
    handlePatientHospital() {
        if (this.props.onPatientHospital) {
            this.props.onPatientHospital();
        }
    }

    //跳转基本信息
    handlePatientBasicInfor() {
        if (this.props.onPatientBasicInfor) {
            this.props.onPatientBasicInfor();
        }
    }

    //跳转过敏信息
    handlePatientAllergy() {
        if (this.props.onPatientAllergy) {
            this.props.onPatientAllergy();
        }
    }

    //跳转饮食医嘱信息
    handlePatientDiet() {
        if (this.props.onPatientDiet) {
            this.props.onPatientDiet();
        }
    }

    //跳转关联住院信息
    handlePatientAssociatHospital() {
        if (this.props.onPatientAssociatHospital) {
            this.props.onPatientAssociatHospital();
        }
    }

    //跳转轮转信息
    handlePatientRotation() {
        if (this.props.onPatientRotation) {
            this.props.onPatientRotation();
        }
    }

    //跳转住院变更信息
    handlePatientChangeHospital() {
        if (this.props.onPatientChangeHospital) {
            this.props.onPatientChangeHospital();
        }
    }

    //跳转住院账户信息
    handlePatientAccount() {
        if (this.props.onPatientAccount) {
            this.props.onPatientAccount();
        }
    }

    render() {
        return (
            <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onMenuRequestChange} openSecondary={true} containerStyle={{ overflow: 'hidden' }}>
                <PatInfoWrapper onPaitentInfor={this.handlePaitentInfor} />
                <List>
                    <ListItem key='zhuyuan' primaryText='住院信息' onClick={this.handlePatientHospital} />
                    <ListItem key='jiben' primaryText='基本信息' onClick={this.handlePatientBasicInfor} />
                    <ListItem key='guomin' primaryText='过敏信息' onClick={this.handlePatientAllergy} />
                    <ListItem key='yinshi' primaryText='饮食医嘱' onClick={this.handlePatientDiet} />
                    <ListItem key='guanlian' primaryText='关联住院' onClick={this.handlePatientAssociatHospital} />
                    <ListItem key='lunzhuan' primaryText='轮转信息' onClick={this.handlePatientRotation} />
                    <ListItem key='biangeng' primaryText='住院变更' onClick={this.handlePatientChangeHospital} />
                    <ListItem key='zhanghu' primaryText='住院账户' onClick={this.handlePatientAccount} />
                </List>
            </Drawer>
        );
    }
}

export default PatientCatalogBar;
