import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

class ReportDtAdviceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // （1-长期，2-临时，3-出院带药）
            timeType: '长期医嘱',
            // (限制归类医嘱类型(0=全部/1=药品/2=非药品)
            orderKind: '全部',
            // （1-未停，2-当日，0-全部）
            selectFilter: '全部'
        };
    }

    handleTimeType(n, e) {
        this.setState({
            timeType: e.target.textContent
        });
        if (this.props.onTimeType) {
            this.props.onTimeType(n);
        }
    }

    handleOrderKind(n, e) {
        this.setState({
            orderKind: e.target.textContent
        })
        if (this.props.onOrderKind) {
            this.props.onOrderKind(n);
        }
    }

    handleSelectFilter(n, e) {
        this.setState({
            selectFilter: e.target.textContent
        })
        if (this.props.onSelectFilter) {
            this.props.onSelectFilter(n);
        }
    }

    render() {
        return (
            <Menu widths='three' style={{ marginTop: '0' }}>
                <Dropdown text={this.state.timeType} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleTimeType.bind(this, 1)}>长期医嘱</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleTimeType.bind(this, 2)}>临时医嘱</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleTimeType.bind(this, 3)}>出院带药</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.orderKind} pointing className='link item' >
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleOrderKind.bind(this, 1)}>药品</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleOrderKind.bind(this, 2)}>非药品</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleOrderKind.bind(this, 0)}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.selectFilter} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleSelectFilter.bind(this, 2)}>当日</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleSelectFilter.bind(this, 1)}>未停</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleSelectFilter.bind(this, 0)}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}

export default ReportDtAdviceHeader;