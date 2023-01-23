import React from 'react';

import IconTheme from './IconTheme';
import IconDrawer from './IconDrawer';
import IconDropdown from './IconDropdown';

const IconList = {
  'icon-theme': <IconTheme />,
  'icon-drawer': <IconDrawer />,
  'icon-dropdown': <IconDropdown />
}

interface Props {
  data: keyof typeof IconList;
}

const Icon = ({ data }: Props) => {
  return <i className={`icon ${data}`}>
    {IconList[data]}
  </i>
}

export default Icon;