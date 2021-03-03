import { Dimensions, Text, View } from "react-native";
import React from 'react';
import ReactECharts from 'echarts-for-react';
/*
const  baseOption= {

   color: ["#e91e63 ", "#354EF6"],
   title
       :
       {
           subtext: "Data from the Singapore Department of Statistics",
           textAlign
               :
               "left",
           left
               :
               "5%"
       },
   tooltip: {
       backgroundColor: "#555", borderWidth
           :
           0, padding
           :
           10
   },
   legend: {
       data: ["Female", "Male"],
       itemGap
           :
           35,
       itemHeight
           :
           18,
       right
           :
           "11%",
       top
           :
           20
   },
   calculable: true,
   grid
       :
       {
           top: 100,
           bottom
               :
               150,
           tooltip
               :
               {
                   trigger: "axis",
                   axisPointer
                       :
                       {
                           type: "shadow",
                           label
                               :
                               {
                                   show: true,

                               }
                       }
               }
       },
   xAxis: [
       {
           axisLabel: {
               interval: 0,
               rotate: 55,
               textStyle: {
                   baseline: "top",
                   color: "#333",
                   fontSize: 10,
                   fontWeight: "bold"
               }
           },
           axisLine: { lineStyle: { color: "#aaa" }, show: true },
           axisTick: { show: false },
           data: [2, 4, 5, 6, 7, 7, 8, 8],
           splitLine: { show: false },
           type: "category"
       }
   ],
   yAxis
       :
       [
           {
               axisLabel: {
                   textStyle: { fontSize: 10 }
               },
               axisLine: { show: false },
               axisTick: { show: false },
               name: "Population",
               splitLine: {
                   lineStyle: {
                       type: "dotted"
                   }
               },
               type: "value"
           }
       ], series: [{ name: "Female", type: "bar" }, { name: "Male", type: "bar" }]
}
 */
import
    LineChart from 'echarts-for-react';
export const Page=(props:{display:any}) => {

const display=[parseInt( props.display.HIGHDAY.split('$').join('')).toFixed(1),
    parseInt(props.display.LOWDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1),
    parseInt(props.display.OPEN24HOUR.split('$').join('').trim().replace(/,/g, ' ')).toFixed(1),
    parseInt(props.display.OPENDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1)]
    console.log(...display)
    /*
    const options = {
        grid: { top: 0, right: 0, bottom: 0, left: 0 },
        xAxis: {
            axisLabel: {
                interval: 0,
                rotate: 55,

                    baseline: "top",
                    color: "#333",
                    fontSize: 10,

                    fontWeight: "bold"

            },
            axisLine: { lineStyle: { color: "#aaa" }, show: false },
            axisTick: { show: false },
            data: display,
            splitLine: { show: false },
            type: "category"
        },
        yAxis: {
            axisLabel: {
                fontSize: 10,
            },
            data: display,
            axisLine: { show: true },
            axisTick: { show: true },
            name: "Population",
            splitLine: {
                lineStyle: {
                    type: "dotted"
                }
            },
            type: "value"
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
*/
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 8 },
        xAxis: {
            type: 'category',
            data: display,
        },
        yAxis: {
            axisLabel: {
                fontSize: 0,
            },
            data: display,
            axisLine: { show: false },
            axisTick: { show: false},
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

    return <LineChart style={{height:100,paddingBottom:0,paddingLeft:0,width:'100%',}} option={options}/>
};

export default Page;


