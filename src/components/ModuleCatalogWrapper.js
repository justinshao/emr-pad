import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

const style = {
    'fill': 'rgb(0, 188, 212)'
};
export default class ModuleCatalogWrapper extends React.Component {

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

    // 跳转病例菜单
    handleEmrTouchTap() {
        if (this.props.onEmrTouchTap) {
            this.props.onEmrTouchTap();
        }
    }

    // 跳转检查报告
    handleExamTouchTap() {
        if (this.props.onExamTouchTap) {
            this.props.onExamTouchTap();
        }
    }

    // 跳转化验报告
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

    // 跳转护理单
    handleCareTouchTap() {
        if (this.props.onCareTouchTap) {
            this.props.onCareTouchTap();
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
            <div>
                <List>
                    <ListItem primaryText="病例" leftIcon={<ContentInbox style={style} />} key='bingli' onClick={this.handleEmrTouchTap} />
                    <ListItem primaryText="检查报告" leftIcon={<ContentInbox style={style} />} key='jiancha' onClick={this.handleExamTouchTap} />
                    <ListItem
                        primaryText="化验报告"
                        leftIcon={<ContentInbox style={style} />}
                        key='huayan'
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem key='xuechanggui' primaryText="血常规" onClick={this.handleLabTouchTap} />,
                            <ListItem key='x1' primaryText="X1" onClick={this.handleLabXTouchTap} />
                        ]}
                    />
                    <ListItem
                        primaryText="护理单"
                        key='huli'
                        leftIcon={<ContentInbox style={style} />}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem key='hulijilu' primaryText="护理记录单" onClick={this.handleCareTouchTap} />,
                            <ListItem key='branden' primaryText="Branden评分" onClick={this.handleCareTouchTap} />
                        ]}
                    />
                    <ListItem primaryText="体温单" leftIcon={<ContentInbox style={style} />} key='tiwen' onClick={this.handleTemperTouchTap} />
                    <ListItem primaryText="医嘱" leftIcon={<ContentInbox style={style} />} key='yizhu' onClick={this.handleDtAdviceTouchTap} />
                    <ListItem primaryText="中药医嘱" leftIcon={<ContentInbox style={style} />} key='zhongyaoyizhu' onClick={this.handleChDtAdviceTouchTap} />
                    <ListItem primaryText="诊断" leftIcon={<ContentInbox style={style} />} key='zhenduan' onClick={this.handleDiagTouchTap} />
                </List>
            </div>
        );
    }
}