import React from 'react';

import { SortList, SortItem } from 'components/layout/SortList';

import DashboardWrap from 'view/dashboard/dashboard_wrap';
import DashboardTree from 'view/dashboard/dashboard_tree';
import DashboardDiagram from 'view/dashboard/dashboard_diagram';

const PageProfile = () => {
  return (
    <main className="profile">
      <section className="dashboard-container">
        <div className="dashboard-wrap">
          <DashboardWrap index={0} content="sort-category">
            <SortList>
              <SortItem>UI_develop</SortItem>
              <SortItem>UI_test</SortItem>
              <SortItem>UI_maintainence</SortItem>
            </SortList>
          </DashboardWrap>

          <DashboardWrap index={1} content="tree"
            role="menu"
            className="dashboard-tree"
          >
            <DashboardTree />
          </DashboardWrap>

          <DashboardWrap index={2} content="diagram">
            <DashboardDiagram />
          </DashboardWrap>

          <DashboardWrap index={3} content="explain">
            <p>ux engineer is...</p>
          </DashboardWrap>
        </div>
      </section>
    </main>
  );
};

export default PageProfile;
