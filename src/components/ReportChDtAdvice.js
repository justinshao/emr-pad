import React from 'react';
import { titleStyle } from '../styles';
import ReportChDtAdviceHeader from './ReportChDtAdviceHeader';
import ReportChDtAdviceContent from './ReportChDtAdviceContent';

const contentStyle = {
    'width': '100%',
    'paddingTop': '64px'
};

class ReportChDtAdvice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // （1-长期，2-临时，3-出院带药）
            timeType: 1,
            //（0-中药方，1-免煎中药）
            notDecoct: 0,
            // （1-未停，2-当日，0-全部）
            selectFilter: 0
        }
        this.handleTimeType = this.handleTimeType.bind(this);
        this.handleNotDecoct = this.handleNotDecoct.bind(this);
        this.handleselectFilter = this.handleselectFilter.bind(this);
    }

    //长期医嘱，临时医嘱
    handleTimeType(n) {
        this.setState({
            timeType: n
        });
    }

    //中药方，免煎中药
    handleNotDecoct(n) {
        this.setState({
            notDecoct: n
        });
    }

    //未停，当日，全部
    handleselectFilter(n) {
        this.setState({
            selectFilter: n
        })
    }

    render() {
        let { regId } = this.props;
        let showContent = (
            <div>
                <h3 style={titleStyle}>中药医嘱单</h3>
                <ReportChDtAdviceHeader
                    onTimeType={this.handleTimeType}
                    onNotDecoct={this.handleNotDecoct}
                    onselectFilter={this.handleselectFilter}
                />
                <ReportChDtAdviceContent
                    timeType={this.state.timeType}
                    notDecoct={this.state.notDecoct}
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

export default ReportChDtAdvice;