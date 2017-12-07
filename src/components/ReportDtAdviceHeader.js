import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

class ReportDtAdviceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueA: '长期医嘱',
            valueB:'全部',
            valueC:'全部'
        };
        this.handleChooseA = this.handleChooseA.bind(this);
        this.handleChooseB = this.handleChooseB.bind(this);
        this.handleChooseC = this.handleChooseC.bind(this);
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

    handleChooseC(e){
        this.setState({
            valueC:e.target.textContent
        })
    }

    render() {
        return (
            <Menu widths='three' style={{marginTop:'0'}}>
                <Dropdown text={this.state.valueA} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseA}>长期医嘱</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseA}>临时医嘱</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseA}>出院带药</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.valueB} pointing className='link item' >
                    <Dropdown.Menu>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseB}>药品</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseB}>非药品</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseB}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.valueC} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseC}>当日</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseC}>未停</Dropdown.Item>
                        <Dropdown.Item style={{textAlign:'center'}} onClick={this.handleChooseC}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}

export default ReportDtAdviceHeader;