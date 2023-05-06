import React, { useState, HtmlHTMLAttributes } from "react";

interface TooltipContainer extends HtmlHTMLAttributes<HTMLDivElement>{
  index: number;
}

const Tooltip = (props: TooltipContainer) => {
  return <div className="tooltip-container">
    {props.children}
  </div>
}

export default Tooltip;

interface Props extends TooltipContainer {
  tooltipMessage: string;
}

const TooltipDefault = (props: Props) => {
  return <>
  <div 
    className="tooltip-target"
    aria-describedby={`tooltip-${props.index}`}
  >
    {props.children}
  </div>
  <div 
    role="tooltip"
    id={`tooltip-${props.index}`}
    itemType="default"
    className="tooltip-wrap"
  >
    <span className="tooltip-message">{props.tooltipMessage}</span>
  </div>
  </> 
}

const TooltipMouse = (props: Props) => {
  const [tooltipCoordinate, setTooltipCoordinate] = useState([0, 0]);

  return <>
    <div 
      className="tooltip-target"
      aria-describedby={`tooltip-${props.index}`}
      // onMouseLeave={(e:React.MouseEvent) => {
      //   setTooltipCoordinate([0, 0])
      // }}
      onMouseMove={(e:any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const relativeX = Math.floor((x / width) * 100);
        const relativeY = Math.floor((y / height) * 100);
        // console.log(`Relative mouse position: (${relativeX}, ${relativeY})`);

        setTooltipCoordinate([relativeX, relativeY]);
        // setTooltipCoordinate([tooltipCoordinate[0] + e.movementX, tooltipCoordinate[1] + e.movementY])
      }}
    >
      {props.children}
    </div>
    <div 
      id={`tooltip-${props.index}`}
      itemType="mouse"
      className="tooltip-wrap"
      style={{
        transform: `translate(${tooltipCoordinate[0]}%, ${tooltipCoordinate[1]}%)`
        // transform: `translate(${props.coordinateX}%, ${props.coordinateY}%)`
      }}
    >
      <span className="tooltip-message">{props.tooltipMessage}</span>
    </div>
  </> 
}

export { TooltipDefault, TooltipMouse };