import React from 'react';

import { 
  IconClose,
  IconDayNight,
  IconDrawer,
  IconArrowDown,
  IconLike
 } from './IconList';

const IconList = {
  'icon-close': <IconClose />,
  'icon-theme': <IconDayNight />,
  'icon-drawer': <IconDrawer />,
  'icon-arrow-down': <IconArrowDown />,
  'icon-like': <IconLike />
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