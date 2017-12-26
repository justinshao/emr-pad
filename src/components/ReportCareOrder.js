import React from 'react';
import ImageViewer from './ImageViewer';

const viewHeight = document.body.clientHeight;
const contentStyle = {
    'width': '100%',
    'paddingTop': '64px',
    'height': `${viewHeight - 64}px`,
    'overflow': 'auto'
};

class ReportCareOrder extends React.Component {

    render() {
        let recordNo = this.props.requestNo;
        return (
            <div style={contentStyle}>
                <ImageViewer src={`/api/NursingImage?recordNo=${recordNo}`} />
            </div>
        )
    }
}

export default ReportCareOrder;