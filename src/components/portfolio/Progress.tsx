import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

interface Props {
  value: number;
  total: number;
}

const Progress = ({children}: ContainerProps) => {
  return <div className="progress-container">
    {children}
  </div>
}

const ProgressBar = (props: Props) => {
  return <div className="progress-bar-wrap">
    <progress 
      id="progress"
      className="progress-bar"
      value={props.value}
      max={props.total}
      style={{
        width: 300
      }}
    />
  </div>
}

const ProgressInformation = (props: Props) => {
  return <div className="progress-info-wrap">
    <span className="number-now">{props.value}</span>
    <b>&#47;</b>
    <span className="number-total">{props.total}</span>
  </div>
}

export default Progress;
export { ProgressBar, ProgressInformation };