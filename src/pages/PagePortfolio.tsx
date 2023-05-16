import React, { useState, useEffect, useRef } from 'react';

import Switch from 'components/ui/Switch';
import { Dropdown, DropdownItem } from 'components/ui/Dropdown';
import Button from 'components/ui/Button';
import TextField from 'components/ui/TextField';
import Dialog from 'components/ui/Dialog';
import Popup from 'components/ui/Popup';
import Progress, {
  ProgressBar,
  ProgressInformation,
} from 'components/ui/Progress';
import IconButton from 'components/ui/IconButton';
import Tab, { TabList, TabContent } from 'components/ui/Tab';
import Tooltip, { TooltipDefault, TooltipMouse } from 'components/ui/Tooltip';
import Radio from 'components/ui/Radio';
import Checkbox from 'components/ui/Checkbox';
import BottomSheet from 'components/ui/Sheet.Bottom';
import Slider from 'components/ui/Slider';
import GlobalPortal from 'components/container/Portals';
import Drawer from 'components/ui/Drawer';

import SortPortfolio from 'view/portfolio/sort_portfolio';

interface ItemUIComponentProps {
  title: string;
  children: React.ReactNode;
}

const ItemUIComponent = ({ children, title }: ItemUIComponentProps) => {
  return (
    <li className="portfolio-item">
      <div className="ui-presenter-wrap">
        <h4 className="ui-title name-component">{title}</h4>
        <div className="ui-component">{children}</div>
      </div>
    </li>
  );
};

const PagePortfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);

  const exampleList = Array.from([1, 2, 3, 4, 5], (x) => `item${x}`);
  const [dropdown, setDropdown] = useState(0);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const [dialog, setDialog] = useState(false);
  const [popup, setPopup] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [bottomSheetSlider, setBottomSheetSlider] = useState(false);

  const progressTotal = 100;
  const [progress, setProgress] = useState(0);

  const [buttonFocus, setButtonFocus] = useState(false);

  const [tabFocus, setTabFocus] = useState(0);
  const tabList = Array.from([1, 2, 3], (x) => `tab${x}`);

  const [sliderValue, setSliderValue] = useState(20);

  const [hideDrawer, setHideDrawer] = useState(true);

  // TODO: 보장하는 typescript
  const radioCategory: string = 'radio-category';

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
    setDropdown(index);
  };

  return (
    <main ref={ref} className="portfolio">
      <section className="portfolio-container">
        <button className="btn btn-go-top"
          onClick={() => {
            if(ref.current){
              ref.current.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17L18 9M18 9L26 17M18 9V30" stroke="#F4F8FF"/>
          </svg>
        </button>
        <div 
          className="portfolio-wrap">
          <SortPortfolio />
          <ul className="portfolio-list">
            <ItemUIComponent title="Drawer">
              <Button text='open Drawer' onClick={()=>setHideDrawer(!hideDrawer)} />
              <Drawer hide={hideDrawer} setHide={()=>setHideDrawer(true)}>
                what you want inside 
              </Drawer>
            </ItemUIComponent>
            <ItemUIComponent title="BottomSheet">
              <TextField
                value={inputValue4}
                onChange={(e) => {
                  setInputValue4(e.target.value);
                }}
              />
              <Button text='BottomSheet 호출' onClick={()=>setBottomSheet(!bottomSheet)} />
              {bottomSheet && <BottomSheet onClose={()=> setBottomSheet(false)} />}
              <Button text='BottomSheet slider 호출' onClick={()=>setBottomSheetSlider(!bottomSheetSlider)} color='accent' />
              {bottomSheetSlider && <BottomSheet control='dnd' onClose={()=> setBottomSheetSlider(false)} />}

            </ItemUIComponent>
            <ItemUIComponent title="Slider">
              <Slider 
                label='temperture'
                value={sliderValue}
                onChange={(e)=>setSliderValue(Number(e.currentTarget.value))}
                min={20}
                max={40}
              />
            </ItemUIComponent>
            <ItemUIComponent title="ImageSlider">
              to be continued
            </ItemUIComponent>
            <ItemUIComponent title="Checkbox">
              <Checkbox
                title="맛있는 것을 선택해주세요"
                category={radioCategory}
              >
                <Checkbox.Item name={radioCategory} label="탄탄멘" />
                <Checkbox.Item name={radioCategory} label="마라탕" />
                <Checkbox.Item name={radioCategory} label="비빔밥" />
                <Checkbox.Item name={radioCategory} disabled label="마우스" />
              </Checkbox>
            </ItemUIComponent>
            <ItemUIComponent title="Radio">
              <Radio title="하나만 선택해주세요" category={radioCategory}>
                <Radio.Item name={radioCategory} value="value1" />
                <Radio.Item name={radioCategory} value="value2" />
              </Radio>
            </ItemUIComponent>
            <ItemUIComponent title="DetailBox">
              <details>
                <summary>Details</summary>
                hihi
              </details>
            </ItemUIComponent>
            <ItemUIComponent title="Tooltip">
              <Tooltip index={0}>
                <TooltipDefault index={0} tooltipMessage="tooltip is here">
                  <Button text="default tooltip" />
                </TooltipDefault>
              </Tooltip>
              <Tooltip index={1}>
                <TooltipMouse index={1} tooltipMessage="following mouse">
                  <Button color="accent" text="mouse tooltip" />
                </TooltipMouse>
              </Tooltip>
            </ItemUIComponent>
            <ItemUIComponent title="Tabs">
              <Tab selected={tabFocus}>
                <TabList>
                  <Tab.Item
                    selected={tabFocus}
                    index={0}
                    tabName={tabList[0]}
                    onClick={() => setTabFocus(0)}
                  />
                  <Tab.Item
                    selected={tabFocus}
                    index={1}
                    tabName={tabList[1]}
                    onClick={() => setTabFocus(1)}
                  />
                  <Tab.Item
                    selected={tabFocus}
                    index={2}
                    tabName={tabList[2]}
                    onClick={() => setTabFocus(2)}
                  />
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
            <ItemUIComponent title="Icon">
              <div>
                <IconButton
                  toggle={buttonFocus}
                  data="icon-like"
                  name="like"
                  onClick={() => setButtonFocus(!buttonFocus)}
                />
                <IconButton
                  data='icon-drawer'
                  name='example icon'
                />

              </div>
            </ItemUIComponent>
            <ItemUIComponent title="Progressbar">
              <Button
                text="progress up"
                onClick={() => {
                  // FIXME: split code
                  setInterval(() => {
                    setProgress((prevProgress) =>
                      prevProgress >= 100 ? 100 : prevProgress + 1
                    );
                  }, 10);
                }}
              />
              <Progress>
                <ProgressBar value={progress} total={progressTotal} />
                <ProgressInformation value={progress} total={progressTotal} />
              </Progress>
            </ItemUIComponent>
            <ItemUIComponent title="Switch">
              <Switch
                size="large"
                checked={checked}
                onChange={onChangeSwitch}
              />
            </ItemUIComponent>
            <ItemUIComponent title="Dropdown">
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
            <ItemUIComponent title="Button">
              <Button text="button-fill" onClick={() => {}} />
              <Button
                color="accent"
                text="button-fill accent"
                onClick={() => {}}
              />
              <Button className="line" text="button-line" onClick={() => {}} />
            </ItemUIComponent>
            <ItemUIComponent title="TextField">
              <TextField
                value={inputValue1}
                onChange={(e) => {
                  setInputValue1(e.target.value);
                }}
              />
              <TextField
                requiredMessage="좋아하는 음식은 뭐에요?"
                value={inputValue2}
                onChange={(e) => {
                  setInputValue2(e.target.value);
                }}
              />
              <TextField
                required
                categoryTitle="이름"
                requiredMessage="이름을 알 수 있을까요?"
                value={inputValue3}
                onChange={(e) => {
                  setInputValue3(e.target.value);
                }}
              />
            </ItemUIComponent>
            <ItemUIComponent title="Dialog">
              <Button text="dialog" onClick={() => setDialog(!dialog)} />
              {dialog && (
                <Dialog title="타이틀입니다" onClose={() => setDialog(false)}>
                  <Dialog.Content>내용입니다</Dialog.Content>
                  <Dialog.Footer>
                    <Button
                      color="accent"
                      text="확인"
                      onClick={() => setPopup(true)}
                    />
                    <Button text="취소" onClick={() => setDialog(false)} />
                  </Dialog.Footer>
                </Dialog>
              )}
            </ItemUIComponent>
            <ItemUIComponent title="Popup">
              <Button
                className="line"
                text="popup"
                onClick={() => setPopup(!popup)}
              />
              {popup && (
                <Popup width={300} height={200}>
                  <Popup.Content>내용입니다</Popup.Content>
                  <Popup.Footer>
                    <Button
                      color="accent"
                      text="확인"
                      onClick={() => {
                        setPopup(false);
                        setDialog(false);
                      }}
                    />
                  </Popup.Footer>
                </Popup>
              )}
            </ItemUIComponent>
            <ItemUIComponent title="FullScreen">
            to be continued
            </ItemUIComponent>
            <ItemUIComponent title="Loading">to be continued</ItemUIComponent>
            <ItemUIComponent title="Flag/Toast">
              to be continued
            </ItemUIComponent>
            <ItemUIComponent title="Date">to be continued</ItemUIComponent>
            <ItemUIComponent title="Alert">to be continued</ItemUIComponent>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PagePortfolio;
