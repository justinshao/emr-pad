import React from 'react';
import PatInfoContent from './PatInfoContent';
import PatInfoHeaderBar from './PatInfoHeaderBar';
import PatInfoCatalogBar from './PatInfoCatalogBar';

class PatInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openmenu: false
        };
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
        this.handlePatHospital = this.handlePatHospital.bind(this);
        this.handlePatBasicInfor = this.handlePatBasicInfor.bind(this);
        this.handlePatAllergy = this.handlePatAllergy.bind(this);
        this.handlePatDiet = this.handlePatDiet.bind(this);
        this.handlePatAssociatHospital = this.handlePatAssociatHospital.bind(this);
        this.handlePatRotation = this.handlePatRotation.bind(this);
        this.handlePatChangeHospital = this.handlePatChangeHospital.bind(this);
        this.handlePatAccount = this.handlePatAccount.bind(this);
    }

    // 返回上一层
    handleNavBackRequest() {
        let { history } = this.props;
        history.goBack();
    }

    //显示目录
    handleMenuButtonTouchTap() {
        this.setState({ openmenu: true });
    }

    // 显示目录
    handleMenuRequestChange() {
        this.setState({ openmenu: !this.state.openmenu });
    }

    //跳转住院信息
    handlePatHospital() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patHospital`);
        this.setState({ openmenu: false });
    }

    //跳转基本信息
    handlePatBasicInfor() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patBasicInfor`);
        this.setState({ openmenu: false });
    }

    //跳转过敏信息
    handlePatAllergy() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patAllergy`);
        this.setState({ openmenu: false });
    }

    //跳转饮食医嘱信息
    handlePatDiet() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patDiet`);
        this.setState({ openmenu: false });
    }

    //跳转关联住院信息
    handlePatAssociatHospital() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patAssociatHospital`);
        this.setState({ openmenu: false });
    }

    //跳转轮转信息
    handlePatRotation() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patRotation`);
        this.setState({ openmenu: false });
    }

    //跳转住院变更信息
    handlePatChangeHospital() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patChangeHospital`);
        this.setState({ openmenu: false });
    }

    //跳转住院账户信息
    handlePatAccount() {
        let { history } = this.props;
        let { regId,sourceType} = this.props.match.params;
        history.replace(`/patInfo/${regId}/${sourceType}/patAccount`);
        this.setState({ openmenu: false });
    }

    render() {
        let { regId, inforId } = this.props.match.params;
        return (
            <div>
                <PatInfoHeaderBar
                    regId={regId}
                    onNavBackRequest={this.handleNavBackRequest}
                    onOpenMenuRequest={this.handleMenuButtonTouchTap}
                />
                <PatInfoCatalogBar
                    open={this.state.openmenu}
                    onMenuRequestChange={this.handleMenuRequestChange}
                    onPatHospital={this.handlePatHospital}
                    onPatBasicInfor={this.handlePatBasicInfor}
                    onPatAllergy={this.handlePatAllergy}
                    onPatDiet={this.handlePatDiet}
                    onPatAssociatHospital={this.handlePatAssociatHospital}
                    onPatRotation={this.handlePatRotation}
                    onPatChangeHospital={this.handlePatChangeHospital}
                    onPatAccount={this.handlePatAccount}
                />
                <PatInfoContent
                    regId={regId}
                    inforId={inforId}
                />
            </div>
        )
    }
}

export default PatInfo;