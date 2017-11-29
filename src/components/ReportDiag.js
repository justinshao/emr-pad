import React from 'react';
import { contentStyle, titleStyle, tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import NoResult from './NoResult';

const styles = {
    toggle: { maxWidth:130 }
};

class ReportDiag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleShowInitialDiag = this.handleShowInitialDiag.bind(this);
        this.handleShowFinalDiag = this.handleShowFinalDiag.bind(this);
        this.handleShowSupplyDiag = this.handleShowSupplyDiag.bind(this);
    }

    // 显示初步诊断信息
    handleShowInitialDiag() {

    }

    // 显示最终诊断信息
    handleShowFinalDiag() {

    }

    // 显示补充诊断信息
    handleShowSupplyDiag() {

    }

    render() {
        let showContent = (
            true ? (
                <div>
                    <div style={titleStyle}>诊断信息</div>
                    <Table style={{ 'border': '2px solid #f1f1f1','width':'500px'}} bodyStyle={{'width':'500px','overFlow':'auto'}}  selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{'overFlow':'auto'}}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} >诊断名</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >主诊断</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >确诊</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >传染</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >ICD</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断依据</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        {/* toggle组件实现显示控制 */}
                        <TableBody displayRowCheckbox={false} style={{'overFlow':'auto'}}>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent} colSpan='8'>
                                        <Toggle
                                            label="归类：初步诊断"
                                            labelPosition="right"
                                            style={styles.toggle}
                                            onToggle={this.handleShowInitialDiag}
                                        />
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>慢性肠胃炎</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>否</TableRowColumn>
                                    <TableRowColumn style={tableContent}>K52.909</TableRowColumn>
                                    <TableRowColumn style={tableContent}>赵强</TableRowColumn>
                                    <TableRowColumn style={tableContent}>01-05</TableRowColumn>
                                    <TableRowColumn style={tableContent}></TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}  colSpan='8'>
                                        <Toggle
                                            label="归类：最后诊断"
                                            labelPosition="right"
                                            style={styles.toggle}
                                            onToggle={this.handleShowFinalDiag}
                                        />
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>慢性肠胃炎</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>否</TableRowColumn>
                                    <TableRowColumn style={tableContent}>K52.909</TableRowColumn>
                                    <TableRowColumn style={tableContent}>赵强</TableRowColumn>
                                    <TableRowColumn style={tableContent}>01-05</TableRowColumn>
                                    <TableRowColumn style={tableContent}></TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent} colSpan='8'>
                                        <Toggle
                                            label="归类：补充诊断"
                                            labelPosition="right"
                                            style={styles.toggle}
                                            onToggle={this.handleShowSupplyDiag}
                                        />
                                    </TableRowColumn>
                                </TableRow>
                                <TableRow style={tableContent}>
                                    <TableRowColumn style={tableContent}>慢性肠胃炎</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>是</TableRowColumn>
                                    <TableRowColumn style={tableContent}>否</TableRowColumn>
                                    <TableRowColumn style={tableContent}>K52.909</TableRowColumn>
                                    <TableRowColumn style={tableContent}>赵强</TableRowColumn>
                                    <TableRowColumn style={tableContent}>01-05</TableRowColumn>
                                    <TableRowColumn style={tableContent}></TableRowColumn>
                                </TableRow>
                        </TableBody>
                    </Table>
                </div>
            ) : <NoResult />
        );
        return (
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportDiag;