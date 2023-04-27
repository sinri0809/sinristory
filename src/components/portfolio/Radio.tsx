import React, { AllHTMLAttributes, InputHTMLAttributes } from "react"

import Icon from "components/icons/Icon";

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  title?: string;
  category: string;
}

interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

const Radio = (props: Props) => {
  return <fieldset className="radio-container">
    {props.title ? <Radio.Title title={props.title} /> : null}
    <div className="radio-list">
      {props.children}
    </div>
  </fieldset>
}

Radio.Title = ({ title }: { title :string }) => {
  return <legend className="radio-title">{title}</legend>
}

Radio.Item = (props: RadioItemProps) => {
  return <label htmlFor={props.value} className="radio-item">
    <input 
      id={props.id}
      type="radio" 
      name={props.name}
      value={props.value}
      disabled={props.disabled}
    />
    <Icon data="icon-radio" name="radio" />
    <span className="radio-value">{props.value}</span>
  </label>
}

export default Radio;