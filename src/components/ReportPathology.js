import React from 'react';
import { contentStyle, content, containerStyle, spanStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Card } from 'material-ui/Card';
import NoResult from './NoResult';
import { getPathlgRpt } from '../service';

const titleStyle = {
    fontSize: 14,
    float: 'left',
    lineHeight: '1.6',
    margin: '0',
    width: '24%'
};
const cardstyle = {
    padding: '10px'
};

class ReportPathology extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '-病理报告单',
            detailHeader:
                <span>
                    <span style={spanStyle}>姓名：</span>
                    <span style={spanStyle}>性别：</span>
                    <span style={spanStyle}>年龄：</span>
                    <span style={spanStyle}>病区：</span>
                    <span style={spanStyle}>床号：</span>
                    <span style={spanStyle}>临床诊断：</span>
                    <span style={spanStyle}>检查项目：</span>
                    <span style={spanStyle}>报告单号：</span>
                </span>,
            detailBottom:
                <span>
                    <span style={spanStyle}>报告人：</span>
                    <span style={spanStyle}>报告日期：</span>
                    <span style={spanStyle}>审核人：</span>
                    <span style={spanStyle}>审核日期：</span>
                </span>,
            showContent: '',
            promptContent: ''
        }
    }

    componentDidMount(){
        this.getPathlgRptFun(this.props.requestNo,this.props.sourceType)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.requestNo!==nextProps.requestNo){
            this.getPathlgRptFun(nextProps.requestNo,nextProps.sourceType)
        }
    }

    getPathlgRptFun(requestNo,sourceType){
        getPathlgRpt(requestNo,sourceType)
        .then(data=>(
            this.setState({
                title: `${data[0].ProjectName}-病理报告单`,
                detailHeader:
                    <span>
                        <span style={spanStyle}>姓名：{data[0].PatientName}</span>
                        <span style={spanStyle}>性别：{data[0].Sex}</span>
                        <span style={spanStyle}>年龄：{data[0].Age}</span>
                        <span style={spanStyle}>病区：{data[0].WardName}</span>
                        <span style={spanStyle}>床号：{data[0].BedCode}</span>
                        <span style={spanStyle}>临床诊断：{data[0].Diag}</span>
                        <span style={spanStyle}>检查项目：{data[0].ProjectName}</span>
                        <span style={spanStyle}>报告单号：{data[0].ReportNo}</span>
                    </span>,
                detailBottom:
                    <span>
                        <span style={spanStyle}>报告人：{data[0].ReportEmpName}</span>
                        <span style={spanStyle}>报告日期：{data[0].ReportTime}</span>
                        <span style={spanStyle}>审核人：{data[0].AuditEmpName}</span>
                        <span style={spanStyle}>审核日期：{data[0].AuditTime}</span>
                    </span>,
                showContent: data[0].Mani,
                promptContent:data[0].Conclusion
            })
        ))
    }



    render() {
        let showContent = (
            true ? (<ReportTitle
                title={this.state.title}
                detailHeader={this.state.detailHeader}
                detailBottom={this.state.detailBottom}
            >
                <Card containerStyle={containerStyle}>
                    <div style={cardstyle}>
                        <h5 style={titleStyle}>检查所见:</h5>
                        <div style={content}>
                            {this.state.showContent}
                        </div>
                        <br style={{ clear: 'both' }} />
                    </div>
                </Card>
                <Card containerStyle={containerStyle}>
                    <div style={cardstyle}>
                        <h5 style={titleStyle}>检查提示:</h5>
                        <div style={content}>
                            {this.state.promptContent}
                        </div>
                        <br style={{ clear: 'both' }} />
                    </div>
                </Card>
            </ReportTitle>) : <NoResult />
        );
        return (
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportPathology;