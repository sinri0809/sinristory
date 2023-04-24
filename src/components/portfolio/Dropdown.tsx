import React, { useRef } from 'react';

import Icon from 'components/icons/Icon';

interface DropdownProps {
  children: React.ReactNode;
  selected: number | string;
  height?: number;
  width?: number;
  disabled?: boolean;
}

const Dropdown = ({ children, selected, height, width, disabled }: DropdownProps) => {
  const refDropdown = useRef<HTMLDivElement>(null);

  const closeDropdown = (event: any) => {
    if (event.relatedTarget) { // FIXME: item 누를 때 닫혀서 임시로 막아둠
      console.debug(event.relatedTarget)
      return 
    } else {
      refDropdown.current?.toggleAttribute('aria-expanded', false);
    }
  };

  const toggleDropdown = () => {
    refDropdown.current?.toggleAttribute('aria-expanded');
  }

  return (
    <div
      ref={refDropdown}
      style={{ height, width }}
      aria-disabled={disabled}
      // aria-expanded={false}
      className="dropdown-container"
      >
      <button 
        type="button" className='btn-dropdown'
        onBlur={closeDropdown}
        onClick={toggleDropdown}
      >
        <label className='label-dropdown'>{selected}</label>
        <Icon data="icon-arrow-down" name="Dropdown" />
      </button>
      <div className={'dropdown-list-wrap'}>
        <ul className={'dropdown-list'}>{children}</ul>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  height: 36,
  width: 260,
  selected: '',
  disabled: false
};

interface DropdownItemProps {
  children: React.ReactNode;
  value: number;
  onClick: () => void;
}

const DropdownItem = ({ children, onClick, value }: DropdownItemProps) => {
  return (
    <li className='dropdown-item'>
      <button
        type="button"
        className='btn-dropdown-item'
        onClick={onClick}
        value={value}
      >
        {children}
      </button>
    </li>
  );
};

export { Dropdown, DropdownItem };
