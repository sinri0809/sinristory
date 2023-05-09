import React, { HtmlHTMLAttributes } from 'react';

interface TabProps extends HtmlHTMLAttributes<HTMLDivElement> {
  selected: number;
}

const Tab = (props: TabProps) => {
  return <div className="tab-container">{props.children}</div>;
};

export default Tab;

interface TabItemProps extends TabProps {
  index: number;
  tabName: string;
  onClick: () => void;
}

const TabList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="tab-list-wrap">
      <ul role="tablist" className="tab-list">
        {children}
      </ul>
    </div>
  );
};

Tab.Item = (props: TabItemProps) => {
  return (
    <li
      id={`tab-${props.index}`}
      role="tab"
      className="tab-item"
      aria-selected={props.selected === props.index}
      aria-controls={`panel-${props.index}`}
      tabIndex={props.selected === props.index ? 0 : -1}
    >
      <button
        value={props.index}
        className="btn btn-tab"
        onClick={props.onClick}
      >
        {props.tabName}
      </button>
    </li>
  );
};

// ----------------------------------------------------------------------------------------

interface TabBarProps extends TabProps {
  total: number;
}

Tab.Bar = (props: TabBarProps) => {
  return (
    <div className="tab-bar">
      <span
        aria-hidden
        className="tab-bar-selected"
        style={{
          width: `calc(100% / ${props.total})`,
          transform: `translateX(${100 * props.selected}%)`,
        }}
      />
    </div>
  );
};

// ----------------------------------------------------------------------------------------

interface TabContentProps extends TabProps {
  index: number;
}

const TabContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="tab-content-wrap">{children}</div>;
};

TabContent.Item = (props: TabContentProps) => {
  return (
    <div
      id={`panel-${props.index}`}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`tab-${props.index}`}
      className="tab-content"
      hidden={props.index !== props.selected}
    >
      {props.children}
    </div>
  );
};

export { TabContent, TabList };
