import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import { getPersonInfo } from '../service';

class PatBasicInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            content: false
        }
    }

    componentDidMount() {
        let { regId, sourceType } = this.props;
        getPersonInfo(regId, sourceType)
            .then(data => {
                this.setState({
                    data: data,
                    content: true
                })
            })
    }

    render() {
        let content = (
            this.state.content ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader} >
                                <TableHeaderColumn style={tableHeader} colSpan='4'>病人信息</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableHeaderColumn style={tableContent}>姓名</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.Name}</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>病案号</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.MrNo}</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableHeaderColumn style={tableContent}>性别</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.Sex}</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>证件号码</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.IdCard}</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableHeaderColumn style={tableContent}>出生日期</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.BirthDay}</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>手机</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.MobilePhone}</TableHeaderColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableHeaderColumn style={tableContent}>电话</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.TelePhone}</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>隐私级别</TableHeaderColumn>
                                <TableHeaderColumn style={tableContent}>{this.state.data.PrivacyLevel}</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody stripedRows={true} displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}>居住地址</TableRowColumn>
                                <TableRowColumn style={tableContent} colSpan='3'>{this.state.data.Addr}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent}>名族</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Ethnic}</TableRowColumn>
                                <TableRowColumn style={tableContent}>国籍</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Nationality}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>职业</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Profession}</TableRowColumn>
                                <TableRowColumn style={tableContent}>婚姻状况</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Married}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>关系人</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ContactsName}</TableRowColumn>
                                <TableRowColumn style={tableContent}>关系人号码</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ContactsPhone}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>关系人关系</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ContactsType}</TableRowColumn>
                                <TableRowColumn style={tableContent}>Email</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Email}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>ABO血型</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.BloodAbo}</TableRowColumn>
                                <TableRowColumn style={tableContent}>RH血型</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.BloodRh}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>家庭电话</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.FamilyPhone}</TableRowColumn>
                                <TableRowColumn style={tableContent}>单位</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.WorkUnit}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>家庭地址</TableRowColumn>
                                <TableRowColumn style={tableContent} colSpan='3'>{this.state.data.Addr}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>单位地址</TableRowColumn>
                                <TableRowColumn style={tableContent} colSpan='3'>{this.state.data.WorkAddr}</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            ) :<CircularProgress size={60} thickness={7} style={{ display: 'block', margin: '30px auto' }} />
        )
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default PatBasicInfor;