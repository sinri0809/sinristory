import React, { useState } from 'react';

import Switch from 'components/portfolio/Switch';
import { Dropdown, DropdownItem } from 'components/portfolio/Dropdown';
import Button from 'components/portfolio/Button';
import TextField from 'components/portfolio/TextField';

interface ItemUIComponentProps {
  title: string;
  children: React.ReactNode
}

const ItemUIComponent = ({children, title}: ItemUIComponentProps) => {
  return <li className="portfolio-item">
  <div className="ui-presenter-wrap">
    <h4 className="ui-title name-component">{title}</h4>
    <div className="ui-component">
      {children}
    </div>
  </div>
</li>
}

const PagePortfolio = () => {
  const [checked, setChecked] = useState(false);

  const exampleList = Array.from([1, 2, 3, 4, 5], (x) => `item${x}`);
  const [dropdown, setDropdown] = useState(0);

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
    console.log('clicked');
    setDropdown(index);
  };

  return (
    <main className="portfolio">
      <div className="sort-container">
        <div className="sort-list-wrap">
          <h2>️🏄‍♀️</h2>
          <ul className="sort-list">
            <li className="sort-item">
              <button className="btn btn-sort name-component">Switch</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component">Dropdown</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component">Button</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component">InputField</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component">Icon</button>
            </li>
            <li className="sort-item">
              <button className="btn btn-sort name-component selected">
                selected
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-wrap">
          <ul className="portfolio-list">
            <ItemUIComponent title='Switch'>
              <Switch
                size="large"
                checked={checked}
                onChange={onChangeSwitch}
              />
            </ItemUIComponent>
            <ItemUIComponent title='Dropdown'>
              <Dropdown selected={exampleList[dropdown]}>
                {exampleList.map((index, itemIndex, item) => {
                  return (
                    <React.Fragment key={index}>
                      <DropdownItem
                        value={itemIndex}
                        onClick={() => handleDropdownSelect(itemIndex)}
                      >
                        {item[itemIndex]}
                      </DropdownItem>
                    </React.Fragment>
                  );
                })}
              </Dropdown>
            </ItemUIComponent>
            <ItemUIComponent title='Button'>
              <Button text='button' onClick={() => window.alert("clicked")}/>
            </ItemUIComponent>
            <ItemUIComponent title='TextField'>
              <TextField
                value={inputValue1}
                onChange={(e)=>{
                  setInputValue1(e.target.value)
                }}
              />
              <TextField
                categoryTitle='취미'
                requiredMessage='좋아하는 음식은 뭐에요?'
                value={inputValue2}
                onChange={(e)=>{
                  setInputValue2(e.target.value)
                }}
              />
              <TextField
                required
                categoryTitle='이름'
                requiredMessage='이름을 알 수 있을까요?'
                value={inputValue3}
                onChange={(e)=>{
                  setInputValue3(e.target.value)
                }}
              />
            </ItemUIComponent>
            <ItemUIComponent title='Icon'>
              Icon component
            </ItemUIComponent>
            <ItemUIComponent title='Dialog'>
              Dialog component
            </ItemUIComponent>
            <ItemUIComponent title='Loading'>
              Loading component
            </ItemUIComponent>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PagePortfolio;
