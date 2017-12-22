import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import { getAccountInfo } from '../service';

class PatAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            content: false
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getAccountInfo(regId)
            .then(data => {
                this.setState({
                    data: data,
                    content: true
                });
            })
    }

    render() {
        let content = (
            this.state.content ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >住院账户信息</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>费用总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].FeeTotal}</TableRowColumn>
                                <TableRowColumn style={tableContent}>预交总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].PrepaidTotal}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>账户余额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].Balance}</TableRowColumn>
                                <TableRowColumn style={tableContent}>最低限制余额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].LeastBalance}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>最低催缴金额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].LeastPrepaid}</TableRowColumn>
                                <TableRowColumn style={tableContent}>自负总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].SelfFeeTotal}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>已结费用总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].CheckoutFee}</TableRowColumn>
                                <TableRowColumn style={tableContent}>已结自负总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].CheckoutSelfFee}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>已结预付总额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].CheckoutPrepaid}</TableRowColumn>
                                <TableRowColumn style={tableContent}>累计欠款金额</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data[0].AccuArre}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>累计补交金额</TableRowColumn>
                                <TableRowColumn style={tableContent} colSpan='3'>{this.state.data[0].AccuPay}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            ) :<CircularProgress size={60} thickness={7} style={{display: 'block',margin: '30px auto'}} />
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatAccount;