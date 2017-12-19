import React from 'react';
import { tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import NoResult from './NoResult';
import { getInHospitalInfo } from '../service';

class PatHospital extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        let { regId } = this.props;
        getInHospitalInfo(regId)
            .then(data => { this.setState({ data: data }) })
    }

    render() {
        // 离院方式(1.医嘱离院/2.医嘱转院/3.医嘱转社区卫生服务机构/乡镇卫生院/4.非医嘱离院/5.死亡/9.其他'
        let outWay = (
            this.state.data.OutWay == 1 ? '医嘱离院' :
                this.state.data.OutWay == 2 ? '医嘱转院' :
                    this.state.data.OutWay == 3 ? '医嘱转社区卫生服务机构/乡镇卫生院' :
                        this.state.data.OutWay == 4 ? '非医嘱离院' :
                            this.state.data.OutWay == 5 ? '死亡' : '其他'
        )
        let content = (
            true ? (
                <div>
                    <Table style={{ 'border': '2px solid #f1f1f1'}} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >住院信息</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>姓名</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Name}</TableRowColumn>
                                <TableRowColumn style={tableContent}>性别</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Sex}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>出生日期</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.BirthDay}</TableRowColumn>
                                <TableRowColumn style={tableContent}>证件号码</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.IdCard}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>住院号</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.VisitNo}</TableRowColumn>
                                <TableRowColumn style={tableContent}>病区</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Ward}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>科室</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Dept}</TableRowColumn>
                                <TableRowColumn style={tableContent}>主治医生</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ChiefDoctor}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>入院时间</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.WardInTime}</TableRowColumn>
                                <TableRowColumn style={tableContent}>住院医生</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ResidentDoctor}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>入院病区</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.InWard}</TableRowColumn>
                                <TableRowColumn style={tableContent}>入院科室</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.InDept}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>住院天数</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.InDays}</TableRowColumn>
                                <TableRowColumn style={tableContent}>费别类型</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.FeeNature}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>医疗证号</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.InsuranceNo}</TableRowColumn>
                                <TableRowColumn style={tableContent}>护理等级</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.CareLevel}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>危重级别</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.EmeLevel}</TableRowColumn>
                                <TableRowColumn style={tableContent}>登记时间</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.RegTime}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>登记人员</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.RegEmp}</TableRowColumn>
                                <TableRowColumn style={tableContent}>登记机构</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.Branch}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>结账时间</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.CheckOutTime}</TableRowColumn>
                                <TableRowColumn style={tableContent}>离院方式</TableRowColumn>
                                <TableRowColumn style={tableContent}>{outWay}</TableRowColumn>
                            </TableRow>
                            <TableRow style={tableContent}>
                                <TableRowColumn style={tableContent}>临床出院时间</TableRowColumn>
                                <TableRowColumn style={tableContent}>{this.state.data.ClnOutTime}</TableRowColumn>
                                <TableRowColumn style={tableContent}></TableRowColumn>
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

export default PatHospital;