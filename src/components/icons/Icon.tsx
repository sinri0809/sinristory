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
}

const Icon = ({ data }: IconProps) => {
  return <i className={`icon ${data}`}>
    {IconList[data]}
  </i>
}

export type { IconProps };

export default Icon;