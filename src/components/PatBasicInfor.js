import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';

class PatBasicInfor extends React.Component {

    render() {
        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='4'>病人信息</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>姓名</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>病案号</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>性别</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>证件号码</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>出生日期</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>手机</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>电话</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>隐私级别</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody stripedRows={true} displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}>居住地址</TableRowColumn>
                                <TableRowColumn style={tableContent} colSpan='3'></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}>名族</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>国籍</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>职业</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>婚姻状况</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>关系人</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>关系人号码</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>关系人关系</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>Email</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>ABO血型</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>RH血型</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>家庭电话</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>单位</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>家庭地址</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                                <TableRowColumn style={tableContent}>单位地址</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
                            </TableRow>
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

export default PatBasicInfor;