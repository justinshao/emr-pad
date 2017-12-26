import React from 'react';
import ClinicCatalogWrapper from './ClinicCatalogWrapper';
import Drawer from 'material-ui/Drawer';
import PatInfoWrapper from './PatInfoWrapper';

class ClinicCatalogBar extends React.Component {

    constructor(props) {
        super(props);
        this.handlePaitentInfor = this.handlePaitentInfor.bind(this);
        this.handleChangeTap = this.handleChangeTap.bind(this);
    }

    // 跳转病人信息
    handlePaitentInfor() {
        if (this.props.onPaitentInfor) {
            this.props.onPaitentInfor();
        }
    }

    // 跳转其他界面
    handleChangeTap(item) {
        if (this.props.onChangeTap) {
            this.props.onChangeTap(item);
        }
    }

    render() {
        return (
            <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onMenuRequestChange} openSecondary={true} containerStyle={{ overflow: 'hidden' }}>
                <PatInfoWrapper onPaitentInfor={this.handlePaitentInfor} sourceType={this.props.sourceType} regId={this.props.regId} />
                <ClinicCatalogWrapper menu={this.props.menu} onChangeTap={this.handleChangeTap} loading={this.props.loading} />
            </Drawer>
        );
    }
}

export default ClinicCatalogBar;
