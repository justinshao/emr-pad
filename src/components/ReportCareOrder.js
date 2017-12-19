import React from 'react';
import { titleStyle } from '../styles';
import NoResult from './NoResult';
import { getNursingImage } from '../service';

const root = '';
const viewHeight = document.body.clientHeight;
const contentStyle = {
    'width': '100%',
    'paddingTop': '64px',
    'height': `${viewHeight - 50}px`,
    'overflow': 'hidden'
};
const careContentStyle = {
    'height': `${viewHeight - 170}px`,
    'overflowY': 'scroll'
};
const imgStyle = {
    'width': '94%',
    'display': 'block',
    'margin': 'auto'
};

class ReportCareOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ''
        }
    }

    componentDidMount() {
        let recordNo = this.props.requestNo;
        this.setState({
            src:getNursingImage(recordNo)
        })
    }

    render() {
        console.log(this.state.src);
        let showContent = (
            true ? (
                <div>
                    <h3 style={titleStyle}>护理单</h3>
                    <div style={careContentStyle}>
                        <img src={this.state.src} style={{width:'99%'}}/>
                    </div>
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

export default ReportCareOrder;