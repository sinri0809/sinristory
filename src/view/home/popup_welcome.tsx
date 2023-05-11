import React, { useEffect, useState } from 'react';

import { hasCookie, setCookie } from 'tools/cookie';

import Popup from 'components/ui/Popup';
import Button from 'components/ui/Button';

const PopupWelcome = () => {
  const popupCookieName = 'sinri_popup_welcome';

  const [popupOpen, setPopupOpen] = useState(false);

  const onClickAccept = () => {
    setCookie(popupCookieName, 1);
    setPopupOpen(false);
  };

  useEffect(() => {
    if (hasCookie(popupCookieName)) {
      setPopupOpen(false);
    } else {
      setPopupOpen(true);
    }
  }, []);

  if (popupOpen) {
    return (
      <Popup>
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
            <Button color="accent" onClick={onClickAccept} text="accept" />
          </Popup.Footer>
        </div>
      </Popup>
    );
  } else {
    return null;
  }
};

export default PopupWelcome;
