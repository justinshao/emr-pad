import React from 'react';
import { contentStyle, tableHeader, tableContent } from '../styles';
import ReportTitle from './ReportTitle';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

const divStyle={
    'color':'blue'
}

class ReportLaboratory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '化验报告单标题',
            detailHeader: '姓名： 性别： 年龄： 住院号： 病区： 床号： 样本编号： 样本种类： 科室： 送检人员：',
            detailBottom: '核对时间： 报告时间： 检验者： 审核者： '
        }
        this.handleReportEchars = this.handleReportEchars.bind(this);
    }

    handleReportEchars() {
        if (this.props.onReportEchars) {
            this.props.onReportEchars();
            console.log('1111');
        }
    }

    render() {
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
                                    <TableHeaderColumn style={tableHeader} >检查项目</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >检查结果</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >参考范围</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >单位</TableHeaderColumn>
                                    <TableHeaderColumn style={tableHeader} >趋势图</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>47.5</TableRowColumn>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>g/L</TableRowColumn>
                                    <TableRowColumn style={tableContent}>
                                        <div onClick={this.handleReportEchars} style={divStyle}>趋势图</div>
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>47.5</TableRowColumn>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>g/L</TableRowColumn>
                                    <TableRowColumn style={tableContent}>
                                        <div onClick={this.handleReportEchars} style={divStyle}>趋势图</div>
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>47.5</TableRowColumn>
                                    <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                    <TableRowColumn style={tableContent}>g/L</TableRowColumn>
                                    <TableRowColumn style={tableContent}>
                                        <div onClick={this.handleReportEchars} style={divStyle}>趋势图</div>
                                    </TableRowColumn>
                                </TableRow>
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