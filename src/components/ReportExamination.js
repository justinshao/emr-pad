import React from 'react';
import { contentStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Card } from 'material-ui/Card';
import NoResult from './NoResult';

const titleStyle = {
    'fontSize': 14,
    'float': 'left',
    'lineHeight': '1.6',
    'margin': '0',
    'width': '24%'
};
const content = {
    'float': 'left',
    'fontSize': 14,
    'width': '76%',
    'lineHeight': '1.6',
    'letterSpacing': '2px'
};
const cardstyle = {
    'padding': '10px'
};
const containerStyle = {
    'marginTop': '20px'
}
class ReportExamination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '检查报告单标题',
            detailHeader: '姓名： 性别： 年龄： 病区： 床号： 临床诊断： 检查项目： 报告单号：',
            detailBottom: '报告人： 报告日期： 审核人： 审核日期：',
            showContent: '检查所见内容',
            promptContent: '提示信息内容'
        }
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