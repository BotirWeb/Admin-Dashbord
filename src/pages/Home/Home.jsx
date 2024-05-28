import React from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Chart from '../../components/Chart/Chart'
import Featuret from '../../components/Featuret/Featuret';
import Widget from '../../components/Widget/Widget'
import Device from '../../components/Device/Device'
import Status from '../../components/Status/Status'
import Build from '../../components/Builds/Build'



function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="charts">
          <Chart/>
          <Featuret/>
        </div>
        <div className="widgets">
          <Widget/>
          <Device/>
        </div>
        <div className="status-block">
          <Status />
          <Build />
        </div>
      </div>
    </div>
  )
}

export default Home