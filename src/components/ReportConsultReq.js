import React from 'react';
import { contentStyle, content, containerStyle, spanStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Card } from 'material-ui/Card';
import NoResult from './NoResult';
import { getConsultReq } from '../service';

const titleStyle = {
    fontSize: 14,
    float: 'left',
    lineHeight: '1.6',
    margin: '0',
    width: '22%'
};
const cardstyle = {
    padding: '10px'
};
const detailstyle = {
    color: '#999999',
    lineHeight: '2',
    textAlign: 'left',
    marginTop: '6px',
    fontWeight: '500'
};

class ReportConsultReq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '会诊',
            detailHeader:
                <span>
                    <span style={spanStyle}>姓名：</span>
                    <span style={spanStyle}>性别：</span>
                    <span style={spanStyle}>病区：</span>
                    <span style={spanStyle}>床号：</span>
                    <span style={spanStyle}>科室：</span>
                    <span style={spanStyle}>申请时间：</span>
                    <span style={spanStyle}>完成时间：</span>
                    <span style={spanStyle}>状态：</span>
                    <span style={spanStyle}>类型：</span>
                    <span style={spanStyle}>发送时间：</span>
                    <span style={spanStyle}>申请科室：</span>
                    <span style={spanStyle}>申请专业：</span>
                    <span style={spanStyle}>申请医生：</span>
                </span>,
            detailBottom: '',
            opinion: '',
            details: []
        }
    }
    componentDidMount() {
        let sourceType = this.props.sourceType;
        let conId = this.props.requestNo;
        this.updateContent(conId, sourceType);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.requestNo !== nextProps.requestNo) {
            this.updateContent(nextProps.requestNo, nextProps.sourceType)
        }
    }

    updateContent(conId, sourceType) {
        getConsultReq(conId, sourceType)
            .then(data => {
                let reqState = (
                    data[0].ReqState == 0 ? '初始' :
                        data[0].ReqState == 1 ? '已保存' :
                            data[0].ReqState == 2 ? '已签名' :
                                data[0].ReqState == 3 ? '未处理（受邀方）已发送（申请方）' :
                                    data[0].ReqState == 4 ? '处理中' :
                                        data[0].ReqState == 5 ? '已完成' :
                                            data[0].ReqState == 9 ? '已作废' : ''
                )
                let urgent = (
                    data[0].Urgent == 0 ? '普通会诊' :
                        data[0].Urgent == 1 ? '急会诊' : ''
                )
                let conType = (
                    data[0].ConType == 0 ? '普通会诊' :
                        data[0].ConType == 1 ? '全院会诊' :
                            data[0].ConType == 2 ? '院外会诊' :
                                data[0].ConType == 3 ? '联合会诊' : ''
                )
                this.setState({
                    title: data[0].OrderName,
                    detailHeader:
                        <span>
                            <span style={spanStyle}>姓名：{data[0].Name}</span>
                            <span style={spanStyle}>性别：{data[0].Sex}</span>
                            <span style={spanStyle}>病区：{data[0].Ward}</span>
                            <span style={spanStyle}>床号：{data[0].BedCode}</span>
                            <span style={spanStyle}>科室：{data[0].Dept}</span>
                            <span style={spanStyle}>申请时间：{data[0].ReqTime}</span>
                            <span style={spanStyle}>完成时间：{data[0].DoneTime}</span>
                            <span style={spanStyle}>状态：{reqState}</span>
                            <span style={spanStyle}>类型：{conType}</span>
                            <span style={spanStyle}>发送时间：{data[0].SendTime}</span>
                            <span style={spanStyle}>申请科室：{data[0].ReqDept}</span>
                            <span style={spanStyle}>申请专业：{data[0].ReqPro}</span>
                            <span style={spanStyle}>申请医生：{data[0].ReqEmp}</span>
                        </span>,
                    details: data[0].Details
                });

            })
    }

    render() {
        let conContent = this.state.details.map((detail, i) => {
            let state = (
                detail.State == 0 ? '初始' :
                    detail.State == 1 ? '未处理' :
                        detail.State == 2 ? '处理中' :
                            detail.State == 3 ? '已完成' :
                                detail.State == 9 ? '已作废' : ''
            )
            return (
                <div key={i}>
                    <Card containerStyle={containerStyle}>
                        <div style={cardstyle}>
                            <h5 style={titleStyle}>会诊意见:</h5>
                            <div style={content}>
                                {detail.ConOption}
                            </div>
                            <br style={{ 'clear': 'both' }} />
                        </div>
                    </Card>
                    <h5 style={detailstyle}>
                        <span>
                            <span style={spanStyle}>受邀科室：{detail.InvitedDept}</span>
                            <span style={spanStyle}>受邀医生：{detail.InvitedEmp}</span>
                            <span style={spanStyle}>受邀专业：{detail.InvitedPro}</span>
                            <span style={spanStyle}>处理医生：{detail.HandleEmp}</span>
                            <span style={spanStyle}>状态：{state}</span>
                        </span>
                    </h5>
                </div>
            )
        })

        let showContent = (
            true ? (<ReportTitle
                title={this.state.title}
                detailHeader={this.state.detailHeader}
                detailBottom={this.state.detailBottom}
            >
                {conContent}
            </ReportTitle>) : <NoResult />
        );
        return (
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportConsultReq;