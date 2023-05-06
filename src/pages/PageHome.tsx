import React from 'react';
import { Link } from 'react-router-dom';
import { links } from 'routes/links';

import Box from 'components/layout/Box';
import PopupWelcome from 'view/home/popup_welcome';

import IMG_MAIN_PROFILE from 'assets/imgs/img_page-profile.png';

const PageHome = () => {
  return (
    <main className="home">
      <PopupWelcome />

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
