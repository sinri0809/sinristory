import React, { AreaHTMLAttributes } from 'react';

interface Props extends AreaHTMLAttributes<HTMLDivElement> {
  index: number;
  content: string;
}

const DashboardItem = (props: Props) => {
  return (
    <div
      id={`dashboard_${props.content}`}
      dashboard-index={props.index}
      role={props.role}
      className={`dashboard-content ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
};

export default DashboardItem;
