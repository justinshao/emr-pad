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

class ReportPathology extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '病理报告单标题',
            detailHeader: '姓名： 性别： 年龄： 病区： 床号： 临床诊断： 检查项目： 报告单号：',
            detailBottom: '报告人： 报告日期： 审核人： 审核日期：',
            showContent: '检查所见',
            promptContent: '(子宫肌瘤)子宫平滑肌瘤，破碎条索状组织一堆总体积8.0cm*8.0cm*2.5cm。（子宫腺肌瘤）符合子宫腺肌瘤，碎组织总体积3.0cm*2.0cm*1.5cm。'
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