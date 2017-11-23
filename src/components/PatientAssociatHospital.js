import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatientAssociatHospital extends React.Component {

    render() {
        let content=(
            true? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader } colSpan='7'>关联住院</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader }>住院号</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>姓名</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>床位号</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>性别</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>出生日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>年龄</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader }>关系</TableHeaderColumn>
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

export default PatientAssociatHospital;