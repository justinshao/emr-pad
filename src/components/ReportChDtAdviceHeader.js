import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

class ReportChDtAdviceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // （1-长期，2-临时，3-出院带药）
            timeType: '长期医嘱',
            //（0-中药方，1-免煎中药）
            notDecoct: '中药方',
            // （1-未停，2-当日，0-全部）
            selectFilter: '全部'
        };
    }

    //长期医嘱，临时医嘱
    handleTimeType(n, e) {
        this.setState({
            timeType: e.target.textContent
        });
        if (this.props.onTimeType) {
            this.props.onTimeType(n);
        }
    }

    //中药方，免煎中药
    handleNotDecoct(n, e) {
        this.setState({
            notDecoct: e.target.textContent
        });
        if (this.props.onNotDecoct) {
            this.props.onNotDecoct(n);
        }
    }

    //未停，当日，全部
    handleselectFilter(n, e) {
        this.setState({
            selectFilter: e.target.textContent
        })
        if (this.props.onselectFilter) {
            this.props.onselectFilter(n);
        }
    }

    render() {
        return (
            <Menu widths='three'>
                <Dropdown text={this.state.timeType} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleTimeType.bind(this, 1)}>长期医嘱</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleTimeType.bind(this, 2)}>临时医嘱</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.notDecoct} pointing className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleNotDecoct.bind(this, 0)}>中药方</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleNotDecoct.bind(this, 1)}>免煎中药</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown text={this.state.selectFilter} pointing className='link item '>
                    <Dropdown.Menu>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleselectFilter.bind(this, 2)}>当日</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleselectFilter.bind(this, 1)}>未停</Dropdown.Item>
                        <Dropdown.Item style={{ textAlign: 'center' }} onClick={this.handleselectFilter.bind(this, 0)}>全部</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}

export default ReportChDtAdviceHeader;