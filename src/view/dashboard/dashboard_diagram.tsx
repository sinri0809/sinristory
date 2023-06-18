import React, { useState } from 'react';

import { useRecoilState } from 'recoil';
import { skillListState } from 'store/dashboard.store';

import DashboardHelp from 'view/dashboard/dashboard_help';
import { DiagramComponent, DiagramContainer } from 'view/dashboard/diagram_wrap';

interface Props {
  updateExplain: (text: string) => void;
  updateSkill: (item: any, index: number) => void;
}

const DashboardDiagram = ({
  updateExplain,
  updateSkill
}: Props) => {
  const [instruction, setInstruction] = useState(true);

  const [skillList, setSkillList] = useRecoilState(skillListState);

  const depth1 = skillList[0].list;

  const onClickDiagramToggle = (item: any, index = -1) => {
    updateExplain(item.explain);
    updateSkill(item, index);
  };

  const renderDepth2Diagram = (list: Array<{ name: string, key: string, explain: string }>) => {
    return <DiagramContainer depth={2}>
      {
        list.map(item => {
          return <DiagramComponent
            key={item.key}
            id={item.key}
            className={`tree-2-${item.key}`}
            onClick={() => updateExplain(item.explain)}
          >
            {item.name}
          </DiagramComponent>
      })}
    </DiagramContainer>
  }

  return (
    <div className="dashboard-diagram">
      <DiagramContainer depth={0}>
        <DiagramComponent 
          aria-expanded={skillList[0].expanded}
          className="tree-0-uxe"
          id={skillList[0].key}
          onClick={()=> {
            setInstruction(false)
            setSkillList([{
              ...skillList[0],
              expanded: !(skillList[0].expanded)
            }])
            updateExplain(skillList[0].explain)
          }}
        >
          <DashboardHelp isVisible={instruction} />
          {skillList[0].name}
        </DiagramComponent>
        {depth1.map((item, index) => {
          return <DiagramContainer depth={1} key={index}>
            <DiagramComponent
              id={`${item.key}`}
              aria-expanded={item.expanded}
              className={`tree-1-${item.key}`}
              onClick={() => onClickDiagramToggle(item, index)}>{item.name}</DiagramComponent>
            {item.list.length !== 0 && renderDepth2Diagram(item.list)}
          </DiagramContainer>
        })}
      </DiagramContainer>
    </div>
  );
};

export default DashboardDiagram;