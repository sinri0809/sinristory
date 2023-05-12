import React, { useRef, DialogHTMLAttributes } from "react";

import GlobalPortal from "components/container/Portals";

import { List, Item } from "components/layout/List";

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  onClose?: () => void;
  control?: "basic" | "dnd";
}

const BottomSheet = (props: Props) => {
  const { control = "basic"} = {...props};
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const closeDialog = () => {
    if (props.onClose) {
      // props.onClose();
    }
  };

  const onClickBackdrop = (event: React.MouseEvent) => {
    // clicked container not wrap
    if (event.target === event.currentTarget) {
      // closeDialog();
      console.debug("onclick backdrop")
      console.log(event.target)
      if(props.onClose){
        props.onClose();
      } 
    }
  };


  return <GlobalPortal>
    <div
      ref={bottomSheetRef}
      role="dialog"
      aria-labelledby="bottom-sheet"
      className="sheet-container"
      onClick={onClickBackdrop}
    >
      <div className="sheet-wrap">
        <div className="sheet-top">
          {control === "dnd" && <button className="btn btn-sheet-tab"><SliderTip /></button>}
        </div>
        <div className="sheet-content">
          <List>
            <Item>item 1</Item>
            <Item>item 2</Item>
          </List>
        </div>
      </div>
    </div>
  </GlobalPortal>
}

export default BottomSheet;

const SliderTip = () => {
  return <svg width="auto" height="24" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>SLIDER/BOTTOMSHEET/CONTROL</title>
    <rect className="slider-tip" x="140" y="10" width="120" height="4" rx="2" fill="#FF736F"/>
  </svg>
}