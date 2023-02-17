import React from "react";

import GlobalPortal from "components/container/Portals";

interface Props {
  children: React.ReactNode;
}

const Popup = ({ children }: Props) => {
  return <GlobalPortal>
    <div className="popup-container">
      <div className="popup-wrap">
        {children}
      </div>
    </div>
  </GlobalPortal>
}

export default Popup;

Popup.Content = ({ children }: Props) => {
  return <div className="popup-content">
    {children}
  </div>
}

Popup.Controller = ({ children }: Props) => {
  return <div className="popup-footer">
    {children}
  </div>
}