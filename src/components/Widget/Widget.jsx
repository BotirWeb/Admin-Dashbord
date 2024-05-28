import React from 'react'
import './Widget.scss'

import w1 from '../images/widget-img/w1.svg'
import w2 from '../images/widget-img/w2.svg'
import w3 from '../images/widget-img/w3.svg'
import w4 from '../images/widget-img/w4.svg'

function Widget() {
  return (
    <div className='widget'>
        <div className="widget-top">
            <div className="widget-blocks">
                <img src={w1} alt="" className='img img1'/>
                <div className="widget-name">Users</div>
                <div className="widget-number">72.6k</div>
                <div className="widget-percentage">+25%</div>
                
            </div>
            <div className="widget-blocks">
                <img src={w2} alt="" className='img img2' />
                <div className="widget-name">Sessions</div>
                <div className="widget-number">87.2k </div>
                <div className="widget-percentage">+47%</div>
                
            </div>
            <div className="widget-blocks">
                <img src={w3} alt="" className='img img3' />
                <div className="widget-name">Bounce Rate</div>
                <div className="widget-number">26.3%</div>
                <div className="widget-percentage">-28%</div>
                
            </div>
            <div className="widget-blocks">
                <img src={w4} alt="" className='img img4'/>
                <div className="widget-name">Session Duration</div>
                <div className="widget-number">2m 18s</div>
                <div className="widget-percentage">+13%</div>
                
            </div>
        </div>
        <div className="widget-bottom">
            <div className="widget-bottom-item">Daily Overview</div>
            <button>export</button>
        </div>
    </div>
  )
}

export default Widget