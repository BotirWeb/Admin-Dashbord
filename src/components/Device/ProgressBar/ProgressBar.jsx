import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="progress-bar-container">
      <div style={{ color: 'rgb(90, 88, 129)' }} className="progress-bar-label">{label}</div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="progress-bar-percentage">{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
