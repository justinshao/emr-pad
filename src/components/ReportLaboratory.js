import React from 'react';
import { contentStyle, tableHeader, tableContent, spanStyle } from '../styles';
import ReportTitle from './ReportTitle';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import 'semantic-ui-css/semantic.css';
import { getAssayRpt } from '../service';

const colorRed = {
    color: 'red'
};
const colorBlue = {
    color: '#2185D0'
};
const tableCont = {
    height: '26px',
    lineHeight: '1.2',
    padding: ' 2px 0',
    textAlign: 'center',
    fontSize: '12px',
    whiteSpace: 'normal',
    textOverflow: 'no',
    wordWrap: 'break-word',
    width: '30px'
};
const headerCont = {
    backgroundColor: 'rgba(0, 188, 212,0.4)',
    height: '30px',
    lineHeight: '1',
    padding: '0',
    fontSize: '13px',
    color: 'white',
    width: '30px'
}

const tableHeader2 = {
    width: '30%'
}

class ReportLaboratory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '化验报告单标题',
            detailHeader: <span>
                <span>姓名：</span>
                <span>性别：</span>
                <span>年龄：</span>
                <span>住院号：</span>
                <span>病区：</span>
                <span>床号：</span>
                <span>样本编号：</span>
                <span>样本种类：</span>
                <span>科室：</span>
                <span>送检人员：</span>
            </span>,
            detailBottom: <span>
                <span>核对时间：</span>
                <span>报告时间：</span>
                <span>检验者：</span>
                <span>审核者：</span>
            </span>,
            details: []
        }
        this.handleReportEchars = this.handleReportEchars.bind(this);
    }

    componentDidMount() {
        let { requestNo, sourceType } = this.props;
        this.getAssayRptFun(requestNo, sourceType)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.requestNo !== nextProps.requestNo) {
            this.getAssayRptFun(nextProps.requestNo, nextProps.sourceType)
        }
    }

    getAssayRptFun(requestNo, sourceType) {
        getAssayRpt(requestNo, sourceType)
            .then(data => this.setState({
                title: '化验报告单标题',
                detailHeader:
                    <span>
                        <span style={spanStyle}>姓名：{data[0].Header.PatientName}</span>
                        <span style={spanStyle}>性别：{data[0].Header.Sex}</span>
                        <span style={spanStyle}>年龄：{data[0].Header.Age}</span>
                        <span style={spanStyle}>住院号：{data[0].Header.VisitNo}</span>
                        <span style={spanStyle}>病区：{data[0].Header.Ward}</span>
                        <span style={spanStyle}>床号：{data[0].Header.BedCode}</span>
                        <span style={spanStyle}>样本编号：{data[0].Header.SampleNumber}</span>
                        <span style={spanStyle}>样本种类：{data[0].Header.SpecType}</span>
                        <span style={spanStyle}>科室：{data[0].Header.Dept}</span>
                        <span style={spanStyle}>送检人员：{data[0].Header.SendEmp}</span>
                    </span>,
                detailBottom:
                    <span>
                        <span style={spanStyle}>核对时间：{data[0].Header.AuditTime}</span>
                        <span style={spanStyle}>报告时间：{data[0].Header.ReportTime}</span>
                        <span style={spanStyle}>检验者：{data[0].Header.EntryEmp}</span>
                        <span style={spanStyle}>审核者：{data[0].Header.AuditEmp}</span>
                    </span>,
                details: data[0].Details
            }))
    }

    handleReportEchars() {
        if (this.props.onReportEchars) {
            this.props.onReportEchars();
        }
    }

    render() {
        let tableRow = this.state.details.map((item, i) => {
            let isNormal = true, isLow = true;
            if (item.ResultState == 'N') {
                isNormal = true;
            } else {
                isNormal = false;
                if (item.ResultState == 'H' || item.ResultState == 'HH') {
                    isLow = false;
                } else {
                    isLow = true;
                }
            }
            return (
                <TableRow style={Object.assign({}, tableContent, isNormal ? {} : isLow ? colorBlue : colorRed)} key={i}>
                    <TableRowColumn style={Object.assign({}, tableContent, tableHeader2)}>{item.Name}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.ResultData}</TableRowColumn>
                    <TableRowColumn style={tableCont}>{item.ResultStateDesc}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.RefRange}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.ResultUnit}</TableRowColumn>
                    <TableRowColumn style={tableContent}>
                        <div onClick={this.handleReportEchars}>
                            {isNormal ? <i className="bar chart icon" /> : isLow ? <i className="blue bar chart icon" /> : <i className="red bar chart icon" />}
                        </div>
                    </TableRowColumn>
                </TableRow>
            )
        })
        let showContent = (
            true ? (
                <div>
                    <ReportTitle
                        title={this.state.title}
                        detailHeader={this.state.detailHeader}
                        detailBottom={this.state.detailBottom}
                    >
                        <Table style={{ 'border': '2px solid #f1f1f1' }} selectable={false}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow style={tableHeader}>
                                    <TableHeaderColumn style={Object.assign({}, tableHeader, tableHeader2)}>检查项目</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >检查结果</TableHeaderColumn>
                                    <TableHeaderColumn style={headerCont} ></TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >参考范围</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >单位</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >趋势图</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {tableRow}
                                {/* <TableRow style={tableContent}>
                                    <TableRowColumn style={Object.assign({}, tableContent, true ? {} : true ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, true ? {} : true ? colorBlue : colorRed)}>47.5</TableRowColumn>
                                    <TableRowColumn style={tableCont}>
                                        {true ? '' : true ? <i className="blue long arrow down icon" /> : <i className="red long arrow up icon" />}
                                    </TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, true ? {} : true ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, true ? {} : true ? colorBlue : colorRed)}>g/L</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, true ? {} : true ? colorBlue : colorRed)}>
                                        <div onClick={this.handleReportEchars}>
                                            {true ? <i className="bar chart icon" /> : true ? <i className="blue bar chart icon" /> : <i className="red bar chart icon" />}
                                        </div>
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : true ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : true ? colorBlue : colorRed)}>47.5</TableRowColumn>
                                    <TableRowColumn style={tableCont}>
                                        {false ? '' : true ? <i className="blue long arrow down icon" /> : <i className="red long arrow up icon" />}
                                    </TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : true ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : true ? colorBlue : colorRed)}>g/L</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : true ? colorBlue : colorRed)}>
                                        <div >
                                            {false ? <i className="bar chart icon" /> : true ? <i className="blue bar chart icon" /> : <i className="red bar chart icon" />}
                                        </div>
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>47.5</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>
                                        {false ? '' : false ? <i className="blue long arrow down icon" /> : <i className="red long arrow up icon" />}
                                    </TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>g/L</TableRowColumn>
                                    <TableRowColumn style={Object.assign({}, tableContent, false ? {} : false ? colorBlue : colorRed)}>
                                        <div>
                                            {false ? <i className="bar chart icon" /> : false ? <i className="blue bar chart icon" /> : <i className="red bar chart icon" />}
                                        </div>
                                    </TableRowColumn>
                                </TableRow> */}
                            </TableBody>
                        </Table>
                    </ReportTitle>
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

export default ReportLaboratory;