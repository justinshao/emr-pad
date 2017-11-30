import React from 'react';
import { titleStyle } from '../styles';
import ReportDtAdviceHeader from './ReportDtAdviceHeader';
import ReportDtAdviceContent from './ReportDtAdviceContent';
import NoResult from './NoResult';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class ReportDtAdvice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 长期医嘱和临时医嘱判断
            timeofAdvice: '1',
            // 出院带药
            dischargedDrug: '',
            // 医嘱类型(药品/非药品)
            typeofadvice: '3',
            // 日期
            date: '',
            // 是否停用（控制未停和全部）
            status: '3'
        }
        this.handleChangeTimeofAdvice = this.handleChangeTimeofAdvice.bind(this);
        this.handleChangeDischargedDrug = this.handleChangeDischargedDrug.bind(this);
        this.handleChangeTypeofadvice = this.handleChangeTypeofadvice.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    // 长期医嘱和临时医嘱设置
    handleChangeTimeofAdvice(param) {
        this.setState = {
            timeofAdvice: param,
            dischargedDrug: ''
        }
    }

    // 出院带药配置
    handleChangeDischargedDrug(param) {
        this.setState = {
            timeofAdvice: '',
            dischargedDrug: param
        }
    }

    //药品/非药品设置
    handleChangeTypeofadvice(param) {
        this.setState = {
            typeofadvice: param
        }
    }

    // 日期设定
    handleChangeDate(param) {
        this.setState = {
            date: param
        }
    }

    // 是否停用（控制未停和全部）设置
    handleChangeStatus(param) {
        this.setState = {
            status: param
        }
    }

    render() {
        let showContent = (
            true ? (
                <div>
                    <div style={titleStyle}>医嘱单</div>
                    <ReportDtAdviceHeader
                        onChangeTimeofAdvice={this.handleChangeTimeofAdvice}
                        onChangeDischargedDrug={this.handleChangeDischargedDrug}
                        onChangeTypeofadvice={this.handleChangeTypeofadvice}
                        onChangeDate={this.handleChangeDate}
                        onChangeStatus={this.handleChangeStatus}
                    />
                    <ReportDtAdviceContent
                        timeofAdvice={this.state.timeofAdvice}
                        dischargedDrug={this.state.dischargedDrug}
                        typeofadvice={this.state.typeofadvice}
                        date={this.state.date}
                        status={this.state.status}
                    />
                </div>
            ) : <NoResult />
        );
        return (
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportDtAdvice;