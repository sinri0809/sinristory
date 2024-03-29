import React, { useState, useRef, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { portfolioUI, sortUI } from 'store/portfolio.store';

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
import IconButton from 'components/icons/IconButton';
import Tab, { TabList, TabContent } from 'components/ui/Tab';
import Tooltip, { TooltipDefault, TooltipMouse } from 'components/ui/Tooltip';
import Radio from 'components/ui/Radio';
import Checkbox from 'components/ui/Checkbox';
import BottomSheet from 'components/ui/Sheet.Bottom';
import Slider from 'components/ui/Slider';
import Drawer from 'components/ui/Drawer';
import ImageSlider from 'components/ui/ImageSlider';

import SortPortfolio from 'view/portfolio/sort_portfolio';
import ButtonGoTop from 'components/common/ButtonGoTop';
import Icon from 'components/icons/Icon';

interface ItemUIComponentProps {
  title?: string;
  children: React.ReactNode;
  index?: number;
}

const ItemUIComponent = ({ children, title, index=-1 }: ItemUIComponentProps) => {
  const [sortIndex, setSortIndex] = useRecoilState(sortUI);
  const [portfolioList, setPortfolioList] = useRecoilState(portfolioUI);

  return (
    <li className="portfolio-item" id={`ui-${index}`} >
      <div className="ui-presenter-wrap" data-focus={sortIndex === index}>
        <h4 className="ui-title name-component">{index>-1 ? portfolioList[index] : title}</h4>
        <div className="ui-component">{children}</div>
      </div>
    </li>
  );
};

const PagePortfolio = () => {
  const [sortIndex, setSortIndex] = useRecoilState(sortUI);

  const elementScrollRef = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);

  const exampleList = Array.from([1, 2, 3, 4, 5], (x) => `item${x}`);
  const [dropdown, setDropdown] = useState(0);

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

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

  const imageList =  Array
    .from({length: 10}, (_, index) => `assets/imgs/sample/1-${index+1}.png`)
    .map((item, index) => ({src: item, alt: `sample 1-${index}`}))

  // TODO: 보장하는 typescript
  const radioCategory: string = 'radio-category';

  const onChangeSwitch = () => {
    setChecked(!checked);
  };

  const handleDropdownSelect = (index: number) => {
    setDropdown(index);
  };

  useEffect(() => {
    const focusedItemTop = document.querySelector(`#ui-${sortIndex}`)?.getBoundingClientRect().top ?? 0;
    const listTop = document.querySelector(".portfolio-list")?.getBoundingClientRect().top ?? 0;

    const result = Math.floor(focusedItemTop-listTop)
    elementScrollRef.current?.scrollTo({
      top: result,
      behavior: 'smooth'
    })
  },[sortIndex])

  return (
    <main className="portfolio">
      <section className="portfolio-container">
        <ButtonGoTop scrollElement={elementScrollRef} />
        <div 
          className="portfolio-wrap">
          <SortPortfolio />
          <div 
            ref={elementScrollRef} 
            className="portfolio-list-wrap"
          >
            <ul className="portfolio-list">
              <ItemUIComponent index={0} >
                <ImageSlider imageList={imageList} />
              </ItemUIComponent>
              <ItemUIComponent index={1} >
                <Button text='open Drawer' onClick={()=>setHideDrawer(!hideDrawer)} />
                <Drawer hide={hideDrawer} setHide={()=>setHideDrawer(true)}>
                  what you want inside 
                </Drawer>
              </ItemUIComponent>
              <ItemUIComponent index={2} >
                <Button text='BottomSheet 호출' onClick={()=>setBottomSheet(!bottomSheet)} />
                {bottomSheet && <BottomSheet onClose={()=> setBottomSheet(false)} />}
                <Button text='BottomSheet slider 호출' onClick={()=>setBottomSheetSlider(!bottomSheetSlider)} color='accent' />
                {bottomSheetSlider && <BottomSheet control='dnd' onClose={()=> setBottomSheetSlider(false)} />}
              </ItemUIComponent>
              <ItemUIComponent index={3} >
                <Slider 
                  label='temperture'
                  value={sliderValue}
                  onChange={(e)=>setSliderValue(Number(e.currentTarget.value))}
                  min={20}
                  max={40}
                />
              </ItemUIComponent>
              <ItemUIComponent index={4} >
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
              <ItemUIComponent index={5} >
                <Radio title="하나만 선택해주세요" category={radioCategory}>
                  <Radio.Item name={radioCategory} value="value1" />
                  <Radio.Item name={radioCategory} value="value2" />
                </Radio>
              </ItemUIComponent>
              <ItemUIComponent index={6} >
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
              <ItemUIComponent index={7} >
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
              <ItemUIComponent index={8} >
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
              <ItemUIComponent index={9} >
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
              <ItemUIComponent index={10} >
                <Switch
                  size="large"
                  checked={checked}
                  onChange={onChangeSwitch}
                />
                 <Switch
                  size="large"
                  disabled
                  checked={false}
                  onChange={()=>{}}
                />
              </ItemUIComponent>
              <ItemUIComponent index={11} >
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
              <ItemUIComponent index={12} >
                <Button text="button-fill" onClick={() => {}} />
                <Button
                  color="accent"
                  text="button-fill accent"
                  onClick={() => {}}
                />
                <Button className="line" text="button-line" onClick={() => {}} />
              </ItemUIComponent>
              <ItemUIComponent index={13} >
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
              <ItemUIComponent index={14} >
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
              <ItemUIComponent index={15} >
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
              <ItemUIComponent index={16}>
                <div className="bar-container"
                  onFocus={(event) => {
                    event.currentTarget.toggleAttribute('focused', true)
                  }}
                  onBlur={(event) => {
                    event.currentTarget.toggleAttribute('focused', false)
                  }}
                >
                  <div
                    className="bar-wrap"
                  >
                    <div className="bar-drawer">
                      <IconButton data='icon-hamburger' name='app bar' />
                    </div>
                    <div className="search-input-container">
                      <div className="search-input-wrap">
                        <input
                          className='search-input'
                          type="text"
                          value={""}
                          readOnly
                          placeholder='검색어 입력'
                        />
                      </div>
                    </div>
                    <div className="user-profile">
                      <IconButton data='icon-user-profile' name='app bar' />
                    </div>
                  </div>
                </div>
              </ItemUIComponent>
              {/* <ItemUIComponent title="Accordion">to be continued</ItemUIComponent>
              <ItemUIComponent title="FullScreen">to be continued</ItemUIComponent>
              <ItemUIComponent title="Loading">to be continued</ItemUIComponent>
              <ItemUIComponent title="Flag/Toast">to be continued</ItemUIComponent>
              <ItemUIComponent title="Date">to be continued</ItemUIComponent>
              <ItemUIComponent title="Alert">to be continued</ItemUIComponent>
              <ItemUIComponent title="Pagination">to be continued</ItemUIComponent> */}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PagePortfolio;
