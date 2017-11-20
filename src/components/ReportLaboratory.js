import React from 'react';
import { contentStyle } from '../styles';
import ReportTitle from './ReportTitle';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const tableHeader = {
    'backgroundColor': '#f1f1f1',
    'height': '30px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '13px'
};
const tableContent = {
    'height': '26px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '12px'
};

class ReportLaboratory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '化验报告单标题',
            detailHeader: '姓名： 性别： 年龄： 住院号： 病区： 床号： 样本编号： 样本种类： 科室： 送检人员：',
            detailBottom: '核对时间： 报告时间： 检验者： 审核者： '
        }
    }

    render() {
        return (
            <div style={contentStyle}>
                <ReportTitle
                    title={this.state.title}
                    detailHeader={this.state.detailHeader}
                    detailBottom={this.state.detailBottom}>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
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
                                <TableRowColumn style={tableContent}>→</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                <TableRowColumn style={tableContent}>47.5</TableRowColumn>
                                <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                <TableRowColumn style={tableContent}>g/L</TableRowColumn>
                                <TableRowColumn style={tableContent}>→</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                <TableRowColumn style={tableContent}>47.5</TableRowColumn>
                                <TableRowColumn style={tableContent}>总蛋白</TableRowColumn>
                                <TableRowColumn style={tableContent}>g/L</TableRowColumn>
                                <TableRowColumn style={tableContent}>→</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </ReportTitle>
            </div>
        )
    }
}

export default ReportLaboratory;