import React from 'react';

import GlobalPortal from 'components/container/Portals';

interface Props {
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
}

const Popup = (props: Props) => {
  return (
    <GlobalPortal>
      <div className="popup-container">
        <div
          style={{ width: props.width, height: props.height }}
          className="popup-wrap"
        >
          {props.children}
        </div>
      </div>
    </GlobalPortal>
  );
};

export default Popup;

Popup.defaultProps = {
  width: 'auto',
  height: 'auto',
  onClose: () => {},
};

Popup.Content = ({ children }: Props) => {
  return <div className="popup-content">{children}</div>;
};

Popup.Footer = ({ children }: Props) => {
  return <div className="popup-footer">{children}</div>;
};
