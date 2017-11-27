import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const tableHeader = {
    'backgroundColor': 'rgba(0, 188, 212,0.4)',
    'height': '30px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '13px',
    'color': 'white'
};
const tableContent = {
    'height': '26px',
    'lineHeight': '1',
    'padding': '0',
    'textAlign': 'center',
    'fontSize': '12px'
};

class ReportChDtAdviceContent extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <div style={{'overFlow':'hidden'}}>
                <Table style={{ 'border': '2px solid #f1f1f1','width':'700px'}}  selectable={false} bodyStyle={{'width':'700px','overFlow':'auto'}}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow style={tableHeader}>
                            <TableHeaderColumn style={tableHeader} >状态</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >处方号</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >名称</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >帖数</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >服法</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >煎药方式</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >自费</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >使用数量</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >开嘱医生</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >生效时间</TableHeaderColumn>
                            <TableHeaderColumn style={tableHeader} >嘱托</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} >
                        <TableRow style={tableContent}>
                            <TableRowColumn style={tableContent}>新增</TableRowColumn>
                            <TableRowColumn style={tableContent}>220022029220</TableRowColumn>
                            <TableRowColumn style={tableContent}>09-13 19：04</TableRowColumn>
                            <TableRowColumn style={tableContent}>艾叶</TableRowColumn>
                            <TableRowColumn style={tableContent}>1贴</TableRowColumn>
                            <TableRowColumn style={tableContent}></TableRowColumn>
                            <TableRowColumn style={tableContent}>人工煎药</TableRowColumn>
                            <TableRowColumn style={tableContent}>否</TableRowColumn>
                            <TableRowColumn style={tableContent}>1</TableRowColumn>
                            <TableRowColumn style={tableContent}>管理员</TableRowColumn>
                            <TableRowColumn style={tableContent}>06-21</TableRowColumn>
                            <TableRowColumn style={tableContent}></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default ReportChDtAdviceContent;