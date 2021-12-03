'use strict';
// ver = 2021.12.03
/*
  수정 내용
  1. 동기적 실행
  2. local storage 활용
  */

const urlEnData = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';

const heading = document.querySelectorAll('hgroup > *');
const why = document.querySelectorAll('article > p');
const remark = document.querySelectorAll('.story-top-imgs > span');
const mainArr = [...heading, ...why, ...remark];

const renderLang = async (main_lang) => {
  console.log("2 renderLang")
  // index를 가져오면 안맞기 때문에 
  let i = 0; 
  mainArr.forEach((item) => {
    if(item.innerHTML !== ''){
      item.innerHTML = `${main_lang[i]}`;
      i ++;
    }
  });
}

// 기존 한글 파일을 배열로 가져오기 
const getKo = async (main_arr) => {
  let mainLangKo = new Array();
  main_arr.forEach((item) => {
    item.innerHTML !== ''
    ? mainLangKo.push(item.innerHTML)
    : null
  });
  return mainLangKo;
}
const arrKo = await getKo(mainArr);

// 초기 로드시 & 클릭 시 실행하는 함수.
async function Main2(state){
  if(state){
    let mainLangEn = new Array();
    const response = fetch(urlEnData);
    (await response).json()
    .then((pending) => {
      // Array아니고 Object라서 spread문법 쓸 수 없어가지고.
      const temp = "hgroup,why";
      for(let i of temp.split(',')){
        for(let j in pending[i]){
          // console.log(pending[i][j]);
          mainLangEn.push(pending[i][j]);
        }
      }
      renderLang(mainLangEn);
    });
  }
  else{
    await renderLang(arrKo)
  }
}

export default Main2;