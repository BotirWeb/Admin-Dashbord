import React from 'react'
import './Device.scss'
import ProgressBar from './ProgressBar/ProgressBar'

function Device() {
    const data = [
        { label: "Direct", percentage: 77.28, color: "rgb(86, 59, 255)" },
        { label: "Direct", percentage: 58.44, color: "rgb(255, 112, 73)" },
        { label: "Direct", percentage: 34.28, color: "rgb(32, 201, 151)" },
      ];
  return (
    <div className='device'>
        <div className="device-title">Sessions By Device</div>
        <div className="device-element">
            <div className="device-l">
                <p>Channel</p>
                <p>Traffic (%)</p>
            </div>
            <div className="device-r">Value</div>
        </div>
        <div className="device-prosent">
            {/* <div className="device-end">
                <div className="device-name">Direct</div>
                <div className="device-content color1"></div>
                <div className="device-number">23.28%</div>
            </div>
            <div className="device-end">
                <div className="device-name">Direct</div>
                <div className="device-content color2"></div>
                <div className="device-number">23.28%</div>
            </div>
            <div className="device-end">
                <div className="device-name">Direct</div>
                <div className="device-content color3"></div>
                <div className="device-number">23.28%</div>
            </div> */}
             {data.map((item, index) => (
          <ProgressBar
            key={index}
            label={item.label}
            percentage={item.percentage}
            color={item.color}
          />
        ))}
        </div>
    </div>
  )
}

export default Device