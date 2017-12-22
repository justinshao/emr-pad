import React from 'react';
import { tableHeader, tableContent, tableOutTitle,wrapperStyle } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import CircularProgress from 'material-ui/CircularProgress';
import { getRelaInHospital } from '../service';

class PatAssociatHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getRelaInHospital(regId)
            .then(data => {
                if(data.length==0){
                    this.setState({loading: false,data: data})
                }else{
                    this.setState({data: data})
                }
            })
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
            this.state.data.length!=0 ? (
                <div>
                    <div style={{ ...tableHeader, ...tableOutTitle }}>关联住院</div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '600px' }} selectable={false} bodyStyle={{ 'minWidth': '600px' }} wrapperStyle={wrapperStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
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
                        <TableBody displayRowCheckbox={false} style={{overflow:'auto'}}>
                            {tableRow}
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

export default PatAssociatHospital;