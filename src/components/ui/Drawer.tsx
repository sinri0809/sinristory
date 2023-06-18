import React, { AreaHTMLAttributes } from "react";

import GlobalPortal from "components/container/Portals";

interface Props extends AreaHTMLAttributes<HTMLDivElement> {}

interface DrawerProps extends Props{
  hide: boolean;
  setHide?: ()=>void;
}

const Drawer = (props: DrawerProps) =>{
  return <GlobalPortal>
  <div role='presentation' className='drawer' aria-hidden={props.hide}>
    <aside>
      {props.children}
    </aside>
  </div>
  </GlobalPortal>
}

export default Drawer;