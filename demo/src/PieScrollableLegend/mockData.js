
let data = {
    legendData: ['编码错误', '自测遗漏', '旧有bug', '内部协作', '需求变更', '需求理解偏差', '元数据错误', '样式问题', '基础组件bug'],
    seriesData: [
        {
            name: '编码错误',
            value: 15
        },
        {
            name: '自测遗漏',
            value: 8
        },
        {
            name: '旧有bug',
            value: 5
        },
        {
            name: '内部协作',
            value: 3
        },
        {
            name: '需求变更',
            value: 2
        },
        {
            name: '需求理解偏差',
            value: 2
        },
        {
            name: '元数据错误',
            value: 2
        },
        {
            name: '样式问题',
            value: 7
        },
        {
            name: '基础组件bug',
            value: 6
        }
    ],
    selected: {}
}

let option = {
    title : {
        text: '工作流迭代V2.32',
        subtext: 'bug统计',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,
        selected: data.selected
    },
    series : [
        {
            name: 'bug产生原因',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: data.seriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

export default option