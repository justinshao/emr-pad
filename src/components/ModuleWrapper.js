import React from 'react';
import ModuleHeaderBar from './ModuleHeaderBar';
import ModuleCatalogBar from './ModuleCatalogBar';
import ModuleView from './ModuleView';
import { getMainMenu } from '../service';

class ModuleWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            menu: [],
            loading:true
        }

        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
        this.handleMenuRequestChange = this.handleMenuRequestChange.bind(this);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
        this.handleReportEchars = this.handleReportEchars.bind(this);
        this.fetchMainMenu = this.fetchMainMenu.bind(this);
        this.handleChangeTap = this.handleChangeTap.bind(this);
    }

    // 加载mainmenu主菜单项
    componentWillMount() {
        let { regId, sourceType } = this.props.match.params;
        this.fetchMainMenu(regId, sourceType);
    }

    //加载数据主菜单的数据
    fetchMainMenu(regId, sourceType) {
        getMainMenu(regId, sourceType)
            .then(menu => {
                this.setState({ menu: menu,loading:false });

            })
            .catch('数据出错');
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
        history.push(`/patInfo/${regId}/sourceType`);
    }

    // 跳转趋势图
    handleReportEchars() {
        let { history } = this.props;
        history.push('/reportEchars');
    }

    // 跳转其他界面
    handleChangeTap(item) {
        let { history } = this.props;
        if (item.Name == '病历概要') {
            history.push(item.Url);
        }
        else {
            history.replace(item.Url);
        }
        this.setState({
            menuOpen: false
        })
    }

    render() {
        let { regId, sourceType, content, reportType } = this.props.match.params;

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
                    loading={this.state.loading}
                    open={this.state.menuOpen}
                    sourceType={sourceType}
                    menu={this.state.menu}
                    onMenuRequestChange={this.handleMenuRequestChange}
                    onPaitentInfor={this.handlePaitentInfor}
                    onChangeTap={this.handleChangeTap}
                />
                {/* 正文组件 */}
                <ModuleView
                    regId={regId}
                    sourceType={sourceType}
                    content={content}
                    reportType={reportType}
                    onReportEchars={this.handleReportEchars}
                />
            </div>
        )
    }
}

export default ModuleWrapper;