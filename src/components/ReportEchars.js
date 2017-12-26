import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';

const contentStyle = {
    'width': '90%',
    'height': '400px',
    'paddingTop': '40px',
    'paddingLeft': '5%'
}

class ReportEchars extends React.Component {
    constructor(props) {
        super(props);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack() {
        let { history } = this.props;
        history.goBack();
    }

    componentDidMount() {
        let { title, data } = this.props.match.params;
        let dataArray = [];
        dataArray.push(data);
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            title: {
                text: `${title}-趋势图`,
                left: 'center'
            },
            axisPointer: {
                show: true,
                snap: true
            },
            grid: {
                left: '5%',
                right: '7%',
                bottom: '10%',
                top: '20%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                splitLine: { show: false },
                data: [1]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: title,
                    type: 'line',
                    stack: '结果',
                    data: dataArray
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