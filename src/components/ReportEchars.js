import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import { getAssayResultHistory } from '../service';

const contentStyle = {
    width: '100%',
    height: '400px',
    paddingTop: '40px'
}

class ReportEchars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: [],
            values: []
        }
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleGoBack() {
        let { history } = this.props;
        history.goBack();
    }

    componentDidMount() {
        let { regId, sourceType, itemCode, title } = this.props.match.params;
        getAssayResultHistory(regId, sourceType, itemCode)
            .then(data => {
                var myChart = echarts.init(document.getElementById('main'));
                myChart.setOption({
                    title: {
                        text: `${title}-趋势图`,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '3%',
                        bottom: '10%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        splitLine: { show: false },
                        data: data.times,
                        axisLabel: {
                            interval: 0,
                            rotate: 40,
                            margin: 6,
                            textStyle:{
                                color: '#666666'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#6699FF',
                                width: 2
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: { show: true },
                        axisLine: {
                            lineStyle: {
                                color: '#6699FF',
                                width: 2
                            }
                        },
                        axisLabel: {
                            color: '#666666'
                        }
                    },
                    series: [
                        {
                            name: '指标值',
                            type: 'line',
                            data: data.values,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '10',
                                            color: '#999999'
                                        }
                                    }
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: '#FF6600'
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: 'rgba(255,204,204,0.8)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(255,204,204,0.2)'
                                            }
                                        ],
                                        globalCoord: false
                                    }
                                }
                            }
                        }
                    ]
                });
            })
    }

    render() {
        return (
            <div id="main" style={contentStyle} onClick={this.handleGoBack}></div>
        )
    }
}

export default ReportEchars;