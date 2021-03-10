import React, { useEffect } from 'react';
import {LineChart} from 'react-native-chart-kit';
import { Dimensions } from "react-native";

// Chart hook
export const Page=(props:{
    height: number;
    display:any}) => {

  //Parse data and split the dollar sign
const display=[parseInt( props.display.HIGHDAY.split('$').join('')).toFixed(1),
    parseInt(props.display.LOWDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1),
    parseInt(props.display.OPEN24HOUR.split('$').join('').trim().replace(/,/g, ' ')).toFixed(1),
    parseInt(props.display.OPENDAY.split('$').join('').trim().replace(/,/g, '')).toFixed(1)]


// Line chart component
    useEffect(()=>{

    })
    return (
        <LineChart
            data={{
                labels: display,
                datasets: [
                    {
                        data: display.map(value => parseInt(value))
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={props.height}
            xAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16,
                },

            }}
            bezier
            style={{
                marginVertical: 8,
                height:props.height,
                borderRadius: 16
            }}
        />
     )
};



