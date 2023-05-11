import { atom, selector } from "recoil";

const textState = atom({
  key: 'textState',
  default: 'ssssaa'
});


const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    return 4
    // const text = get(textState);

    // return text.length;
  },
});

const skillsList = [
  {
    name: "UX Engineer",
    key: 'uxe',
    list: [
      {
        name: "Develop",
        key: 'dev',
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
        list: []
      },
      {
        name: 'Design\nSystem',
        key: 'ds',
        list: []
      },
      {
        name: 'UX\nImproving',
        key: 'uxi',
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

type Skill = {
  name: string;
  key: string;
  list?: Array<Skill>;
};

export {
  textState,
  charCountState,
  skillsList,
}