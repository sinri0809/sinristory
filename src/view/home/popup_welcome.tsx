import React, { useEffect, useState } from 'react';

import { hasCookie, setCookie } from 'tools/cookie';

import Popup from 'components/ui/Popup';
import Button from 'components/ui/Button';
import Checkbox from 'components/ui/Checkbox';

const POPUP_WELCOME_COOKIE = 'sinri_popup_welcome';

const PopupWelcome = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [todayUnchecked, setTodayUnchecked] = useState(false);

  const onClickAccept = () => {
    setPopupOpen(false);
    if (todayUnchecked) {
      setCookie(POPUP_WELCOME_COOKIE, 1);
    }
  };

  const onClickCheckbox = () => {
    setTodayUnchecked(!todayUnchecked)
  }

  useEffect(() => {
    if (hasCookie(POPUP_WELCOME_COOKIE)) {
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
            <Checkbox category='오늘까지'>
              <Checkbox.Item checked={todayUnchecked} onChange={onClickCheckbox} name='오늘까지' label='하루 동안 안보기' />
            </Checkbox>
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
