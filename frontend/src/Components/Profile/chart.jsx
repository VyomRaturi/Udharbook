import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Amount in multiple of 1000",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgb(255,0,0)",
      borderColor: "rgba(55,55,55)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "aliceblue",
      },
    },
    title: {
      display: true,
      text: "Expense Graph",
      color: "white",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "yellow",
      },
    },
    y: {
      ticks: {
        color: "yellow",
      },
    },
  },
};

function LineChart() {
  return <Line data={data} options={options}/>;
}

export default LineChart;