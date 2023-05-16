import React, { MeterHTMLAttributes, useEffect, useRef } from "react";
interface Props extends MeterHTMLAttributes<HTMLInputElement>{
}

interface SliderProps extends Props {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
}

const Slider = (props: SliderProps) => {
  const ref = useRef<HTMLOutputElement>(null);

  const animation = () => {
    ref.current?.classList.add('blink')
    setTimeout(() => {
      ref.current?.classList.remove('blink');
    }, 100);
  }

  useEffect(() => {
    animation();
  }, [props.value]);

  return <div className="slider-container temperature">
    <label htmlFor={props.label} className="slider-title">
      value: {props.label}
    </label>
    <div className="slider-output-wrap">
      <output 
        ref={ref}
        id={`${props.label}-value`} 
        className="slider-output"

      >
        {props.value}
      </output>
    </div>
    <div className="slider-input-container">
    
    <input
      type="range"
      id={props.id}
      className="slider-input"
      aria-labelledby={props.label}
      aria-orientation="vertical"
      tabIndex={0}
      aria-valuetext={props["aria-valuetext"]}
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      defaultValue={props.defaultValue}
      min={props.min}
      max={props.max}
      value={props.value}
      step={props.step}
      onChange={props.onChange}
    />
    <div className="slider-input-value-wrap">
      <span
        className="slider-input-value"
        style={{
          width: `${((props.value - props.min) / (props.max - props.min)) * 100}%`,
        }}
      >
        <i className="icon-thumb" />
      </span>
    </div>
  </div>

  <div className="slider-min-max">
    <span>{props.min}</span>
    <span>{props.max}</span>
  </div>
</div>
}

export default Slider;
