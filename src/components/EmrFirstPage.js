import React from 'react';
import ImageViewer from './ImageViewer';

const viewHeight = document.body.clientHeight;
const contentStyle = {
    'width': '100%',
    'paddingTop': '64px',
    'height': `${viewHeight - 64}px`,
    'overflow': 'auto'
};

class EmrFirstPage extends React.Component {

    render() {
        let id = this.props.requestNo;
        return (
            <div style={contentStyle}>
                <ImageViewer src={`/api/EmrFile?id=${id}`} />
            </div>
        )
    }
}

export default EmrFirstPage;