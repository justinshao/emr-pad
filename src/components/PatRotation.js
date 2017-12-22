import React from 'react';
import { tableHeader, tableContent,tableOutTitle,wrapperStyle} from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getInpatTurn } from '../service';

class PatRotation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getInpatTurn(regId)
            .then(data => this.setState({ data: data }))
    }

    render() {
        let tableRow = this.state.data.map((item, i) => (
            <TableRow style={tableContent} key={i}>
                <TableRowColumn style={tableContent}>{item.OldWard}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OldDept}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.NewWard}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.NewDept}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.TurnType}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OperTime}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OperEmp}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.OrderNo}</TableRowColumn>
            </TableRow>
        ))
        let content = (
            true ? (
                <div>
                    <div style={{ ...tableHeader, ...tableOutTitle }}>轮转信息</div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '600px' }} selectable={false} bodyStyle={{ 'minWidth': '600px'}} wrapperStyle={wrapperStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>原病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>原科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>新病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>新科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>轮转类型</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>操作时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>操作员</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>医嘱号</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} style={{overflow:'auto'}}>
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

export default PatRotation;