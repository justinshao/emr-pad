import React from 'react';
import { contentStyle, titleStyle, tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatientHospital extends React.Component {
    
    render() {
        let content=(
            true? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >账户信息</TableHeaderColumn>
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
            ):<NoResult/>
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatientHospital;