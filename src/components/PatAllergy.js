import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getAllergyInfo } from '../service';

class PatAllergy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        let { regId, sourceType } = this.props;
        getAllergyInfo(regId, sourceType)
            .then(data => {
                this.setState({ data: data })
        });
    }

    render() {
        let allergyInfo = this.state.data.map((item, i) => (
            <TableBody displayRowCheckbox={false} key={i}>
                <TableRow style={tableContent} >
                    <TableRowColumn style={tableContent}>{item.StartDate}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.IsMed}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.Allergen}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.Reason}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.Treat}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.InputEmp}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.InputTime}</TableRowColumn>
                </TableRow>
            </TableBody>
        )
        );

        let content = (
            true ? (
                <div>
                    <Table style={{ border: '2px solid #f1f1f1', minWidth: '600px' }} selectable={false} bodyStyle={{ 'minWidth': '600px'}}>
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
                        {allergyInfo}
                        {/* <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}>{this.state.data[0]}</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableBody> */}
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