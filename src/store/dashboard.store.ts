import { atom } from "recoil";

export type Skill = {
  name: string;
  key: string; // related diagram의 위치 scss
  expanded: boolean;
  explain?: string;
  list?: Array<Skill>;
}

/**
 * TODO: organize data to firebase -> set data from firebase
 * ? key: related with coordinate value
 */

const skillsList = [
  {
    name: "UX Engineer",
    key: 'uxe',
    expanded: false,
    explain: 'UX Engineer is responsible for combine Front-End structure with UX Principles, I have ability and experience related with this position.',
    list: [ 
      {
        name: "Develop",
        key: 'dev',
        expanded: false,
        explain: 'As UX Engineer, Develop ability is highly recommended. I can deal with these Skill Stacks and applied in UX Develop.',
        list: [
          {
            name: 'Electronics',
            key: 'ele',
            explain: 'I studied basic programming skills in major. Using C & Java. In final project, I made Autonous parallel parking system with Arduino.',
          },
          {
            name: 'DB',
            key: 'db',
            explain: 'Database System Knowledge is also related with Understanding Service structure and communication with other Developers. I studied RDBMS (MySQL, SQLite) and have certificate in SQLD.',
          },
          {
            name: 'HTML5',
            key: 'html',
            explain: 'I can make DOM structure considering SEO and Accessibility.',
          },
          {
            name: 'CSS3',
            key: 'css',
            explain: 'I can apply design/interaction/animation in Web, Usually using SCSS.',
          },
          {
            name: 'JavaScript',
            key: 'js',
            explain: 'I can use Javscript in DOM Manipulation.',
          },
          {
            name: 'React',
            key: 'react',
            explain: 'I\'m familliar with React (SPA framework)',
          },
          {
            name: 'TypeScript',
            key: 'ts',
            explain: 'I can apply Typescript in Project. It is important to develop and maintain a project stable',
          },
          {
            name: "webpack",
            key: 'wbp',
            explain: 'Webpack, popular bundling system, highly related with SPA Frameworks. I organize Design System as a submodule in project with webpack & rollup.',
          },
          {
            name: 'storybook',
            key: 'stb',
            explain: 'I can organize develop and test environment using storybook. That is related with to build Design System ',
          }
        ]
      },
      {
        name: 'Design',
        key: 'des',
        expanded: false,
        explain: 'I started my UX Career as a Web Designer, So I can understand UX guides faster than others. Also, I can extract what is common rule in design guides.',
        list: [
          {
            name: 'Adobe',
            key: 'adobe',
            explain: 'I used Adobe company\'s services over 10 years. Photoshop, Illustrator, XD are friendly with me.',
          },
          {
            name: 'Figma',
            key: 'figma',
            explain: 'I\'m used to using figma. Not only in design, I use figma in developing & communication other teams.',
          }
        ]
      },
      {
        name: 'HMI',
        key: 'hmi',
        expanded: false,
        explain: 'I have experience in HMI. I studied lecture in Germany and did a team project to make prototype.',
        list: []
      },
      // {
      //   name: 'Design\nSystem',
      //   key: 'ds',
      //   expanded: false,
      //   explain: 'I have experience about Design System',
      //   list: []
      // },
      // {
      //   name: 'UX\nImproving',
      //   key: 'uxi',
      //   expanded: false,
      //   explain: '.',
      //   list: [
      //     {
      //       name: 'test',
      //       key: 'test',
      //       explain: '.',
      //     }
      //   ]
      // }
    ]
  }
];

const skillListState = atom({
  key: 'skillListState',
  default: [...skillsList]
})

// ----------------------------------------------------------------------------------------

const skillExplainState = atom({
  key: "skillExplain",
  default: "Click diagram"
})

export {
  skillListState,
  skillExplainState
};