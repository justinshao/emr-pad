import React from 'react';
import { titleStyle} from '../styles';
import NoResult from './NoResult';

const viewHeight=document.body.clientHeight;
const contentStyle={
    'width': '100%',
    'paddingTop': '64px',
    'height':`${viewHeight-64}px`,
    'overflow':'hidden'
};
const tempContentStyle={
    'height':`${viewHeight-120}px`,
    'overflow':'scroll',
    'position':'relative'
};
const imgStyle={
    'width':'94%',
    'display':'block',
    'margin':'auto'
};
const imgNextStyle={
    'display':'block',
    'opacity':'0.6',
    'position':'absolute',
    'top':'40%',
    'right':'20px'
};
const imgBeforeStyle={
    'display':'block',
    'opacity':'0.6',
    'position':'absolute',
    'top':'40%',
    'left':'20px'
};

class ReportTemperature extends React.Component {
    constructor(props){
        super(props);
        this.state={
            src:'../../../images/before.png',
            startX:'',
            startY:''
        }
        this.handleWillChangeImg=this.handleWillChangeImg.bind(this);
        this.handleChangeImg=this.handleChangeImg.bind(this);
    }

    handleWillChangeImg(e){
        e.preventDefault();
        this.setState={
            startX :e.pageX,
            startY :e.pageY
        }
    }

    handleChangeImg(e){
        e.preventDefault();
        let moveEndX = e.pageX;
        let moveEndY = e.pageY;
        let X = moveEndX - this.state.startX;
        let Y = moveEndY - this.state.startY;
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
            alert('left to right');
            this.setState={
                // 改变src
            }
        }
        else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
            alert('right to left');
            this.setState={
                // 改变src
            }
        }
        else{
            alert('else');
        }
    }

    render(){
        let showContent = (
            true ? (
                <div>
                    <div style={titleStyle}>体温单</div>
                    <div style={tempContentStyle} onTouchMove={this.handleChangeImg} onTouchStart={this.handleWillChangeImg}>
                        <img src='../../../images/picTemp.jpg' style={imgStyle}/>
                        <img src={this.state.src} style={imgBeforeStyle}/>
                        <img src='../../../images/next.png' style={imgNextStyle}/>
                    </div>
                </div>
            ) : <NoResult />
        );
        return(
            <div style={contentStyle}>
                {showContent}
            </div>
        )
    }
}

export default ReportTemperature;