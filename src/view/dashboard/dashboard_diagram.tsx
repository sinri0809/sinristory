import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { skillListState } from 'store/dashboard.store';
import { isPhone } from 'tools/devices';

import { DiagramComponent, DiagramContainer } from './diagram_wrap';
import Icon from 'components/icons/Icon';

const DashboardDiagram = () => {
  const [instruction, setInstruction] = useState(true);
  const [depth0Expanded, setDepth0Expanded] = useState(false);
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
        <DiagramComponent 
          aria-expanded={depth0Expanded}
          className="tree-0-uxe"
          onClick={()=> {
            setInstruction(false)
            setDepth0Expanded(!depth0Expanded)
          }}
        >
          {
            !isPhone && instruction && <div className='dashboard-help'>
              <div className="dashboard-help-wrap">
                <span className='help-text'>Click Here !</span>
                <i className="icon icon-dasharray">
                  <svg width="4" height="44" viewBox="0 0 4 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 42V2" stroke="#F4F8FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6"/>
                  </svg>  
                </i>
                <Icon data='icon-mouse-instructions' name='diagram-helper' />
              </div>
            </div>
          }
          {skillList[0].name}
        </DiagramComponent>
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