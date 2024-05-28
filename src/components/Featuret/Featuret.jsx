import React from 'react'
import './Featuret.scss'
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

// Diagramma uchun ma'lumotlar
const data = [
    {
      name: "Desktop",
      uv: 13,
      pv: 8085,
      fill: "rgb(32, 201, 151)",
    },
    {
      name: "Mobile",
      uv: 25,
      pv: 8085,
      fill: "rgb(255, 112, 73)",
    },
    {
      name: "Tablets",
      uv: 30,
      pv: 8085,
      fill: "rgb(86, 59, 255)",
    },
  ];
  
  // Formatter funksiyasi
  const formatLegend = (value, entry, index) => {
    return (
      <span style={{ color: entry.fill }}>
        {value} ({entry.uv}%)
      </span>
    );
  };

function Featuret() {
  return (
    <div className='featured'>
        <div className="featured-top">
            <h2>Sessions By Device</h2>
            <p>year</p>
        </div>
        <div className="featured-bottom">
            <div className="featured-left">
                <RadialBarChart
                        width={250}
                        height={300}
                        cx={100}
                        cy={150}
                        innerRadius={20}
                        outerRadius={120}
                        barSize={10}
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                    >
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        cornerRadius={10}
                        dataKey="uv"
                    />
                    <Tooltip />
                </RadialBarChart>
            </div>
            <div className="featured-right">
                <div className="featured-block">
                    <div className="featured-item">Desktop </div>
                    <div className="featured-number">8,085<span>13%</span></div>
                </div>
                <div className="featured-block">
                    <div className="featured-item">Mobile  </div>
                    <div className="featured-number">8,085<span>30%</span></div>
                </div>
                <div className="featured-block">
                    <div className="featured-item">Tablets  </div>
                    <div className="featured-number">8,085<span>25%</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featuret