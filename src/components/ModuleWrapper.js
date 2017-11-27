import React from 'react';
import ModuleHeaderBar from './ModuleHeaderBar';
import ModuleCatalogBar from './ModuleCatalogBar';
import ModuleView from './ModuleView';

class ModuleWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }

        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
        this.handleMenuRequestChange = this.handleMenuRequestChange.bind(this);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
        this.handleEmrTouchTap = this.handleEmrTouchTap.bind(this);
        this.handleExamTouchTap = this.handleExamTouchTap.bind(this);
        this.handleLabTouchTap = this.handleLabTouchTap.bind(this);
        this.handleLabXTouchTap = this.handleLabXTouchTap.bind(this);
        this.handleCareTouchTap = this.handleCareTouchTap.bind(this);
        this.handleTemperTouchTap = this.handleTemperTouchTap.bind(this);
        this.handleDtAdviceTouchTap = this.handleDtAdviceTouchTap.bind(this);
        this.handleChDtAdviceTouchTap = this.handleChDtAdviceTouchTap.bind(this);
        this.handleDiagTouchTap = this.handleDiagTouchTap.bind(this);
        this.handleReportEchars = this.handleReportEchars.bind(this);
    }

    // 返回前一页请求
    handleNavBackRequest() {
        let { history } = this.props;
        history.goBack();
    }

    //页头显示菜单项按钮
    handleMenuButtonTouchTap() {
        this.setState({ menuOpen: true });
    }

    //菜单抽屉折叠请求
    handleMenuRequestChange() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    // 查看病人信息
    handlePaitentInfor() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.push(`/PaitentInfor/${regId}`);
    }

    // 显示病例页面
    handleEmrTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.push(`/emr/${regId}`);
    }

    // 显示检查页面
    handleExamTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportExamination`);
    }

    // 显示化验界面
    handleLabTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportLaboratory`);
    }

    // 显示化验X界面
    handleLabXTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportLaboratoryX`);
    }

    // 显示护理记录单
    handleCareTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportCareOrder`);
    }

    // 显示体温报告单
    handleTemperTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportTemperature`);
    }

    // 跳转医嘱
    handleDtAdviceTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportDtAdvice`);
    }

    // 跳转中药医嘱
    handleChDtAdviceTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportChDtAdvice`);
    }

    // 跳转诊断
    handleDiagTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/${regId}/ReportDiag`);
    }

    // 跳转趋势图
    handleReportEchars() {
        let { history } = this.props;
        history.push('/ReportEchars');
    }

    render() {
        var { regId, content } = this.props.match.params;

        return (
            <div>
                {/* 页头组件 */}
                <ModuleHeaderBar
                    regId={regId}
                    onNavBackRequest={this.handleNavBackRequest}
                    onOpenMenuRequest={this.handleMenuButtonTouchTap}
                />
                {/* 侧边栏菜单组件 */}
                <ModuleCatalogBar
                    regId={regId}
                    open={this.state.menuOpen}
                    onPaitentInfor={this.handlePaitentInfor}
                    onMenuRequestChange={this.handleMenuRequestChange}
                    onEmrTouchTap={this.handleEmrTouchTap}
                    onExamTouchTap={this.handleExamTouchTap}
                    onLabTouchTap={this.handleLabTouchTap}
                    onLabXTouchTap={this.handleLabXTouchTap}
                    onCareTouchTap={this.handleCareTouchTap}
                    onTemperTouchTap={this.handleTemperTouchTap}
                    onDtAdviceTouchTap={this.handleDtAdviceTouchTap}
                    onChDtAdviceTouchTap={this.handleChDtAdviceTouchTap}
                    onDiagTouchTap={this.handleDiagTouchTap}
                />
                {/* 正文组件 */}
                <ModuleView
                    regId={regId}
                    content={content}
                    onReportEchars={this.handleReportEchars}
                />
            </div>
        )
    }
}

export default ModuleWrapper;