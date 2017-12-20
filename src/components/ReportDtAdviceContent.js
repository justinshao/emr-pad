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
import { getInpatOrder } from '../service';

const styles = {
    bodyName: { width: '100px' },
    headerName: { width: '100px' },
    bodyNarrow: { width: '40px' },
    headerNarrow: { width: '40px' }
}

class ReportDtAdviceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let { regId, timeType, selectFilter, orderKind } = this.props;
        this.getInpatOrderFun(regId, timeType, selectFilter, orderKind);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.getInpatOrderFun(nextProps.regId, nextProps.timeType, nextProps.selectFilter, nextProps.orderKind);
        }
    }

    getInpatOrderFun(regId, timeType, selectFilter, orderKind) {
        getInpatOrder(regId, timeType, selectFilter, orderKind)
            .then(data => this.setState({ data: data }))
    }

    render() {
        let tableRow = this.state.data.map(item => {
            let name = item.Details.map((detail,i) => (<div key={i}>{detail.Name}</div>));
            let dose = item.Details.map((detail,i) => (<div key={i}>{detail.Dose}</div>));
            let num = item.Details.map((detail,i) => (<div key={i}>{detail.Num}</div>));
            let byo = item.Details.map((detail,i) => (<div key={i}>{detail.BYO}</div>));
            let stateColor = { backgroundColor: item.StateColor };
            return (
                <TableRow style={tableContent} key={item.OrderNo}>
                    <TableRowColumn style={Object.assign({}, tableContent, stateColor, styles.bodyNarrow)}>{item.State}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.OrderDate}</TableRowColumn>
                    <TableRowColumn style={{ ...tableContent, ...styles.bodyName }}>{name}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.Told}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.ExeWayCode}</TableRowColumn>
                    <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }}>{item.ExecFreqCode}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{dose}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{num}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.OrderDoctor}</TableRowColumn>
                    <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }}>{byo}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.StartTime}</TableRowColumn>
                    <TableRowColumn style={tableContent}>{item.StopTime}</TableRowColumn>
                </TableRow>
            )
        })
        return (
            <div>
                <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '760px' }} selectable={false} bodyStyle={{ 'minWidth': '760px' }} >
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={tableHeader}>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerNarrow }} >状态</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱时间</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerName }} >名称</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >嘱托</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >途径</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerNarrow }} >频次</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >剂量/次</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >使用数量</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱医生</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerNarrow }} >自备</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >生效时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >停嘱时间</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {tableRow}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReportDtAdviceContent;