import React from 'react';
import { useRecoilState } from 'recoil';

import { skillListState } from 'store/dashboard.store';

import { TreeContainer, TreeItem } from './diagram_wrap';

const DashboardTree = () => {
  const [skillList, setSkillList] = useRecoilState(skillListState);
  const depth1 = skillList[0].list;

  const onClickTreeToggle = (item: any, index = -1) => {
    if (index === -1) {
      console.log("something error")
      return;
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
  };

  const renderDepth2Tree = (list: Array<{ name: string, key: string }>) => {
    return <TreeContainer id={""} depth={2}>
      {
        list.map((item, index) => {
          return <React.Fragment key={index}>
            <TreeItem>
              <TreeItem.ToggleButton category={item.name} />
            </TreeItem>
          </React.Fragment>
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
          return <React.Fragment key={index}>
            <TreeItem>
              <TreeItem.ToggleButton
                id={`list-depth-2-${item.key}`}
                aria-expanded={item.expanded}
                onClick={() => onClickTreeToggle(item, index)}
                category={item.name}
              />
              {item.list.length !== 0 && renderDepth2Tree(item.list)}
            </TreeItem>
          </React.Fragment>
        })
      }
    </TreeContainer>
  </>
};

export default DashboardTree;
