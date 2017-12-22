import React from 'react';
import { tableHeader, tableContent ,tableOutTitle,wrapperStyle} from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getInpatChange } from '../service';

const styles={
    wideStyle:{width:'100px'}
}

class PatChangeHospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getInpatChange(regId)
            .then(data => this.setState({ data: data }))
    }
    render() {
        let tableRow = this.state.data.map((item, i) => (
            <TableRow style={tableContent} key={i}>
                <TableRowColumn style={{...tableContent,...styles.wideStyle}}>{item.RecordTime}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.State}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.InWardName}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.DeptName}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.BedName}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.CareLevel}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.EmeLevel}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.ResidentDoctorName}</TableRowColumn>
                <TableRowColumn style={tableContent}>{item.RecordEmpName}</TableRowColumn>
            </TableRow>
        ))
        let content = (
            true ? (
                <div>
                    <div style={{ ...tableHeader, ...tableOutTitle }}>住院变更信息</div>
                    <Table style={{ 'border': '2px solid #f1f1f1', minWidth: '700px' }} selectable={false} bodyStyle={{ 'minWidth': '700px' }} wrapperStyle={wrapperStyle}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={{...tableHeader,...styles.wideStyle}}>记录时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>状态</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>病区</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>科室</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>床位</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>护理级别</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>危重级别</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>住院医师</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader}>记录人员</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} style={{overflowY:'auto'}}>
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

export default PatChangeHospital;