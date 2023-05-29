import React, { ButtonHTMLAttributes } from 'react';

import Icon from 'components/icons/Icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { }

interface ContainerProps extends Props {
  depth: number;
}

// ----------------------------------------------------------------------------------------

const DiagramContainer = (props: ContainerProps) => {
  return (
    <div
      role="group"
      id={props.id}
      data-depth={props.depth}
      className={`diagram-container ${props.className ?? ''}`}
    >
      {props.children}
    </div>
  );
};

const DiagramComponent = (props: Props) => {
  const className = `tree-diagram ${props.className}`;
  let expanded = props['aria-expanded'] ?? false;

  const toggleFocus = (focus?: boolean) => {
    console.debug(expanded);
    const element = document.querySelector(`.${props.className}`);

    if (expanded) {
      element?.toggleAttribute('focused', !expanded);
    } else {
      element?.toggleAttribute('focused', focus);
    }
  }

  return (
    <button
      role='menuitem'
      className={className}
      aria-expanded={expanded ?? undefined}
      onClick={props.onClick}
      onMouseDown={() => toggleFocus()}
      onBlur={() => toggleFocus(false)}
    >
      <span>{props.children}</span>
    </button>
  );
};

export { DiagramComponent, DiagramContainer };

// ----------------------------------------------------------------------------------------

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
  category?: string;
}

const TreeItem = (props: Props) => {
  // TODO: id props - button owns & container id와 동일하게 구성
  return (
    <li role="menuitem" className='tree-item'>
      {props.children}
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
