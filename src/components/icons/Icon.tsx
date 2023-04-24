import React from 'react';

import IconClose from './IconClose';
import IconTheme from './IconTheme';
import IconDrawer from './IconDrawer';
import IconArrowDown from './IconArrowDown';

const IconList = {
  'icon-close': <IconClose />,
  'icon-theme': <IconTheme />,
  'icon-drawer': <IconDrawer />,
  'icon-arrow-down': <IconArrowDown />
}

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