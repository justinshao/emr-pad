import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import { contentStyle } from '../styles';

class ReportDtAdvice extends React.Component{
    render(){
        return(
            <div style={contentStyle}>
                <Card>
                    <CardTitle title="医生姓名" subtitle="doctor name" />
                    <CardText>
                    医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容
                    医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容
                    医嘱内容医嘱内容医嘱内容
                    </CardText>
                </Card>
                <Card>
                    <CardTitle title="医生姓名" subtitle="doctor name" />
                    <CardText>
                    医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容
                    医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容医嘱内容
                    医嘱内容医嘱内容医嘱内容
                    </CardText>
                </Card>
            </div>
        )
        
    }
}

export default ReportDtAdvice;