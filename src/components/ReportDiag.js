import React from 'react';
import { contentStyle, titleStyle, tableHeader, tableContent } from '../styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import NoResult from './NoResult';
import { Icon } from 'semantic-ui-react';
import { getDiag } from '../service';

const styles = {
    toggle: { maxWidth: 140, backgroundColor: 'white' },
    noshow: { display: 'none' },
    typeNameStyle: { color: 'rgb(0, 188, 212)', textAlign: 'left', fontWeight: '600' }
};

class ReportDiag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialtoggled: true,
            finaltoggled: true,
            supplytoggled: true,
            data: ''
        };
        this.handleShowInitialDiag = this.handleShowInitialDiag.bind(this);
        this.handleShowFinalDiag = this.handleShowFinalDiag.bind(this);
        this.handleShowSupplyDiag = this.handleShowSupplyDiag.bind(this);
    }

    componentDidMount() {
        let { regId, sourceType } = this.props;
        getDiag(regId, sourceType)
            .then(data => this.setState({ data: data }))
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
        this.setState({
            supplytoggled: !this.state.supplytoggled
        })
    }

    render() {
        //code的格式是[[{},{}],[{}]]
        let code4 = '', code3 = '', code2 = '';
        this.state.data != '' ? this.state.data.Categories.map((item) => {
            function returnContent(typesName, stateName) {
                let c = typesName.map(type => {
                    let typeName =
                        <TableRow style={{ ...(stateName ? tableContent : styles.noshow) }} key={type.Id}>
                            <TableRowColumn style={{ ...tableContent, ...styles.typeNameStyle }} colSpan='9'>
                                <Icon disabled name='check circle outline' color='green' />
                                {type.Name}
                            </TableRowColumn>
                        </TableRow>
                    let typeDiags = type.Diags.map(diag => {
                        return (
                            <TableRow style={stateName ? tableContent : styles.noshow} key={diag.Name}>
                                <TableRowColumn style={tableContent} colSpan='2'>{diag.Name}</TableRowColumn>
                                <TableRowColumn style={tableContent}>
                                    {diag.Primary ? <Icon disabled name='checkmark' color='green' /> : ''}
                                </TableRowColumn>
                                <TableRowColumn style={tableContent}>
                                    {diag.Confirmed ? <Icon disabled name='checkmark' color='green' /> : ''}
                                </TableRowColumn>
                                <TableRowColumn style={tableContent}>
                                    {diag.Contagious ? <Icon disabled name='checkmark' color='green' /> : ''}
                                </TableRowColumn>
                                <TableRowColumn style={tableContent}>{diag.ICD}</TableRowColumn>
                                <TableRowColumn style={tableContent}>{diag.Doctor}</TableRowColumn>
                                <TableRowColumn style={tableContent}>{diag.DiagTime}</TableRowColumn>
                                <TableRowColumn style={tableContent}>{diag.DiagBased}</TableRowColumn>
                            </TableRow>
                        )
                    })
                    typeDiags.unshift(typeName);
                    return typeDiags;
                })
                return c
            }
            if (item.Code == 4) {
                let stateName = this.state.initialtoggled;
                code4 = returnContent(item.Types, stateName);
            }
            if (item.Code == 3) {
                let stateName = this.state.finaltoggled;
                code3 = returnContent(item.Types, stateName);
            }
            if (item.Code == 2) {
                let stateName = this.state.supplytoggled;
                code2 = returnContent(item.Types, stateName);
            }
        }) : ''
        for (let i = 1; i < code4.length; i++) {
            code4[0] = code4[0].concat(code4[i]);
        }
        for (let i = 1; i < code3.length; i++) {
            code3[0] = code3[0].concat(code3[i]);
        }
        for (let i = 1; i < code2.length; i++) {
            code2[0] = code2[0].concat(code2[i]);
        }

        //渲染内容
        let showContent = (
            true ? (
                <div>
                    <h3 style={titleStyle}>诊断信息</h3>
                    <Table style={{ 'border': '2px solid #f1f1f1', 'minWidth': '560px' }} bodyStyle={{ 'minWidth': '560px' }} selectable={false}>
                        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                            <TableRow style={tableHeader}>
                                <TableHeaderColumn style={tableHeader} colSpan='2'>诊断名</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >主诊断</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >确诊</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >传染</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >ICD</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断医生</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断时间</TableHeaderColumn>
                                <TableHeaderColumn style={tableHeader} >诊断依据</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {
                                code4 != '' ? (<TableRow style={tableContent} >
                                    <TableRowColumn style={tableContent} colSpan='9'>
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
                                </TableRow>) : ''
                            }
                            {code4[0]}
                            {
                                code3 != '' ? (
                                    <TableRow style={tableContent}>
                                        <TableRowColumn style={tableContent} colSpan='9' >
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
                                ) : ''
                            }
                            {code3[0]}
                            {
                                code2 ? (
                                    <TableRow style={tableContent}>
                                        <TableRowColumn style={tableContent} colSpan='9'  >
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
                                ) : ''
                            }
                            {code2[0]}
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