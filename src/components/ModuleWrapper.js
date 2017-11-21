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
        this.handleEmrTouchTap = this.handleEmrTouchTap.bind(this);
        this.handleExamTouchTap = this.handleExamTouchTap.bind(this);
        this.handleLabTouchTap = this.handleLabTouchTap.bind(this);
        this.handleLabXTouchTap = this.handleLabXTouchTap.bind(this);
        this.handleCareTouchTap = this.handleCareTouchTap.bind(this);
        this.handleTemperTouchTap = this.handleTemperTouchTap.bind(this);
        this.handleDtAdviceTouchTap = this.handleDtAdviceTouchTap.bind(this);
        this.handleChDtAdviceTouchTap = this.handleChDtAdviceTouchTap.bind(this);
        this.handleDiagTouchTap = this.handleDiagTouchTap.bind(this);
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

    // view模块默认显示页面
    componentDidMount() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.push(`/ModuleWrapper/ReportLaboratory/${regId}`);
    }

    // 显示病例页面
    handleEmrTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/emr/${regId}`);
    }

    // 显示检查页面
    handleExamTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportExamination/${regId}`);
    }

    // 显示化验界面
    handleLabTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportLaboratory/${regId}`);
    }

    // 显示化验X界面
    handleLabXTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportLaboratoryX/${regId}`);
    }

    // 显示护理记录单
    handleCareTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportCareOrder/${regId}`);
    }

    // 显示体温报告单
    handleTemperTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportTemperature/${regId}`);
    }

    // 跳转医嘱
    handleDtAdviceTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportDtAdvice/${regId}`);
    }

    // 跳转中药医嘱
    handleChDtAdviceTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportChDtAdvice/${regId}`);
    }

    // 跳转诊断
    handleDiagTouchTap() {
        let { history } = this.props;
        let { regId } = this.props.match.params;
        history.replace(`/ModuleWrapper/ReportDiag/${regId}`);
    }

    render() {
        return (
            <div>
                {/* 页头组件 */}
                <ModuleHeaderBar
                    onNavBackRequest={this.handleNavBackRequest}
                    onOpenMenuRequest={this.handleMenuButtonTouchTap}
                />
                {/* 侧边栏菜单组件 */}
                <ModuleCatalogBar
                    open={this.state.menuOpen}
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
                <ModuleView />
            </div>
        )
    }
}

export default ModuleWrapper;