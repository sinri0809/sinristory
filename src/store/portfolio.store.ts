import {atom, selector} from 'recoil';

const portfolioUI = atom({
  key: 'ui',
  default: [
    "ImageSlider",
    "Drawer",
    "BottomSheet",
    "Slider",
    "Checkbox",
    "Radio",
    "Tooltip",
    "Tabs",
    "Icon",
    "Progressbar",
    "Switch",
    "Dropdown",
    "Button",
    "TextField",
    "Dialog",
    "Popup",
  ]
});

const sortUI = atom({
  key: "sortUI",
  default: 0,
});

const setSortIndex = selector({
  key: "setSortIndex",
  get: ({get}) => {

  },
  set: (opts, newValue) => {
    
  },
})

export {
  portfolioUI,
  sortUI
}