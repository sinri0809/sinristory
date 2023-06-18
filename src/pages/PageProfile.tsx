import React from 'react';

import { useRecoilState } from 'recoil';
import { skillListState, skillExplainState } from 'store/dashboard.store';


import { SortList, SortItem } from 'components/layout/SortList';

import DashboardItem from 'view/dashboard/dashboard_wrap';
import DashboardTree from 'view/dashboard/dashboard_tree';
import DashboardDiagram from 'view/dashboard/dashboard_diagram';
import DashboardExplain from 'view/dashboard/dashboard_explain';

const PageProfile = () => {
  const [skillExplain, setSkillExplain] = useRecoilState(skillExplainState);
  const [skillList, setSkillList] = useRecoilState(skillListState);
  const depth1 = skillList[0].list;

  const updateExplainState = (text: string) => {
    if (text === "") {
      // return;
    }
    else {
      setSkillExplain(text);
    }
  }

  const updateSkillListState = (item: any, index: number = -1) => {
    if (index === -1) {
      console.log("something error")
      // return;
    }

    const toggleItemExpanded = {
      ...item,
      expanded: !(item.expanded)
    };

    let updateDepth1 = [...depth1];
    updateDepth1[index] = toggleItemExpanded;

    let swapSkillList = [
      {
        ...skillList[0],
        list: [...updateDepth1]
      }
    ]

    setSkillList({
      ...swapSkillList,
    })
  }

  return (
    <main className="profile">
      <section className="dashboard-container">
        <div className="dashboard-wrap">
          <DashboardItem index={0} content="sort-category">
            <SortList>
              <SortItem>UX_develop</SortItem>
              <SortItem>Communication</SortItem>
            </SortList>
          </DashboardItem>
          <DashboardItem
            index={1}
            content="tree"
            role="menu"
            className="dashboard-tree"
          >
            <DashboardTree
              updateExplain={updateExplainState}
              updateSkill={updateSkillListState}
            />
          </DashboardItem>
          <DashboardItem index={2} content="diagram">
            <DashboardDiagram
              updateExplain={updateExplainState}
              updateSkill={updateSkillListState}
            />
          </DashboardItem>
          <DashboardItem index={3} content="explain">
            <DashboardExplain />
          </DashboardItem>
        </div>
      </section>
    </main>
  );
};

export default PageProfile;
