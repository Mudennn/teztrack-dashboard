import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import Skeleton from './Skeleton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Filler,
  Legend
);



const HistoryChart = () => {
    const {id} = useParams()
    const {response} = useAxios(`coins/bitcoin/market_chart?vs_currency=usd&days=7`)
    console.log(`btc bro`, response)
    
    
    if(!response) {
        return (
          <div className='wrapper-container m-2 md:m-10 p-2 md:p-10 '>
            <Skeleton className='h-72 w-full mb-10'/>
          </div>
        )
    }

    const coinChartData = response.prices.map(value => ({x: value[0], y: value[1].toFixed(2)}))
    
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
      legend: {
      display: false,
      },
    },
    }
    const data ={
      labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
      datasets: [
        {
          fill:true,
          label: id,
          data:coinChartData.map(val => val.y),
          borderColor: "rgb(115, 76, 204)",
          backgroundColor: "rgba(236, 240, 241)",
          pointRadius: 2,
          tension: 0,
          display: false,
        },
      ]
    }
  return (
    <div className="h-[300px]">
      <Line options={options} data={data}  />
    </div>
  )
}

export default HistoryChart