import React from 'react';
import ModuleCatalogWrapper from './ModuleCatalogWrapper';
import Drawer from 'material-ui/Drawer';

class ModuleCatalogBar extends React.Component {
    
    constructor(props) {
        super(props);
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

    // 跳转病例组件
    handleEmrTouchTap() {
        if (this.props.onEmrTouchTap) {
            this.props.onEmrTouchTap();
        }
    }

    // 跳转检查组件
    handleExamTouchTap() {
        if (this.props.onExamTouchTap) {
            this.props.onExamTouchTap();
        }
    }

    // 跳转化验组件
    handleLabTouchTap() {
        if (this.props.onLabTouchTap) {
            this.props.onLabTouchTap();
        }
    }

    // 跳转化验X报告
    handleLabXTouchTap() {
        if (this.props.onLabXTouchTap) {
            this.props.onLabXTouchTap();
        }
    }

    // 跳转护理记录单
    handleCareTouchTap() {
        if (this.props.onCareTouchTap) {
            this.props.onCareTouchTap()
        }
    }

    // 跳转体温报告单
    handleTemperTouchTap() {
        if (this.props.onTemperTouchTap) {
            this.props.onTemperTouchTap();
        }
    }

    // 跳转医嘱
    handleDtAdviceTouchTap() {
        if (this.props.onDtAdviceTouchTap) {
            this.props.onDtAdviceTouchTap();
        }
    }

    // 跳转中药医嘱
    handleChDtAdviceTouchTap() {
        if (this.props.onChDtAdviceTouchTap) {
            this.props.onChDtAdviceTouchTap();
        }
    }

    // 跳转诊断
    handleDiagTouchTap() {
        if (this.props.onDiagTouchTap) {
            this.props.onDiagTouchTap();
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
                <ModuleCatalogWrapper
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
            </Drawer>
        );
    }
}

export default ModuleCatalogBar;
