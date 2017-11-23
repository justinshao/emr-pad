import React from 'react';
import {tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatientDiet extends React.Component {

    render() {
        let content=(
            true? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader } colSpan='5'>饮食医嘱</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader }>医嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>医嘱内容</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>开嘱医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>停嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>停嘱人员</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            ):<NoResult/>
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatientDiet;