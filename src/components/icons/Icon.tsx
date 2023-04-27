import React from 'react';

import IconList from './IconList';

type IconProps = {
  data: keyof typeof IconList;
  name?: string;
}

const Icon = ({ data, name }: IconProps) => {
  return <i aria-label={name} className={`icon ${data}`}>
    {IconList[data]}
  </i>
}

export type { IconProps };

export default Icon;