import React from 'react';
import { tableHeader, tableContent, tableOutTitle,wrapperStyle } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import CircularProgress from 'material-ui/CircularProgress';
import { getAllergyInfo } from '../service';

class PatAllergy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        let { regId, sourceType } = this.props;
        getAllergyInfo(regId, sourceType)
            .then(data => {
                if(data.length==0){
                    this.setState({loading: false,data: data})
                }else{
                    this.setState({data: data})
                }
            })
    }

    render() {
        let allergyInfo = this.state.data.map((item, i) => (
            <TableRow style={tableContent} key={i}>
                <TableRowColumn style={tableContent}>{item.StartDate}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.IsMed}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Allergen}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Reason}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.Treat}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.InputEmp}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.InputTime}</TableRowColumn>
            </TableRow>
        ));

        let content = (
            this.state.data.length!=0? (
                <div>
                    <div style={{ ...tableHeader, ...tableOutTitle }}>过敏信息</div>
                    <Table style={{ border: '2px solid #f1f1f1', minWidth: '600px' }} selectable={false} bodyStyle={{ 'minWidth': '600px'}} wrapperStyle={wrapperStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
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
                        <TableBody displayRowCheckbox={false} style={{overflowY:'auto'}}>
                            {allergyInfo}
                        </TableBody>
                    </Table>
                </div>
            ) : this.state.loading ? <CircularProgress size={60} thickness={7} style={{display: 'block',margin: '30px auto'}} /> : <NoResult />
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatAllergy;