import React, { AreaHTMLAttributes, ButtonHTMLAttributes } from 'react';

import Icon from 'components/icons/Icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface ContainerProps extends Props {
  depth: number;
}

const DiagramContainer = (props: ContainerProps) => {
  return (
    <div
      role={props.role}
      id={props.id}
      data-depth={props.depth}
      aria-expanded={props['aria-expanded']}
      className={`diagrma-container ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
};

const DiagramComponent = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`tree-diagram ${props.className}`}
    >
      <span>{props.children}</span>
    </button>
  );
};

export { DiagramComponent, DiagramContainer };

const TreeContainer = (props: ContainerProps) => {
  return (
    <ul
      role="group"
      data-depth={props.depth}
      id={props.id}
      className={`tree-list ${props.className ?? ''}`}
    >
      {props.children}
    </ul>
  );
};

interface TreeItemProps extends Props {
  // id: string;
  category: string;
}

const TreeItem = (props: Props) => {
  // TODO: id props - button owns & container id와 동일하게 구성
  return (
    <li role="menuitem">
      {/* <button
      aria-owns={props.id}
      aria-expanded={props['aria-expanded']}
      className={`btn btn-toggle-tree`}
      onClick={props.onClick}
    >
      <Icon data="icon-tree-index" name="toggle" />
      <span>{props.category}</span>
    </button> */}
      {/* <TreeContainer id={props.id} depth={props.depth}> */}
      {props.children}
      {/* </TreeContainer> */}
    </li>
  );
};

TreeItem.ToggleButton = (props: TreeItemProps) => {
  return (
    <button
      aria-owns={props.id}
      aria-expanded={props['aria-expanded']}
      className={`btn btn-toggle-tree`}
      onClick={props.onClick}
    >
      <Icon data="icon-tree-index" name="toggle" />
      <span>{props.category}</span>
    </button>
  );
};

export { TreeContainer, TreeItem };
