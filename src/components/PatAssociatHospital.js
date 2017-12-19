import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getRelaInHospital } from '../service';

class PatAssociatHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getRelaInHospital(regId)
            .then(data => this.setState({ data: data }))
    }

    render() {
        let tableRow = this.state.data.map((item, i) => (
            <TableRow style={tableContent} key={i}>
                <TableRowColumn style={tableContent}>{item.VisitNo}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Name}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.BedCode}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Sex}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.BirthDate}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Age}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Relation}</TableRowColumn>
            </TableRow>
        ))

        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '600px' }} selectable={false} bodyStyle={{ 'minWidth': '600px'}}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='7'>关联住院</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader}>住院号</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>姓名</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>床位号</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>性别</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>出生日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>年龄</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>关系</TableHeaderColumn>
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

export default PatAssociatHospital;