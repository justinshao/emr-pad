import React from 'react';
import { contentStyle, content, containerStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Card } from 'material-ui/Card';
import NoResult from './NoResult';
import { getExamReport } from '../service';

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

class ReportExamination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '检查报告单标题',
            detailHeader: '姓名： 性别： 年龄： 病区： 床号： 临床诊断： 检查项目： 报告单号：',
            detailBottom: '报告人： 报告日期： 审核人： 审核日期：',
            showContent: '胸廓对称，气管居中；两肺纹理清晰，未见明显实质性病灶；双肺门影不大，心影大小形态未见明显异常，两膈面光整，两侧肋膈角锐利。',
            promptContent: '心肺未见明显阳性X线征象，请结合临床。',
            requestNo: props.requestNo,
            sourceType: props.sourceType
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.requestNo !== nextProps.requestNo) {
            console.log(nextProps.requestNo);
            this.updateContent(nextProps.requestNo, nextProps.sourceType)
        }
    }

    updateContent(requestNo, sourceType) {
        getExamReport(requestNo, sourceType)
            .then(data => {
                this.setState({
                    title: `${data[0].ProjectName}- 检查报告单`,
                    detailHeader: `姓名：${data[0].Name} 性别：${data[0].Sex} 年龄：${data[0].Age} 
                                    病区：${data[0].WardName} 床号：${data[0].BedCode} 临床诊断：${data[0].Diag} 
                                    检查项目：${data[0].ProjectName} 报告单号：${data[0].ReportNo}`,
                    detailBottom: `报告人：${data[0].ReportEmpName} 报告日期：${data[0].ReportTime} 审核人：${data[0].AuditEmpName} 审核日期：${data[0].AuditTime}`,
                    showContent: `${data[0].Mani}`,
                    promptContent: `${data[0].Conclusion}`
                });

            })
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
                        <br style={{ 'clear': 'both' }} />
                    </div>
                </Card>
                <Card containerStyle={containerStyle}>
                    <div style={cardstyle}>
                        <h5 style={titleStyle}>检查提示:</h5>
                        <div style={content}>
                            {this.state.promptContent}
                        </div>
                        <br style={{ 'clear': 'both' }} />
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

export default ReportExamination;