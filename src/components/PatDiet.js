import React from 'react';
import { tableHeader, tableContent, tableOutTitle, wrapperStyle } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import CircularProgress from 'material-ui/CircularProgress';
import { getDietOrder } from '../service';

class PatDiet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getDietOrder(regId)
            .then(data => {
                if (data.length == 0) {
                    this.setState({ loading: false, data: data })
                } else {
                    this.setState({ data: data })
                }
            })
    }

    render() {
        let tableRow = this.state.data.map((item, i) => {
            let startDate=item.StartDate.split('T');
            let date=<div><div>{startDate[0]}</div><div>{startDate[1]}</div></div>
            return (
                <TableRow style={tableContent} key={i}>
                    <TableRowColumn style={tableContent}>{date}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.OrderNames}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.OrderEmp}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.StopDate}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.StopEmp}</TableRowColumn>
                </TableRow>
            )
        })
        let content = (
            this.state.data.length != 0 ? (
                <div>
                    <div style={{ ...tableHeader, ...tableOutTitle }}>饮食医嘱</div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '500px' }} selectable={false} bodyStyle={{ 'minWidth': '500px' }} wrapperStyle={wrapperStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>医嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>医嘱内容</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>开嘱医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>停嘱日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>停嘱人员</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} style={{ overflowY: 'auto' }}>
                            {tableRow}
                        </TableBody>
                    </Table>
                </div>
            ) : this.state.loading ? <CircularProgress size={60} thickness={7} style={{ display: 'block', margin: '30px auto' }} /> : <NoResult />
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatDiet;