import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatAllergy extends React.Component {

    render() {
        let content = (
            true ? (
                <div>
                    <Table style={{ border: '2px solid #f1f1f1',minWidth:'600px'}} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='7'>过敏信息</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>发病日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>药物过敏</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>过敏原</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>过敏原因</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>治疗措施</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>登记人员</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>登记时间</TableHeaderColumn>
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

export default PatAllergy;