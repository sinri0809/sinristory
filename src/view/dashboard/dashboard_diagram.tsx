import React, { useState } from 'react';

import { skillsList } from 'store/dashboard.store';

import { DiagramComponent, DiagramContainer } from './diagam_wrap';

const DashboardDiagram = () => {
  const [test, setTest] = useState(false);
  // TODO: rendering way ideanation

  // type Skill = {
  //   name: string;
  //   key: string;
  //   list?: Array<Skill>;
  // };

  // const skillNodes: Array<React.ReactNode> = [];
  // // let depth: number = 0;

  // const printSubSkill = (list: Array<Skill>) => {
  //   list.forEach((item, index) => {
  //     if (item.list && item.list?.length !== 0) {
  //       printSubSkill(item.list);
  //     }
  //     skillNodes.push(<DiagramComponent className={`tree-2-${item.key}`}>{item.name}</DiagramComponent>)
  //   });
  // };

  // printSubSkill(skillsList);
  return (
    <div className="dashboard-diagram">
      <DiagramContainer depth={0} aria-expanded={true}>
        <DiagramComponent className="tree-0-uxe">UX Engineer</DiagramComponent>
        <DiagramContainer depth={1} aria-expanded={true} id="diagram-1-dev">
          <DiagramComponent className="tree-1-dev" onClick={()=>setTest(!test)} >Develop</DiagramComponent>
          <DiagramContainer depth={2} aria-expanded={test}>
            {skillsList[0].list[0].list.map(item => <DiagramComponent className={`tree-2-${item.key}`}>{item.name}</DiagramComponent>)}
          </DiagramContainer>
        </DiagramContainer>

        <DiagramContainer depth={1} aria-expanded={true}>
          <DiagramComponent className="tree-1-des">Design</DiagramComponent>
          <DiagramContainer depth={2} aria-expanded={true}>
            {skillsList[0].list[1].list.map(item => <DiagramComponent className={`tree-2-${item.key}`}>{item.name}</DiagramComponent>)}
          </DiagramContainer>
        </DiagramContainer>

        <DiagramContainer depth={1} aria-expanded={true}>
          <DiagramComponent className="tree-1-hmi">HMI</DiagramComponent>
        </DiagramContainer>

        <DiagramContainer depth={1} aria-expanded={true}>
          <DiagramComponent className="tree-1-ds">Design<br />System</DiagramComponent>
        </DiagramContainer>

        <DiagramContainer depth={1} aria-expanded={true}>
          <DiagramComponent className="tree-1-uxi">UX<br />Improving</DiagramComponent>
          <DiagramContainer depth={2} aria-expanded={true}>
            {skillsList[0].list[4].list.map(item => <DiagramComponent className={`tree-2-${item.key}`}>{item.name}</DiagramComponent>)}
          </DiagramContainer>
        </DiagramContainer>
      </DiagramContainer>
    </div>
  );
};

export default DashboardDiagram;