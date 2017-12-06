import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatRotation extends React.Component {

    render() {
        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1',minWidth:'600px' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='7'>轮转信息</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>原病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>原科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>新病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>新科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>轮转类型</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>操作时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>操作员</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
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

export default PatRotation;