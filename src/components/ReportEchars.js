import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';

const contentStyle={
    'width': '90%',
    'height': '400px',
    'paddingTop':'40px',
    'paddingLeft':'5%'
}

class ReportEchars extends React.Component {
    constructor(props){
        super(props);
        this.handleGoBack=this.handleGoBack.bind(this);
    }

    handleGoBack(){
        let {history}=this.props;
        history.goBack();
    }
    
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: 'xxxxx-趋势图',
                left: 'center'
            },
            grid: {
                left: '5%',
                right: '7%',
                bottom: '10%',
                top:'20%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: {show: false},
                data: ['一', '二', '三', '四']
            },
            yAxis: {
                type: 'value',
                min:0,
                max:1
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[0.1, 0.6]
                }
            ]
        });
    }

    render() {
        return (
            <div id="main" style={contentStyle} onClick={this.handleGoBack}></div>
        )
    }
}

export default ReportEchars;