import React from 'react';
import { contentStyle, content, containerStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Card } from 'material-ui/Card';
import NoResult from './NoResult';

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
            promptContent: '心肺未见明显阳性X线征象，请结合临床。'
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