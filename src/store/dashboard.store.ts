import { atom } from "recoil";

export type Skill = {
  name: string;
  key: string; // related diagram의 위치 scss
  expanded: boolean;
  list?: Array<Skill>;
}

// not using yet
const skillItem = ({ name, key, expanded = false, list = [] }: Skill) => {
  return {
    name, key, expanded,
    list
  }
};

const skillsList = [
  {
    name: "UX Engineer",
    key: 'uxe',
    expanded: true,
    list: [
      {
        name: "Develop",
        key: 'dev',
        expanded: false,
        list: [
          {
            name: 'Electronics',
            key: 'ele'
          },
          {
            name: 'DB',
            key: 'db'
          },
          {
            name: 'HTML',
            key: 'html'
          },
          {
            name: 'CSS',
            key: 'css',
          },
          {
            name: 'JavaScript',
            key: 'js'
          },
          {
            name: 'React',
            key: 'react'
          },
          {
            name: 'TypeScript',
            key: 'ts'
          },
          {
            name: "webpack",
            key: 'wbp'
          },
          {
            name: 'storybook',
            key: 'stb'
          }
        ]
      },
      {
        name: 'Design',
        key: 'des',
        expanded: false,
        list: [
          {
            name: 'Adobe',
            key: 'adobe'
          },
          {
            name: 'Figma',
            key: 'figma'
          }
        ]
      },
      {
        name: 'HMI',
        key: 'hmi',
        expanded: false,
        list: []
      },
      {
        name: 'Design\nSystem',
        key: 'ds',
        expanded: false,
        list: []
      },
      {
        name: 'UX\nImproving',
        key: 'uxi',
        expanded: false,
        list: [
          {
            name: 'test',
            key: 'test'
          }
        ]
      }
    ]
  }
];

// ----------------------------------------------------------------------------------------

// TODO: update data from firebase
// const skillList =  

// ----------------------------------------------------------------------------------------

const skillListState = atom({
  key: 'skillListState',
  default: [...skillsList]
  // default: [...skillList]
})


export {
  skillsList,

  skillListState
};