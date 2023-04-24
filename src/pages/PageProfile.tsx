import React from 'react';

const PageProfile = () => {
  return (
    <main className="profile">
      <section className="dashboard-container">
        <div className="dashboard-wrap">
          <div
            dashboard-index={0}
            id="dashboard_category"
            className="dashboard-content"
          >
            <ul className="category-btn-list">
              <li className="category-btn-item">
                <button className="btn btn-category">UI_develop</button>
              </li>
              <li className="category-btn-item">
                <button className="btn btn-category">UI_test</button>
              </li>
              <li className="category-btn-item">
                <button className="btn btn-category">communication</button>
              </li>
              <li className="category-btn-item">
                <button className="btn btn-category">prototyping</button>
              </li>
              <li className="category-btn-item">
                <button className="btn btn-category">UI_maintainence</button>
              </li>
            </ul>
          </div>

          <div
            dashboard-index={1}
            id="dashboard_tree"
            className="dashboard-content"
          >
            <h2>UX Engineer</h2>
            <ul className="tree-depth-1">
              <li className="depth-1-item">
                <button className="btn">Develop</button>
                <ul className="tree-depth-2">
                  <li className="depth-2-item">
                    <button className="btn"></button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div
            dashboard-index={2}
            id="dashboard_visualization"
            className="dashboard-content"
          >
            데이터 시각화 장소
          </div>

          <div
            dashboard-index={3}
            id="dashboard_explanation"
            className="dashboard-content"
          >
            <p>ux engineer is...</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageProfile;

interface CategoryProps {
  children: React.ReactElement;
}
const Categorys = ({ children }: CategoryProps) => {
  return <ul className="category-list">{children}</ul>;
};

Categorys.Button = ({ children }: CategoryProps) => {
  return (
    <li className="category-item">
      <button className="btn btn-category"></button>
    </li>
  );
};
