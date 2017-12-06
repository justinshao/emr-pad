import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

class ReportChDtAdviceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueA: '中药方',
            valueB: '全部'
        };
        this.handleChooseA = this.handleChooseA.bind(this);
        this.handleChooseB = this.handleChooseB.bind(this);
    }

    handleChooseA(e){
        this.setState({
            valueA:e.target.textContent
        })
    }

    handleChooseB(e){
        this.setState({
            valueB:e.target.textContent
        })
    }

    render() {
        return (
            <Menu widths='two'>
                <Dropdown text={this.state.valueA} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleChooseA}>中药方</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleChooseA}>免煎中药</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.valueB} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleChooseB}>当日</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleChooseB}>未停</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleChooseB}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}

export default ReportChDtAdviceHeader;