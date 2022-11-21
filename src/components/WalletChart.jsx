import React from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";

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

const WalletChart = () => {
  // Wallet Chart
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        fill: true,
        label: "wallet",
        data: [1000, 7000, 5000, 3000, 5000, 6000, 7000],
        borderColor: "rgb(115, 76, 204)",
        backgroundColor: "rgba(236, 240, 241)",
        pointRadius: 0,
        tension: 0.4,
        display: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="mt-5 h-[200px]" id="line">
      <Line options={options} data={data} />
    </div>
  );
};

export default WalletChart;
