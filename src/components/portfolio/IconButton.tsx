import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import Icon, { IconProps } from 'components/icons/Icon';

interface IconButtonProps extends IconProps, ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  toggle?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const { toggle = false, ...rest} = props;
    
    return (
      <button
        ref={ref}
        type="button"
        data-toggle={toggle}
        value={props.value}
        onClick={props.onClick}
        className={`btn-icon ${props.className}`}
        {...rest}
      >
        <Icon data={props.data} name={props.name} />
      </button>
    );
  }
);

export default IconButton;

