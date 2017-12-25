import React from 'react';
import { fullContentStyle } from '../styles';
import { Icon } from 'semantic-ui-react';
import ImageViewer from './ImageViewer';

const styles = {
    imgNextStyle: {
        'display': 'block',
        'opacity': '0.6',
        'position': 'absolute',
        'top': '40%',
        'right': '20px'
    },
    imgBeforeStyle: {
        'display': 'block',
        'opacity': '0.6',
        'position': 'absolute',
        'top': '40%',
        'left': '20px'
    }
}

class ReportTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: 1
        }

        this.imgBefore = this.imgBefore.bind(this);
        this.imgNext = this.imgNext.bind(this);
    }

    imgBefore() {
        let week = this.state.week - 1;
        this.setState({
            week: week
        })
    }

    imgNext() {
        let week = this.state.week + 1;
        this.setState({
            week: week
        })
    }

    render() {
        let { regId } = this.props;
        let src = `/api/TemperatureSheetImage?regId=${regId}&week=${this.state.week}`;

        return (
            <div style={fullContentStyle}>
                <ImageViewer src={src} />
                <Icon name='chevron left' style={styles.imgBeforeStyle} size='big' onClick={this.imgBefore} />
                <Icon name='chevron right' style={styles.imgNextStyle} size='big' onClick={this.imgNext} />
            </div>
        )
    }
}

export default ReportTemperature;