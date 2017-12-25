import React from 'react';
import { titleStyle } from '../styles';
import ReportDtAdviceHeader from './ReportDtAdviceHeader';
import ReportDtAdviceContent from './ReportDtAdviceContent';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class ReportDtAdvice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // （1-长期，2-临时，3-出院带药）
            timeType: 1,
            // (限制归类医嘱类型(0=全部/1=药品/2=非药品)
            orderKind: 0,
            // （1-未停，2-当日,0-全部）
            selectFilter: 0
        }
        this.handleTimeType = this.handleTimeType.bind(this);
        this.handleOrderKind = this.handleOrderKind.bind(this);
        this.handleSelectFilter = this.handleSelectFilter.bind(this);
    }

    // 长期医嘱,临时医嘱,出院带药
    handleTimeType(n) {
        this.setState({
            timeType: n
        })
    }

    // 医嘱类型：药品，非药品
    handleOrderKind(n) {
        this.setState({
            orderKind: n
        })
    }

    //日期设定：未停，当日，全部
    handleSelectFilter(n) {
        this.setState({
            selectFilter: n
        })
    }

    render() {
        let { regId } = this.props;
        let showContent = (
            <div>
                <h3 style={titleStyle}>医嘱单</h3>
                <ReportDtAdviceHeader
                    onTimeType={this.handleTimeType}
                    onOrderKind={this.handleOrderKind}
                    onSelectFilter={this.handleSelectFilter}
                />
                <ReportDtAdviceContent
                    timeType={this.state.timeType}
                    orderKind={this.state.orderKind}
                    selectFilter={this.state.selectFilter}
                    regId={regId}
                />
            </div>
        );
        return (
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportDtAdvice;