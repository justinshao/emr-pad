import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const leftStyle = {
    float: 'left',
    padding: '0 10px'
};
const labelStyle = {
    padding: '0 20px 0 2px'
};
const underlineStyle = {
    margin: '-1px 0'
};
const innerDivStyle={
    padding:'0 10px',
    width:'60px'
}

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
            <div style={{ padding: '0 10px' }}>
                <div style={leftStyle}>
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        labelStyle={labelStyle}
                        underlineStyle={underlineStyle}
                        iconStyle={{ padding: '0 0 0 90px' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                    >
                        <MenuItem value={1} primaryText="长期医嘱" innerDivStyle={innerDivStyle}/>
                        <MenuItem value={2} primaryText="临时医嘱" innerDivStyle={innerDivStyle}/>
                        <MenuItem value={3} primaryText="出院带药" innerDivStyle={innerDivStyle}/>
                    </DropDownMenu>
                </div>
                <div style={leftStyle}>
                    <DropDownMenu
                        value={this.state.typeofAdvice}
                        onChange={this.handleChange2}
                        labelStyle={labelStyle}
                        underlineStyle={underlineStyle}
                        iconStyle={{ padding: '0 0 0 50px' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                    >
                        <MenuItem value={1} primaryText="药品"  innerDivStyle={innerDivStyle}/>
                        <MenuItem value={2} primaryText="非药品" innerDivStyle={innerDivStyle}/>
                        <MenuItem value={3} primaryText="全部" innerDivStyle={innerDivStyle}/>
                    </DropDownMenu>
                </div>
                <div style={leftStyle}>
                    <DropDownMenu
                        value={this.state.status}
                        onChange={this.handleChange3}
                        labelStyle={labelStyle}
                        underlineStyle={underlineStyle}
                        iconStyle={{ padding: '0 0 0 50px' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
                    >
                        <MenuItem value={1} primaryText="当日" innerDivStyle={innerDivStyle}/>
                        <MenuItem value={2} primaryText="未停" innerDivStyle={innerDivStyle}/>
                        <MenuItem value={3} primaryText="全部" innerDivStyle={innerDivStyle}/>
                    </DropDownMenu>
                </div>
                <br style={{ 'clear': 'both' }} />
            </div>
        )
    }
}

export default ReportDtAdviceHeader;