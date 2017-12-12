import React from 'react';
import { titleStyle } from '../styles';
import NoResult from './NoResult';

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
    }

    render() {
        let showContent = (
            true ? (
                <div>
                    <h3 style={titleStyle}>护理单</h3>
                    <div style={careContentStyle}>
                        <img src='../../../../images/picCare.jpg' style={imgStyle} />
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