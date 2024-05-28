import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

import "./Chart.scss";

function Chart({ aspect, title }) {
  //   const data = [
  //     { name: "Jan", Total: 1000 },
  //     { name: "Feb", Total: 1600 },
  //     { name: "Mar", Total: 850 },
  //     { name: "Apr", Total: 1360 },
  //     { name: "May", Total: 999 },
  //     { name: "Jun", Total: 1320 },
  //     { name: "Jul", Total: 1400 },
  //     { name: "Aug", Total: 990 },
  //     { name: "Sep", Total: 1240 },
  //     { name: "Oct", Total: 1550 },
  //     { name: "Nov", Total: 1898 },
  //     { name: "Dec", Total: 1300 },
  //   ];
  const data = [
    {
      name: "Jan",
      uv: 3500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 2500,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 3500,
      amt: 2181,
    },
    {
      name: "Iyu",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Iyu",
      uv: 3490,
      pv: 3600,
      amt: 2100,
    },
    {
      name: "Avg",
      uv: 3000,
      pv: 2300,
      amt: 2500,
    },
    {
      name: "Sen",
      uv: 3100,
      pv: 1400,
      amt: 2310,
    },
    {
      name: "Okt",
      uv: 2900,
      pv: 1500,
      amt: 2500,
    },
    {
      name: "Noy",
      uv: 2780,
      pv: 3708,
      amt: 2100,
    },
    {
      name: "Dek",
      uv: 1990,
      pv: 4500,
      amt: 2881,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "$fff",
            borderRadius: "10px",
            padding: "13px 15px",
            boxShadow: "0px 20px 45px 0px rgb(240, 237, 247)",
          }}
        >
          <p
            style={{
              fontWeight: "700",
              padding: "0",
              margin: "0",
              fontSize: "14px",
              textAlign: "left",
              textTransform: "capitalize",
              color: "rgb(90, 88, 129)",
            }}
          >
            Users
          </p>
          <p
            style={{
              fontWeight: "700",
              padding: "0",
              margin: "0",
              fontSize: "18px",
              textAlign: "left",
              textTransform: "capitalize",
              color: "rgb(90, 88, 129)",
            }}
            className="label"
          >{`${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Chart">
      <div className="chart-top">
        <h2>Performance</h2>
        <p>year</p>
      </div>
      <div className="chart-bottom">
        <div className="chart-item"> current period</div>

        <div style={{ width: "100%" }}>
          {/* Line boxShadow */}
          <svg width={0} height={4}>
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="5px">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="2"
                  floodColor="rgb(86, 59, 255)"
                  floodOpacity="0.16"
                />
              </filter>
            </defs>
          </svg>

          <ResponsiveContainer height="50%" width="100%" aspect={2 / 1}>
            <LineChart
              width={7500}
              height={125}
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
            >
              <XAxis
                strokeWidth={0}
                dataKey="name"
                padding={{ left: 30, right: 30 }}
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                dot={false}
                type="monotone"
                dataKey="pv"
                stroke="#563BFF"
                strokeWidth={"4px"}
                strokeShadow={"2px red"}
                activeDot={{
                  r: 8,
                  stroke: "#563BFF",
                  strokeWidth: 4,
                  fill: "#fff",
                }}
                filter="url(#shadow)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Chart;
