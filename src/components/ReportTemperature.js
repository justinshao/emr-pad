import React from 'react';
import { titleStyle } from '../styles';
import NoResult from './NoResult';
import { Icon } from 'semantic-ui-react';
import {getTemperatureSheetImage} from '../service';

const viewHeight = document.body.clientHeight;
const contentStyle = {
    'width': '100%',
    'paddingTop': '64px',
    'height': `${viewHeight - 64}px`,
    'overflow': 'hidden'
};
const tempContentStyle = {
    'height': `${viewHeight - 120}px`,
    'overflow': 'scroll',
    'position': 'relative'
};
const imgStyle = {
    'width': '94%',
    'display': 'block',
    'margin': 'auto'
};
const imgNextStyle = {
    'display': 'block',
    'opacity': '0.6',
    'position': 'absolute',
    'top': '40%',
    'right': '20px'
};
const imgBeforeStyle = {
    'display': 'block',
    'opacity': '0.6',
    'position': 'absolute',
    'top': '40%',
    'left': '20px'
};

class ReportTemperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            startX: '',
            startY: '',
            week:1
        }
        this.handleWillChangeImg = this.handleWillChangeImg.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
    }
    
    componentDidMount(){
        let {regId}=this.props;
        let week=this.state.week;
        this.setState({
            src:getTemperatureSheetImage(regId,week)
        })
    }

    handleWillChangeImg(e) {
        e.preventDefault();
        this.setState = {
            startX: e.pageX,
            startY: e.pageY
        }
    }

    handleChangeImg(e) {
        e.preventDefault();
        let moveEndX = e.pageX;
        let moveEndY = e.pageY;
        let X = moveEndX - this.state.startX;
        let Y = moveEndY - this.state.startY;
        if (Math.abs(X) > Math.abs(Y) && X > 0) {
            alert('left to right');
            this.setState = {
                // 改变src
            }
        }
        else if (Math.abs(X) > Math.abs(Y) && X < 0) {
            alert('right to left');
            this.setState = {
                // 改变src
            }
        }
        else {
            alert('else');
        }
    }

    render() {
        let showContent = (
            true ? (
                <div>
                    <h3 style={titleStyle}>体温单</h3>
                    <div style={tempContentStyle} onTouchMove={this.handleChangeImg} onTouchStart={this.handleWillChangeImg}>
                        <Icon name='chevron left' style={imgBeforeStyle} size='big'/>
                        <Icon name='chevron right' style={imgNextStyle} size='big'/>
                        <img src={this.state.src} style={imgStyle} />
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

export default ReportTemperature;