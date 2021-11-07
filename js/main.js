'use strict';
/* only for index.html */

let main_lang_ko = new Array();
let main_lang_en = new Array();

const heading = document.querySelectorAll('hgroup > *');
const why = document.querySelectorAll('article > p');
const remark = document.querySelectorAll('.story-top-imgs > span');
const main_arr = [...heading, ...why, ...remark];

async function renderLang(main_lang){
  console.warn('rendering');
  let i = 0;
  main_arr.forEach((item) => {
    if(item.innerHTML !== ''){
      //index가져오면 안맞음
      item.innerHTML = `${main_lang[i]}`;
      i++;
    }
  })
}
// fetch로 english.json 파일 가져오기 
// 이거는 딱 한번만 하면됨.
async function getEnglish(state){
  try{
    const response = fetch('https://sinri0809.github.io/tempdata.github.io/lang_en.json');
    if(!(await response).ok){
      throw new Error("failed to get json file");
    }
    (await response).json()
    .then((pending, fullfilled) => {
      console.warn('succeed to get file');
      // console.log(typeof(pending["hgroup"]))
      // 얘가 Array가 아니라 Object라서 foreach나 spread 문법은 사용할 수 없다. 
      for (let i in pending["hgroup"]){
        main_lang_en.push(pending["hgroup"][i]);
      }
      for (let i in pending["why"]){
        main_lang_en.push(pending["why"][i]);
      }
      changeLanguage(state);
      return fullfilled;
      // renderLang(main_lang_en);
    });
    
  }
  catch{
    throw new Error("something's wrong");
  }
}

function makeArr(main_lang){
  main_arr.forEach((item) => {
    if(item.innerHTML !== ''){
      main_lang.push(item.innerHTML);
    }
  })
}
async function setLocal(main_lang="main_ko"){
  localStorage.setItem(main_lang, JSON.stringify(main_lang_ko));
}
// localstorage 에서 ko/en 파일 가져오기 
// function getLocal(main_lang="main_ko"){
//   try{
//     let temp = localStorage.getItem(main_lang);
//     temp = JSON.parse(temp);
//     console.log(temp);
//   }
//   catch{
//     throw new Error("failed to get page language");
//   }
// }

async function changeLanguage(state){
  if(state == "true"){
    // 영어를 보여줘야함.
    await renderLang(main_lang_en);
  }else{
    await renderLang(main_lang_ko);
  }
}


async function Main(state){
  // 호출하는 순간 영어 파일부터 load 함.
  makeArr(main_lang_ko);
  await setLocal("main_ko");
  // switch 값에 따라서 판별하는 거임.

  // 이거 한번만 실행하면 되는뎅....
  getEnglish(state);

  // changeLanguage(state);

}

export default Main;

  //filter로  변경할 때는
  // let result = main_arr.filter((item) => {
  //   if(item.innerHTML !== ''){
  //     return item.innerHTML;
  //   }
  //   return false
  // })