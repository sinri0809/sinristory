import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import Icon, { IconProps } from 'components/icons/Icon';

interface IconButtonProps extends IconProps, ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      value={props.value}
      onClick={props.onClick}
      className={`btn-icon`}
    >
      <Icon data={props.data} name={props.name} />
    </button>
  );
  }
);

export default IconButton;
