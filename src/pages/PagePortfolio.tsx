import React, { useState } from 'react';

import Switch from 'components/portfolio/Switch';
import { Dropdown, DropdownItem } from 'components/portfolio/Dropdown';
import Button from 'components/portfolio/Button';
import TextField from 'components/portfolio/TextField';
import Dialog from 'components/portfolio/Dialog';
import Popup from 'components/portfolio/Popup';
import Progress, {ProgressBar, ProgressInformation} from 'components/portfolio/Progress';
import IconButton from 'components/portfolio/IconButton';
import Tab, {TabList, TabContent} from 'components/portfolio/Tab';
import Tooltip, {TooltipDefault, TooltipMouse} from 'components/portfolio/Tooltip';

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

  const [dialog, setDialog] = useState(false);
  const [popup, setPopup] = useState(false);

  const progressTotal = 100;
  const [progress, setProgress] = useState(0);

  const [buttonFocus, setButtonFocus] = useState(false);

  const [tabFocus, setTabFocus] = useState(0);
  const tabList = Array.from([1, 2, 3], x => `tab${x}`);

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
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
            <ItemUIComponent title='DrawerBox'>
              <details>
                <summary>Details</summary>
                hihi
              </details>
            </ItemUIComponent>
            <ItemUIComponent title='Tooltip'>
              <Tooltip index={0}>
                <TooltipDefault index={0} tooltipMessage='tooltip is here'>
                  <Button text='default tooltip' />
                </TooltipDefault>
              </Tooltip>
              <Tooltip index={1}>
                <TooltipMouse index={1} tooltipMessage='following mouse'>
                  <Button color="accent" text='mouse tooltip' />
                </TooltipMouse>
              </Tooltip>
            </ItemUIComponent>
            <ItemUIComponent title='Tabs'>
              <Tab selected={tabFocus}>
                <TabList>
                  <Tab.Item selected={tabFocus} index={0} tabName={tabList[0]} onClick={()=>setTabFocus(0)} />
                  <Tab.Item selected={tabFocus} index={1} tabName={tabList[1]} onClick={()=>setTabFocus(1)} />
                  <Tab.Item selected={tabFocus} index={2} tabName={tabList[2]} onClick={()=>setTabFocus(2)} />
                </TabList>
                <Tab.Bar selected={tabFocus} total={tabList.length} />
                <TabContent>
                  <TabContent.Item index={0} selected={tabFocus}>
                    tab1 content
                  </TabContent.Item>
                  <TabContent.Item index={1} selected={tabFocus}>
                    tab2 content
                  </TabContent.Item>
                  <TabContent.Item index={2} selected={tabFocus}>
                    tab3 content
                  </TabContent.Item>
                </TabContent>
              </Tab>
            </ItemUIComponent>
            <ItemUIComponent title='Icon'>
              <IconButton toggle={buttonFocus} data='icon-like' name='like' onClick={() => setButtonFocus(!buttonFocus)} />
            </ItemUIComponent>
            <ItemUIComponent title='Progressbar'>
              <Button text='progress up' onClick={() => {
                // FIXME: split code
                setInterval(() => {
                  setProgress((prevProgress) =>
                    prevProgress >= 100 ? 100 : prevProgress + 1
                  );
                }, 10);
              }}/>
              <Progress>
                <ProgressBar value={progress} total={progressTotal} />
                <ProgressInformation value={progress} total={progressTotal} />
              </Progress>
            </ItemUIComponent>
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
              <Button text='button-fill' onClick={() => {}}/>
              <Button color='accent' text='button-fill accent' onClick={() => {}}/>
              <Button className='line' text='button-line' onClick={() => {}}/>
            </ItemUIComponent>
            <ItemUIComponent title='TextField'>
              <TextField
                value={inputValue1}
                onChange={(e)=>{
                  setInputValue1(e.target.value)
                }}
              />
              <TextField
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
            <ItemUIComponent title='Dialog'>
              <Button text='dialog' onClick={() => setDialog(!dialog)} />
              {dialog && <Dialog title='타이틀입니다' onClose={() => setDialog(false)}>
                <Dialog.Content>내용입니다</Dialog.Content>
                <Dialog.Footer>
                  <Button color='accent' text='확인' onClick={() => setPopup(true)} />
                  <Button text='취소' onClick={() => setDialog(false)} />
                </Dialog.Footer>
              </Dialog>}
            </ItemUIComponent>
            <ItemUIComponent title='Popup'>
              <Button className='line' text='popup' onClick={() => setPopup(!popup)} />
              {popup && <Popup>
                <Popup.Content>내용입니다</Popup.Content>
                <Popup.Footer>
                  <Button color='accent' text='확인' onClick={() => {
                    setPopup(false);
                    setDialog(false);
                  }} />
                </Popup.Footer>
              </Popup>}
            </ItemUIComponent>
            <ItemUIComponent title='FullScreen'>
              FullScreen component
            </ItemUIComponent>
            <ItemUIComponent title='Loading'>
              Loading component
            </ItemUIComponent>
            <ItemUIComponent title='Flag/Toast'>
              Flag/Toast component
            </ItemUIComponent>
            <ItemUIComponent title='Radio'>
              Radio component
            </ItemUIComponent>
            <ItemUIComponent title='Date'>
              Tooltip component
            </ItemUIComponent>
            <ItemUIComponent title='Drawer'>
              Tooltip component
            </ItemUIComponent>
            <ItemUIComponent title='Slider'>
              Slider component
            </ItemUIComponent>
            <ItemUIComponent title='ImageSlider'>
              ImageSlider component
            </ItemUIComponent>
            <ItemUIComponent title='DnDPage'>
              DnDPage component
            </ItemUIComponent>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PagePortfolio;
