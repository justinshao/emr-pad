import React from 'react';
import {tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatientChangeHospital extends React.Component {

    render() {
        let content=(
            true? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader } colSpan='7'>住院变更信息</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader }>记录时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>状态</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>床位</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>护理级别</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>危重级别</TableHeaderColumn>
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
            ):<NoResult/>
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatientChangeHospital;