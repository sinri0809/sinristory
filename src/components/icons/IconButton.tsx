import React from "react";

import Icon from "./Icon";
import { IconProps } from "./Icon";

interface Props extends IconProps {
  name?: string;
  onClick: () => void; 
  // ref?: 
}

const IconButton = ({data, name="", onClick}: Props) => {
  return <button
    type="button"
    onClick={onClick}
    aria-label={name}
    className={`icon-button ${name}`}
  >
    <Icon data={data} />
  </button>
}

export default IconButton;