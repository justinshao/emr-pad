import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getDietOrder } from '../service';

class PatDiet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getDietOrder(regId)
            .then(data => this.setState({ data: data }))
    }

    render() {
        let tableRow = this.state.data.map((item,i) => (
            <TableRow style={tableContent} key={i}>
                <TableRowColumn style={tableContent}>{item.StartDate}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OrderNames}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OrderEmp}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.StopDate}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.StopEmp}</TableRowColumn>
            </TableRow>
        ))
        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '500px' }} selectable={false} bodyStyle={{ 'minWidth': '500px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='5'>饮食医嘱</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>医嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>医嘱内容</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>开嘱医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>停嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>停嘱人员</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {tableRow}
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

export default PatDiet;