import React from 'react';
import LineChart from 'echarts-for-react';

// Chart hook
export const Page=(props:{
    height: number | string;
    value: [];
    fontSize: number;
    isTick: boolean;
    isLine: boolean;
    category: [];
    bottom: number;
    left: number;
    display:any}) => {

  //Parse data and splite the dollar sign
const display=[parseInt( props.display.HIGHDAY.split('$').join('')).toFixed(1),
    parseInt(props.display.LOWDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1),
    parseInt(props.display.OPEN24HOUR.split('$').join('').trim().replace(/,/g, ' ')).toFixed(1),
    parseInt(props.display.OPENDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1)]


    const options = {
        grid: { top: 8, right: 8, bottom: props.bottom, left: props.left },
        xAxis: {
            type: 'category',
            data: display,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: display,
                type: 'line',
                smooth: true,
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    };

    return <LineChart style={{height: props.height,paddingBottom:0,paddingLeft:0,width:'100%',}} option={options}/>
};

export default Page;


