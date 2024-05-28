import React from 'react'
import './Status.scss'
// import ApexCharts from 'apexcharts'
// import USERS from '../images/widget-img/USERS.svg'
// import GOALS from '../images/widget-img/GOALS.svg'

import ApexChart from './CircleChart/CircleChart'
import ApexChartOrange from './CircleChart/CircleChartOrange'

function Status() {
  return (
    <div className='status'>
        <div className="status-blocks">

            <div className="status-menu">
                <div className="status-item">
                    <h1>5,461 </h1>
                    <p>Today</p>
                </div>
                <div className="statistician1">
                    {/* <img src={USERS} alt="" /> */}
                    <ApexChart />
                </div>
                <div className="status-item">
                    <h1>8,085</h1>
                    <p>Expected</p>
                </div>
            </div>

            <div className="status-menu">
                <div className="status-item">
                    <h1>140</h1>
                    <p>Today</p>
                </div>
                <div className="statistician2">
                    {/* <img src={GOALS} alt="" /> */}
                    <ApexChartOrange />
                </div>
                <div className="status-item">
                    <h1>120</h1>
                    <p>Expected</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Status