import React from "react";

import Popup from "components/layout/Popup";

const PageHome = () => {
  return (
    <main className="home">
      <Popup>
        <div className="popup-home-welcome">
          <Popup.Content>
            <strong className="emoji">️🏄‍♀️</strong>
            <h1>Welcome sinri’s sea !</h1>
            <p>
              I hope you enjoy surfing my UX <br />
              Let’s surfing
            </p>
          </Popup.Content>
          <Popup.Controller>
            버튼
          </Popup.Controller>
        </div>
      </Popup>
    </main>
  );
}

export default PageHome;