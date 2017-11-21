import React from 'react';
import { titleStyle} from '../styles';

const viewHeight=document.body.clientHeight;
const contentStyle={
    'width': '100%',
    'paddingTop': '64px',
    'height':`${viewHeight-64}px`,
    'overflow':'hidden'
};
const tempContentStyle={
    'height':`${viewHeight-120}px`,
    'overflow':'scroll'
};
const imgStyle={
    'width':'94%',
    'display':'block',
    'margin':'auto'
};

class ReportTemperature extends React.Component {
    constructor(props){
        super(props);
        this.state={
            src:''
        }
    }

    render(){
        return(
            <div style={contentStyle}>
                <div style={titleStyle}>体温单</div>
                <div style={tempContentStyle}>
                    <img src='../../images/picCare.jpg' style={imgStyle}/>
                </div>
            </div>
        )
    }
}

export default ReportTemperature;