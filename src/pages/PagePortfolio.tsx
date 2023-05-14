import React, { useState, useEffect } from 'react';

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

import Sort, { SortList, SortItem } from 'components/layout/SortList';

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

  const [sliderValue, setSliderValue] = useState(15);

  // TODO: 보장하는 typescript
  const radioCategory: string = 'radio-category';

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
    setDropdown(index);
  };

  useEffect(() => {
    const temperatureValue = document.getElementById('temperature-value');
    temperatureValue?.classList.add('blink');
    setTimeout(() => {
      temperatureValue?.classList.remove('blink');
    }, 100);
  }, [sliderValue]);

  return (
    <main className="portfolio">
      <Sort>
        <h2>️🏄‍♀️</h2>
        <SortList>
          <SortItem>Switch</SortItem>
          <SortItem>Dropdown</SortItem>
          <SortItem>Button</SortItem>
          <SortItem>InputField</SortItem>
          <SortItem>Icon</SortItem>
        </SortList>
      </Sort>
      <section className="portfolio-container">
        <div className="portfolio-wrap">
          <ul className="portfolio-list">
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
              <div className="slider-container temperature">
                <label htmlFor="temperature" className="slider-title">
                  Temperature
                </label>
                <div className="slider-output-wrap">
                  <output id="temperature-value" className="slider-output">
                    {sliderValue}
                  </output>
                </div>
                <div className="slider-input-container">
                  <div className="slider-input-value-wrap">
                    <span
                      className="slider-input-value"
                      style={{
                        width: `${((sliderValue - 15) / (25 - 15)) * 100}%`,
                      }}
                    >
                      <i className="icon-thumb"></i>
                    </span>
                  </div>
                  <input
                    type="range"
                    id="range-temperature"
                    className="slider-input"
                    aria-labelledby="temperatureLabel"
                    aria-orientation="vertical"
                    tabIndex={0}
                    aria-valuetext="value sub text "
                    aria-valuemin={15.0}
                    aria-valuemax={25.0}
                    aria-valuenow={sliderValue}
                    defaultValue={0}
                    min={15}
                    max={25}
                    value={sliderValue}
                    step={0.5}
                    onChange={(e) => {
                      setSliderValue(Number(e.target.value));
                      console.log(e.target.value);
                    }}
                  />
                </div>
              </div>
            </ItemUIComponent>
            <ItemUIComponent title="ImageSlider">
              ImageSlider component
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
              <IconButton
                toggle={buttonFocus}
                data="icon-like"
                name="like"
                onClick={() => setButtonFocus(!buttonFocus)}
              />
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
              FullScreen component
            </ItemUIComponent>
            <ItemUIComponent title="Loading">Loading component</ItemUIComponent>
            <ItemUIComponent title="Flag/Toast">
              Flag/Toast component
            </ItemUIComponent>
            <ItemUIComponent title="Date">Date component</ItemUIComponent>
            <ItemUIComponent title="Drawer">Drawer component</ItemUIComponent>
            <ItemUIComponent title="Alert">Alert component</ItemUIComponent>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PagePortfolio;
