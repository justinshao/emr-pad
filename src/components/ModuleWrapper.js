import React from 'react';
import ModuleHeaderBar from './ModuleHeaderBar';
import ModuleViewer from './ModuleViewer';
import ModuleCatalogBar from './ModuleCatalogBar'


class ModuleWrapper extends React.Component {
    constructor(props) {
        super(props);
        // let { emrId }=this.props.match.params;
        this.state = {
            menuOpen: false,
        }
        this.handleNavBackRequest = this.handleNavBackRequest.bind(this);
        this.handleMenuButtonTouchTap = this.handleMenuButtonTouchTap.bind(this);
        this.handleMenuRequestChange = this.handleMenuRequestChange.bind(this);
    }

    // 返回前一页请求
    handleNavBackRequest() {
        console.log("props的类型是" + typeof this.props);
        let { history } = this.props;
        history.goBack();
    }

    //添加显示菜单项
    handleMenuButtonTouchTap() {
        this.setState({ menuOpen: true });
    }

    //抽屉折叠请求
    handleMenuRequestChange() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    render() {
        return (
            <div>
                {/* 页头组件 */}
                <ModuleHeaderBar
                    onNavBackRequest={this.handleNavBackRequest}
                    onOpenMenuRequest={this.handleMenuButtonTouchTap}
                />
                {/* 内容区域组件 */}
                <ModuleViewer />
                {/* 菜单栏组件 */}
                <ModuleCatalogBar
                    open={this.state.menuOpen}
                    onRequestChange={this.handleMenuRequestChange}
                />
            </div>
        )
    }
}

export default ModuleWrapper;