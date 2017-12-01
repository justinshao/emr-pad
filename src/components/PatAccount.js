import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatAccount extends React.Component {

    render() {
        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >住院账户信息</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>费用总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>预交总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>账户余额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>最低限制余额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>最低催缴金额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>自负总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>已结费用总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>已结自负总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>已结预付总额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>累计欠款金额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>累计补交金额</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            ) : <NoResult />
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatAccount;