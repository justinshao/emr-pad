import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const leftStyle = {
    'float': 'left',
    'width': '33.33%'
};

class ReportDtAdviceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            typeofAdvice: 3,
            status: 3
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }

    handleChange = (event, index, value) => this.setState({ value });
    handleChange2 = (event, index, typeofAdvice) => this.setState({ typeofAdvice });
    handleChange3 = (event, index, status) => this.setState({ status });

    render() {
        return (
            <div>
                <div style={leftStyle}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="长期医嘱" />
                        <MenuItem value={2} primaryText="临时医嘱" />
                        <MenuItem value={3} primaryText="出院带药" />
                    </DropDownMenu>
                </div>
                <div style={leftStyle}>
                    <DropDownMenu value={this.state.typeofAdvice} onChange={this.handleChange2}>
                        <MenuItem value={1} primaryText="药品" />
                        <MenuItem value={2} primaryText="非药品" />
                        <MenuItem value={3} primaryText="全部" />
                    </DropDownMenu>
                </div>
                <div style={leftStyle}>
                    <DropDownMenu value={this.state.status} onChange={this.handleChange3}>
                        <MenuItem value={1} primaryText="当日" />
                        <MenuItem value={2} primaryText="未停" />
                        <MenuItem value={3} primaryText="全部" />
                    </DropDownMenu>
                </div>
                <br style={{ 'clear': 'both' }} />
            </div>
        )
    }
}

export default ReportDtAdviceHeader;