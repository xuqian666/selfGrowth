import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import option from './mockData'

class LineMarkerEcharts extends Component {
    getOtion() {
        return option;
    }
    render() {
        return (
            <ReactEcharts
                option={this.getOtion()}
                style={{height: '350px', width: '1000px'}}
                className='react_for_echarts' 
            />
        );
    }
};

export default LineMarkerEcharts;