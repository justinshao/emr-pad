import React from 'react';
import { contentStyle, titleStyle } from '../styles';
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
    'backgroundColor': 'rgba(0, 188, 212,0.4)',
    'height': '30px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '13px',
    'color': 'white'
};
const tableContent = {
    'height': '26px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '12px'
};

class ReportDiag extends React.Component {
    render() {
        let showContent = (
            true ? (
                <div>
                <div style={titleStyle}>诊断信息</div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >诊断名</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >主诊断</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >确诊</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >传染</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >ICD</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断依据</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>慢性肠胃炎</TableRowColumn>
                                <TableRowColumn style={tableContent}>是</TableRowColumn>
                                <TableRowColumn style={tableContent}>是</TableRowColumn>
                                <TableRowColumn style={tableContent}>否</TableRowColumn>
                                <TableRowColumn style={tableContent}>K52.909</TableRowColumn>
                                <TableRowColumn style={tableContent}>赵强</TableRowColumn>
                                <TableRowColumn style={tableContent}>01-05</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>慢性肠胃炎</TableRowColumn>
                                <TableRowColumn style={tableContent}>是</TableRowColumn>
                                <TableRowColumn style={tableContent}>是</TableRowColumn>
                                <TableRowColumn style={tableContent}>否</TableRowColumn>
                                <TableRowColumn style={tableContent}>K52.909</TableRowColumn>
                                <TableRowColumn style={tableContent}>赵强</TableRowColumn>
                                <TableRowColumn style={tableContent}>01-05</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
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

export default ReportDiag;