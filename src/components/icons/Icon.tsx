import React from 'react';

import IconTheme from './IconTheme';
import IconDrawer from './IconDrawer';
import IconDropdown from './IconDropdown';

const IconList = {
  'icon-theme': <IconTheme />,
  'icon-drawer': <IconDrawer />,
  'icon-dropdown': <IconDropdown />
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