import React, { AllHTMLAttributes, InputHTMLAttributes } from 'react';

import Icon from 'components/icons/Icon';

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  title?: string;
  category: string;
}

interface CheckboxItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = (props: Props) => {
  return (
    <fieldset className="checkbox-container">
      {props.title ? <Checkbox.Title title={props.title} /> : null}
      <div className="checkbox-list">{props.children}</div>
    </fieldset>
  );
};

Checkbox.Title = ({ title }: { title: string }) => {
  return <legend className="checkbox-title">{title}</legend>;
};

Checkbox.Item = (props: CheckboxItemProps) => {
  return (
    <label htmlFor={props.label} className="checkbox-item">
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        checked={props.checked}
        // aria-checked
        onChange={props.onChange}
      />
      <Icon data="icon-checkbox" name="checkbox" />
      <span className="checkbox-value">{props.label}</span>
    </label>
  );
};

export default Checkbox;
