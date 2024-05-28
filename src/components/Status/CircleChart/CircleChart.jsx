import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 54,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: 90,
        endAngle: -300,

        hollow: {
          size: "20px",
          boxShadow: "rgba(199, 194, 227, 0.67)",
          background: "rgb(239, 236, 255)",
          // margin: 12,
        },
        track: {
          show: true,
          background: "#563BFF",
          strokeWidth: "0%",
          opacity: 1,
          margin: 20,
        },
        dataLabels: {
          name: {
            offsetY: 0,
            color: "rgb(86, 59, 255)",
            fontWeight: 700,
            fontSize: "12px",
          },
          value: {
            show: false,
          },
        },
        cornerRadius: 10,
      },
    },
    stroke: {
      lineCap: "round",
      width: 6,
    },
    labels: ["USERS"],
    colors: ["#563BFF"],
  });

  const [series, setSeries] = useState([70]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default ApexChart;
