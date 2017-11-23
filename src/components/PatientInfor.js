import React from 'react';
import PatientInforContent from './PatientInforContent';
import PatientInforHeaderBar from './PatientInforHeaderBar';

class PatientInfor extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handlePatientHospital = this.handlePatientHospital.bind(this);
        this.handlePatientBasicInfor = this.handlePatientBasicInfor.bind(this);
        this.handlePatientAllergy = this.handlePatientAllergy.bind(this);
        this.handlePatientDiet = this.handlePatientDiet.bind(this);
        this.handlePatientAssociatHospital = this.handlePatientAssociatHospital.bind(this);
        this.handlePatientRotation = this.handlePatientRotation.bind(this);
        this.handlePatientChangeHospital = this.handlePatientChangeHospital.bind(this);
        this.handlePatientAccount = this.handlePatientAccount.bind(this);
    }
        
    // 返回上一层
    handleNavBackRequest() {
        let { history } = this.props;
        history.goBack();
    }

    //跳转住院信息
    handlePatientHospital() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientHospital`);
    }

    //跳转基本信息
    handlePatientBasicInfor() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientBasicInfor`);
    }

    //跳转过敏信息
    handlePatientAllergy() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientAllergy`);
    }

    //跳转饮食医嘱信息
    handlePatientDiet() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientDiet`);
    }

    //跳转关联住院信息
    handlePatientAssociatHospital() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientAssociatHospital`);
    }

    //跳转轮转信息
    handlePatientRotation() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientRotation`);
    }

    //跳转住院变更信息
    handlePatientChangeHospital() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientChangeHospital`);
    }

    //跳转住院账户信息
    handlePatientAccount() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/PaitentInfor/${regId}/PatientAccount`);
    }

    render() {
        let { regId, inforId } = this.props.match.params;
        return (
            <div>
                <PatientInforHeaderBar
                    regId={regId}
                    onNavBackRequest={this.handleNavBackRequest}
                    onPatientHospital={this.handlePatientHospital}
                    onPatientBasicInfor={this.handlePatientBasicInfor}
                    onPatientAllergy={this.handlePatientAllergy}
                    onPatientDiet={this.handlePatientDiet}
                    onPatientAssociatHospital={this.handlePatientAssociatHospital}
                    onPatientRotation={this.handlePatientRotation}
                    onPatientChangeHospital={this.handlePatientChangeHospital}
                    onPatientAccount={this.handlePatientAccount}
                />
                <PatientInforContent
                    regId={regId}
                    inforId={inforId}
                />

            </div>
        )
    }
}

export default PatientInfor;