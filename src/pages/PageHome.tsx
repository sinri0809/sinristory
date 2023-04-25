import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { links } from 'routes/links';

import Button from 'components/common/Button';
import Popup from 'components/portfolio/Popup';
import Box from 'components/layout/Box';

import IMG_MAIN_PROFILE from 'assets/imgs/img_page-profile.png';

/**
 * TODO:
 * 1. popup은 cookie로 하루동안 안보기 설정하기
 */

const PageHome = () => {
  const testRef = useRef<HTMLSpanElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const onClickAccetp = () => {
    console.log('click accept');
    setPopupOpen(false);
  };
  const test = 0;

  if (0) {
    console.log(true);
  }

  return (
    <main className="home">
      {test && <div>test</div>}
      <div
        className="video"
        // onMouseOver={(e) => {
        //   console.log("mouse on")
        // }}
        // onMouseLeave={(e)=> {
        //   console.log("mouse leave")
        // }}
        onMouseMove={(e: React.MouseEvent) => {
          // console.log(e.currentTarget) // .video
          console.log((e.target as HTMLElement).parentElement);
          // console.log((e.target as HTMLElement).contains(testRef.current))
          console.log(testRef.current?.contains(e.target as HTMLElement));
          // console.log(e)
        }}
      >
        <span ref={testRef} id="this">
          <button>button example</button>
          <strong>dd</strong>
          <p>acac</p>
          dd d
        </span>
        <span id="not-this" style={{ color: 'red' }}>
          not this
        </span>
      </div>
      {popupOpen && (
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
              <Button onClick={onClickAccetp} text="accept" />
            </Popup.Footer>
          </div>
        </Popup>
      )}
      <section className="home-site-index">
        <ol className="site-index-list">
          <li className="site-index-item">
            <Link to={links.profile} className="btn btn-link-profile">
              <Box>
                <Box.Element element="content">
                  <div className="box-top">
                    <h2>
                      /Profile<span className="emoji">🐧</span>
                    </h2>
                    <p>
                      This page, I express myself as a UX Engineer using Diagram
                      & Dashboard.
                    </p>
                  </div>
                  <div className="box-bottom">
                    <strong>You can find</strong>
                    <ul>
                      <li>
                        <p>What I think about UX Engineer</p>
                      </li>
                      <li>
                        <p>How I related with UX Engineer</p>
                      </li>
                    </ul>
                  </div>
                </Box.Element>
                <Box.Element element="img">
                  <img src={IMG_MAIN_PROFILE} alt="page-to-profile" />
                </Box.Element>
              </Box>
            </Link>
          </li>
          <li className="site-index-item">
            <Link to={links.portfolio} className="btn btn-link-portfolio">
              <Box>
                <Box.Element element="content">
                  <div className="box-top">
                    <h2>
                      /Portfolios<span className="emoji">🎧</span>
                    </h2>
                    <p>
                      This page, I prepare UI components based on my careers
                    </p>
                  </div>
                  <div className="box-bottom">
                    <strong>You can find</strong>
                    <ul>
                      <li>
                        <p>How I organize UI components in Web</p>
                      </li>
                    </ul>
                  </div>
                </Box.Element>
                <Box.Element element="img">
                  <div className="icon-portfolio-wrap">
                    <div className="icon-portfolio-1" />
                    <div className="icon-portfolio-2" />
                    <div className="icon-portfolio-3" />
                  </div>
                </Box.Element>
              </Box>
            </Link>
          </li>
          <li className="site-index-item disabled">
            <Link to={links.gallery} className="btn btn-link-gallery">
              <Box>
                <Box.Element element="content">
                  <div className="box-top">
                    <h2>
                      /Gallery<span className="emoji">🍊</span>
                    </h2>
                    <p>My Art area.</p>
                  </div>
                  <div className="box-bottom">
                    <strong>You can find</strong>
                    <ul>
                      <li>
                        <p>Sinri's Art Works.</p>
                      </li>
                    </ul>
                  </div>
                </Box.Element>
                <Box.Element element="img">image</Box.Element>
              </Box>
            </Link>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default PageHome;
