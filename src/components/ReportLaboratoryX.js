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
import NoResult from './NoResult';

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
const promptStyle = {
    'fontSize': '14px',
    'color': '#666666',
    'padding': '0',
    'height': '36px',
    'fontWeight': '600'
};

class ReportLaboratory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'X-化验报告单',
            detailHeader: '姓名： 性别： 年龄： 住院号： 病区： 床号： 样本编号： 样本种类： 科室： 送检人员：',
            detailBottom: '核对时间： 报告时间： 检验者： 审核者： '
        }
    }

    render() {
        let showContent = (
            true ? (
                <ReportTitle
                    title={this.state.title}
                    detailHeader={this.state.detailHeader}
                    detailBottom={this.state.detailBottom}
                >
                    <Table>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={promptStyle}>
                                <TableHeaderColumn style={promptStyle}>培养结果：</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={promptStyle}>
                                <TableHeaderColumn style={promptStyle}>用药提示：</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                    </Table>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >序号</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >抗生素</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >MIC/抑菌</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >结果</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >R</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >S</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>1</TableRowColumn>
                                <TableRowColumn style={tableContent}>头孢</TableRowColumn>
                                <TableRowColumn style={tableContent}>>=32</TableRowColumn>
                                <TableRowColumn style={tableContent}>耐药</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </ReportTitle>
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