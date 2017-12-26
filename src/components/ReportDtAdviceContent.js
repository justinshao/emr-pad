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

const bodyHeight = document.body.clientHeight;

const styles = {
    bodyName: { width: '110px' },
    headerName: { width: '110px' },
    bodyNarrow: { width: '40px' },
    headerNarrow: { width: '40px' },
    wrapperStyle: {
        height: `${bodyHeight}` - 170,
        overflowY: 'hidden'
    },
    circleStyle: {
        display: 'block',
        margin: '30px auto',
        position: 'absolute',
        left: '50%',
        top: '30%',
        transform: 'translateX(-50%)'
    }
}

class ReportDtAdviceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            content: false
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
            .then(data => {
                this.setState({
                    data: data,
                    content: true
                })
            })
    }

    render() {
        let tableRow = this.state.content ? (this.state.data.map(item => {
            let stateColor = { backgroundColor: item.StateColor };
            let rows = item.Details.map((detail, i) => {
                if (i == 0) {
                    return (
                        <TableRow style={tableContent} key={i}>
                            <TableRowColumn style={Object.assign({}, tableContent, stateColor, styles.bodyNarrow)} rowSpan={item.Details.length}>{item.State}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.OrderDate}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyName }}>{detail.Name}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.Told}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }} rowSpan={item.Details.length}>{item.ExeWayCode}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }} rowSpan={item.Details.length}>{item.ExecFreqCode}</TableRowColumn>
                            <TableRowColumn style={tableContent}>{detail.Dose}</TableRowColumn>
                            <TableRowColumn style={tableContent}>{detail.Num}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.OrderDoctor}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }}>{detail.BYO}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.StartTime}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.StopTime}</TableRowColumn>
                        </TableRow>
                    )
                }
                else {
                    return (
                        <TableRow style={tableContent} key={i}>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyName }}>{detail.Name}</TableRowColumn>
                            <TableRowColumn style={tableContent}>{detail.Dose}</TableRowColumn>
                            <TableRowColumn style={tableContent}>{detail.Num}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.bodyNarrow }}>{detail.BYO}</TableRowColumn>
                        </TableRow>
                    )
                }
            });
            return rows;
        })) : ''
        return (
            <div>
                <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '760px' }} selectable={false} bodyStyle={{ 'minWidth': '760px' }} wrapperStyle={styles.wrapperStyle}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={tableHeader}>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerNarrow }} >状态</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱时间</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerName }} >名称</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >嘱托</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.headerNarrow }} >途径</TableHeaderColumn>
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