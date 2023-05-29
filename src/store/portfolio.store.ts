import { atom } from 'recoil';

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
    "Bar",
  ]
});

const sortUI = atom({
  key: "sortUI",
  default: 0,
});

export {
  portfolioUI,
  sortUI
}