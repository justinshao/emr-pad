import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import { tableHeader, tableContent } from '../styles';

class ReportDtAdviceContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '700px' }} selectable={false} bodyStyle={{ 'minWidth': '700px'}} >
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={tableHeader}>
                            <TableHeaderColumn style={tableHeader} >状态</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >名称</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >嘱托</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >途径</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >频次</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >剂量/次</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >使用数量</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱医生</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >自备</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >生效时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >停嘱时间</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow style={tableContent}>
                            <TableRowColumn style={tableContent}>新增</TableRowColumn>
                            <TableRowColumn style={tableContent}>09-13 19：04</TableRowColumn>
                            <TableRowColumn style={tableContent}>浓氯化钠注射液</TableRowColumn>
                            <TableRowColumn style={tableContent}>餐前</TableRowColumn>
                            <TableRowColumn style={tableContent}>po</TableRowColumn>
                            <TableRowColumn style={tableContent}>bid</TableRowColumn>
                            <TableRowColumn style={tableContent}>0.3g</TableRowColumn>
                            <TableRowColumn style={tableContent}>1粒</TableRowColumn>
                            <TableRowColumn style={tableContent}>管理员</TableRowColumn>
                            <TableRowColumn style={tableContent}>非自备</TableRowColumn>
                            <TableRowColumn style={tableContent}>06-21</TableRowColumn>
                            <TableRowColumn style={tableContent}>06-21</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReportDtAdviceContent;