import React from 'react';
import { Link } from 'react-router-dom';
import { links } from 'routes/links';

import Box from 'components/layout/Box';
import PopupWelcome from 'view/home/popup_welcome';
import Icon from 'components/icons/Icon';

import IMG_MAIN_PROFILE from 'assets/imgs/img_page-profile.png';

const PageHome = () => {
  return (
    <main className="home">
      <PopupWelcome />
      <section className="home-site-map">
        <ol className="site-map-list">
          <li className="site-map-item">
            <Link to={links.profile} className="btn btn-site-map-item">
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
          <li className="site-map-item">
            <Link to={links.portfolio} className="btn btn-site-map-item">
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
                        <p>How I organize UI components</p>
                      </li>
                    </ul>
                  </div>
                </Box.Element>
                <Box.Element element="img">
                  <Icon data='icon-portfolio' name='포트폴리오 이미지' />
                </Box.Element>
              </Box>
            </Link>
          </li>
          <li className="site-map-item disabled">
            <Link to={links.gallery} className="btn btn-site-map-item">
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
