import React from 'react';
import { contentStyle, titleStyle, tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import NoResult from './NoResult';

const styles = {
    toggle: { maxWidth: 140,backgroundColor:'white'},
    noshow: { display: 'none' }
};

class ReportDiag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialtoggled: true,
            finaltoggled: true,
            supplytoggled: true
        };
        this.handleShowInitialDiag = this.handleShowInitialDiag.bind(this);
        this.handleShowFinalDiag = this.handleShowFinalDiag.bind(this);
        this.handleShowSupplyDiag = this.handleShowSupplyDiag.bind(this);
    }

    // 显示初步诊断信息
    handleShowInitialDiag() {
        this.setState({
            initialtoggled: !this.state.initialtoggled
        })
    }

    // 显示最终诊断信息
    handleShowFinalDiag() {
        this.setState({
            finaltoggled: !this.state.finaltoggled
        })
    }

    // 显示补充诊断信息
    handleShowSupplyDiag() {
        // 点击togglelist表单隐藏
        this.setState({
            supplytoggled: !this.state.supplytoggled
        })
    }

    render() {
        let showContent = (
            true ? (
                <div>
                    <div style={titleStyle}>诊断信息</div>
                    <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '500px' }} bodyStyle={{ 'minWidth': '500px' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
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
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={tableContent} >
                                <TableRowColumn style={tableContent} colSpan='8'>
                                    <Toggle
                                        label="归类：初步诊断"
                                        labelPosition="right"
                                        style={styles.toggle}
                                        labelStyle={styles.toggle}
                                        iconStyle={styles.toggle}
                                        onToggle={this.handleShowInitialDiag}
                                        defaultToggled={this.state.initialtoggled}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow style={this.state.initialtoggled ? tableContent : styles.noshow}>
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
                                <TableRowColumn style={tableContent} colSpan='8' >
                                    <Toggle
                                        label="归类：最后诊断"
                                        labelPosition="right"
                                        style={styles.toggle}
                                        labelStyle={styles.toggle}
                                        iconStyle={styles.toggle}
                                        onToggle={this.handleShowFinalDiag}
                                        defaultToggled={this.state.finaltoggled}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow style={this.state.finaltoggled ? tableContent : styles.noshow}>
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
                                <TableRowColumn style={tableContent} colSpan='8'  >
                                    <Toggle
                                        label="归类：补充诊断"
                                        labelPosition="right"
                                        style={styles.toggle}
                                        labelStyle={styles.toggle}
                                        iconStyle={styles.toggle}
                                        onToggle={this.handleShowSupplyDiag}
                                        defaultToggled={this.state.supplytoggled}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow style={this.state.supplytoggled ? tableContent : styles.noshow}>
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