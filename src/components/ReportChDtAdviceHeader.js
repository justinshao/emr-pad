import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const leftStyle={
    'float':'left',
    'width':'33.33%'
};

class ReportChDtAdviceHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            typeofAdvice:1,
            status:3
        };
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
    }

    handleChange2 = (event, index, typeofAdvice) => this.setState({typeofAdvice});
    handleChange3 = (event, index, status) => this.setState({status});

    render(){
        return(
            <div>
                <div style={leftStyle}>
                    <DropDownMenu value={this.state.typeofAdvice} onChange={this.handleChange2}>
                        <MenuItem value={1} primaryText="中药方" />
                        <MenuItem value={2} primaryText="免煎中药" />
                    </DropDownMenu>
                </div>
                <div style={leftStyle}>
                    <DropDownMenu value={this.state.status} onChange={this.handleChange3}>
                        <MenuItem value={1} primaryText="当日" />
                        <MenuItem value={2} primaryText="未停" />
                        <MenuItem value={3} primaryText="全部" />
                    </DropDownMenu>
                </div>
                <br style={{'clear':'both'}}/>
            </div>
        )
    }
}

export default ReportChDtAdviceHeader;