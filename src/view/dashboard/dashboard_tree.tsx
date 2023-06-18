import React from 'react';

import { useRecoilValue } from 'recoil';
import { skillListState } from 'store/dashboard.store';

import { TreeContainer, TreeItem } from 'view/dashboard/diagram_wrap';

interface Props {
  updateExplain: (text: string) => void;
  updateSkill: (item: any, index: number) => void;
}

const DashboardTree = ({
  updateExplain,
  updateSkill
}: Props) => {
  const skillList = useRecoilValue(skillListState);

  const depth1 = skillList[0].list;

  const onClickTreeToggle = (item: any, index = -1) => {
    updateExplain(item.explain);
    updateSkill(item, index);
  };

  const renderDepth2Tree = (list: Array<{ name: string, key: string, explain: string }>) => {
    return <TreeContainer id={""} depth={2}>
      {
        list.map((item, index) => {
          return <TreeItem key={index}>
            <TreeItem.ToggleButton
              category={item.name}
              onClick={() => updateExplain(item.explain)}
            />
          </TreeItem>
        })
      }
    </TreeContainer>
  }

  return <>
    <h2 data-depth={0} className="tree-title">
      {skillList[0].name}
    </h2>
    <TreeContainer id={`list-depth-1-${skillList[0].key}`} depth={1} >
      {
        depth1.map((item, index) => {
          return <TreeItem key={index}>
            <TreeItem.ToggleButton
              id={`list-depth-2-${item.key}`}
              aria-expanded={item.expanded}
              onClick={() => onClickTreeToggle(item, index)}
              category={item.name}
            />
            {item.list.length !== 0 && renderDepth2Tree(item.list)}
          </TreeItem>
        })
      }
    </TreeContainer>
  </>
};

export default DashboardTree;
