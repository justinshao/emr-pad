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
import { getChnOrder } from '../service';

const bodyHeight = document.body.clientHeight;
const styles = {
    widderStyle: {
        width: '90px'
    },
    narrowStyle: {
        width: '40px'
    },
    wrapperStyle: {
        height: `${bodyHeight}` - 185,
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

class ReportChDtAdviceContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            content: false
        }
    }

    componentDidMount() {
        let { regId, timeType, selectFilter, notDecoct } = this.props;
        this.getChnOrderFun(regId, timeType, selectFilter, notDecoct)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            let { regId, timeType, selectFilter, notDecoct } = nextProps;
            this.getChnOrderFun(regId, timeType, selectFilter, notDecoct)
        }
    }

    getChnOrderFun(regId, timeType, selectFilter, notDecoct) {
        getChnOrder(regId, timeType, selectFilter, notDecoct)
            .then(data => {
                this.setState({
                    data: data,
                    content: true
                })
            })
    }

    render() {
        let tableRow = this.state.content ? this.state.data.Orders.map(item => {
            let rows = item.Details.map((detail, i) => {
                if (i == 0) {
                    return (
                        <TableRow style={tableContent} key={i}>
                            <TableRowColumn style={{ ...tableContent, ...styles.narrowStyle, backgroundColor: item.StateColor }} rowSpan={item.Details.length}>{item.State}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.widderStyle }} rowSpan={item.Details.length}>{item.PresNo}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.OrderTime}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.widderStyle }} >{detail.Name}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.narrowStyle }} rowSpan={item.Details.length}>{item.DoseNum}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.narrowStyle }} rowSpan={item.Details.length}>{item.TakeMethod}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.BoidWay}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.IsOwnExp}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.narrowStyle }}>{detail.Num}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.OrderDoctor}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.StartTime}</TableRowColumn>
                            <TableRowColumn style={tableContent} rowSpan={item.Details.length}>{item.Told}</TableRowColumn>
                        </TableRow>
                    )
                } else {
                    return (
                        <TableRow style={tableContent} key={i}>
                            <TableRowColumn style={{ ...tableContent, ...styles.widderStyle }}>{detail.Name}</TableRowColumn>
                            <TableRowColumn style={{ ...tableContent, ...styles.narrowStyle }}>{detail.Num}</TableRowColumn>
                        </TableRow>
                    )
                }
            })
            return rows;
        }) : ''
        return (
            <div>
                <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '700px' }} selectable={false} bodyStyle={{ 'minWidth': '700px' }} wrapperStyle={styles.wrapperStyle}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={tableHeader}>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.narrowStyle }}>状态</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.widderStyle }} >处方号</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱时间</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.widderStyle }} >名称</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.narrowStyle }}>帖数</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.narrowStyle }}>服法</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >煎药方式</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >自费</TableHeaderColumn>
                            <TableHeaderColumn style={{ ...tableHeader, ...styles.narrowStyle }}>数量</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱医生</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >生效时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >嘱托</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} >
                        {tableRow}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReportChDtAdviceContent;