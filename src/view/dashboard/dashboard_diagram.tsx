import React from 'react';
import { useRecoilState } from 'recoil';
import { skillListState } from 'store/dashboard.store';

import { DiagramComponent, DiagramContainer } from './diagram_wrap';

const DashboardDiagram = () => {
  const [skillList, setSkillList] = useRecoilState(skillListState);
  const depth1 = skillList[0].list;

  const onClickDiagramToggle = (item: any, index = -1) => {
    // FIXME: same with tree func
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

  const renderDepth2Diagram = (list: Array<{ name: string, key: string }>) => {
    return <DiagramContainer depth={2}>
      {list.map(item => {
        return <React.Fragment key={item.key}>
          <DiagramComponent className={`tree-2-${item.key}`}>
            {item.name}
          </DiagramComponent>
        </React.Fragment>
      })}
    </DiagramContainer>
  }

  return (
    <div className="dashboard-diagram">
      <DiagramContainer depth={0}>
        <DiagramComponent aria-expanded className="tree-0-uxe">{skillList[0].name}</DiagramComponent>
        {depth1.map((item, index) => {
          return <React.Fragment key={index}>
            <DiagramContainer depth={1} id={`diagram-depth-1-${item.key}`}>
              <DiagramComponent
                aria-expanded={item.expanded}
                className={`tree-1-${item.key}`}
                onClick={() => onClickDiagramToggle(item, index)}>{item.name}</DiagramComponent>
              {item.list.length !== 0 && renderDepth2Diagram(item.list)}
            </DiagramContainer>
          </React.Fragment>
        })}
      </DiagramContainer>
    </div>
  );
};

export default DashboardDiagram;
