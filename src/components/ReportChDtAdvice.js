import React from 'react';
import { titleStyle } from '../styles';
import ReportChDtAdviceHeader from './ReportChDtAdviceHeader';
import ReportChDtAdviceContent from './ReportChDtAdviceContent';
import NoResult from './NoResult';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class ReportChDtAdvice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 药方类型(中药方/免煎中药)
            typeofadvice: '2',
            // 日期
            date: '',
            // 是否停用（控制未停和全部）
            status: '3'
        }
        this.handleChangeTypeofadvice = this.handleChangeTypeofadvice.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
    }

    //药方类型(中药方/免煎中药)
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
                    <div style={titleStyle}>中药医嘱单</div>
                    <ReportChDtAdviceHeader
                        onChangeTypeofadvice={this.handleChangeTypeofadvice}
                        onChangeDate={this.handleChangeDate}
                        onChangeStatus={this.handleChangeStatus}
                    />
                    <ReportChDtAdviceContent
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

export default ReportChDtAdvice;