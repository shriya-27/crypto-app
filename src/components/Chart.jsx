import React from 'react';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} 
from "chart.js";

ChartJS.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({arr=[],currency,days}) => {
    const prices=[]
    const date=[]

    for(let i=0;i<arr.length;i++){
        if(days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString()) // 24hrs mein time dikhana hai
        else date.push(new Date(arr[i][0]).toLocaleDateString()) // ismein date dikhana hai
        prices.push(arr[i][1]); // since 0th index pr time in milisec ans 1st index prr prices
    }

    const data ={
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data: prices, 
            borderColor: "rgb(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.5)",
        },],
        // dataset(array of objects) bhejna hota hai
    };
  return (
    <Line
        options={{
            responsive: true,
        }}
        data={data}
    />
  );
};

export default Chart