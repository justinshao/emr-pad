import React from 'react';
import ModuleCatalogWrapper from './ModuleCatalogWrapper';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';

class ModuleCatalogBar extends React.Component {

    constructor(props) {
        super(props);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
        this.handleChangeTap=this.handleChangeTap.bind(this);
    }

    // 跳转病人信息
    handlePaitentInfor() {
        if (this.props.onPaitentInfor) {
            this.props.onPaitentInfor();
        }
    }

    // 跳转其他界面
    handleChangeTap(item){
        if(this.props.onChangeTap){
            this.props.onChangeTap(item);
        }
    }

    render() {
        return (
            // docked表示，点击之后抽屉是否拉回
            // open表示，抽屉的显示状态
            <Drawer
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onMenuRequestChange}
                openSecondary={true}
            >
                <PatInfoWrapper/>
                <ModuleCatalogWrapper
                    menu={this.props.menu}
                    onChangeTap={this.handleChangeTap}
                    onPaitentInfor={this.handlePaitentInfor}
                />
            </Drawer>
        );
    }
}

export default ModuleCatalogBar;
