import React, { useEffect, useState } from "react";

/**
 * TODO:
 * 1. popup은 cookie로 하루동안 안보기 설정하기
 */

import Popup from "components/ui/Popup";
import Button from "components/ui/Button";

const PopupWelcome = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const onClickAccept = () => {
    setPopupOpen(false);
  };

  useEffect(() => {

  })

  if (popupOpen) {
    return <Popup>
      <div className="popup-home-welcome">
        <Popup.Content>
          <strong className="emoji">️🏄‍♀️</strong>
          <h1>Welcome sinri&#39;s sea !</h1>
          <p>
            I hope you enjoy surfing my UX <br />
            Let&#39;s surfing
          </p>
        </Popup.Content>
        <Popup.Footer>
          <Button onClick={onClickAccept} text="accept" />
        </Popup.Footer>
      </div>
    </Popup>
  } else {
    return null;
  }
}

export default PopupWelcome;