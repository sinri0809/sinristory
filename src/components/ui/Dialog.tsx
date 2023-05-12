import React, { useRef } from 'react';

import GlobalPortal from 'components/container/Portals';

import IconButton from './IconButton';

interface DialogProps {
  title?: string;
  width?: number;
  height?: number;
  children: React.ReactNode;
  onClose?: () => void;
}

const Dialog = (props: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeDialog = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  const onClickBackdrop = (event: React.MouseEvent) => {
    // clicked container not wrap
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  return (
    <GlobalPortal>
      <div className="dialog-container" onClick={onClickBackdrop}>
        <div
          className="dialog-wrap"
          style={{ width: props.width, height: props.height }}
          ref={dialogRef}
        >
          <div className="dialog-header">
            <h3>{props.title}</h3>
            <IconButton
              onClick={closeDialog}
              data="icon-close"
              name="close-dialog"
            />
          </div>
          {props.children}
        </div>
      </div>
    </GlobalPortal>
  );
};

Dialog.defaultProps = {
  title: '',
  width: 690,
  height: 300,
  onClose: () => {},
};

interface Props {
  children: React.ReactNode;
}

Dialog.Content = ({ children }: Props) => {
  return <div className="dialog-content">{children}</div>;
};

Dialog.Footer = ({ children }: Props) => {
  return <div className="dialog-footer">{children}</div>;
};

export default Dialog;
