'use strict';
/*
  only for index.html
  1. cookie 값에 맞게 언어 렌더링 하기
  2. mamil 내용 받아서 mail 보내기 기능 만들기 
*/
let main_lang_ko = new Array();
let main_lang_en = new Array();

const heading = document.querySelectorAll('hgroup > *');
const why = document.querySelectorAll('article > p');
const remark = document.querySelectorAll('.story-top-imgs > span');
const main_arr = [...heading, ...why, ...remark];

// 이거는 딱 한번만 하면됨.
// fetch로 english.json 파일 가져오기 
async function getEn(){
  try{
    const response = fetch('https://sinri0809.github.io/tempdata.github.io/lang_en.json');
    if(!(await response).ok){
      throw new Error("failed to get json file");
    }
    (await response).json()
    .then((pending, fullfilled) => {
      // console.log('getEnglish');
      // console.log(typeof(pending["hgroup"]))
      // 얘가 Array가 아니라 Object라서 foreach나 spread 문법은 사용할 수 없다. 
      let temp = "hgroup,why";
      for(let i of temp.split(',')){
        for(let j in pending[i]){
          main_lang_en.push(pending[i][j])
        }
      }
      
      // for (let i in pending["hgroup"]){
      //   main_lang_en.push(pending["hgroup"][i]);
      // }
      // for (let i in pending["why"]){
      //   main_lang_en.push(pending["why"][i]);
      // }
      // setLocal("main_en", main_lang_en);
    });
  }
  catch{
    throw new Error("something's wrong");
  }
}
// 현재 페이지 한글 파일을 배열로 만들 거임.
function getKo(){
  main_arr.forEach((item) => {
    if(item.innerHTML !== ''){
      main_lang_ko.push(item.innerHTML);
    }
  })
}
// function setLocal(main_lang="main_ko", main_lang_list){
//   localStorage.setItem(main_lang, JSON.stringify(main_lang_list));
// }

function renderLang(main_lang){
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
function setLang(state){
  if(state){
    // 영어를 보여줘야함.
    renderLang(main_lang_en);
  }else{
    renderLang(main_lang_ko);
  }
}

(function setInitial(){
  console.log("initializing main.js")
  getEn();
  getKo();
})();

async function Main(state){
  // 호출하는 순간 영어 파일부터 load 함.(한번만 해도 됨)
  setLang(state);
}

export default Main;


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




// mail 내용 만들거임
// window.onload = function(){
//   test();
 
//  // 여기서 입력받아서 mail.js로 넘겨주기 
//   // 이거 어땜
//   function emailContents(usermail, message, paths = [false, false, false, false]){
//     this.usermail = usermail;
//     this.message = message;
//     this.paths = paths;
//   }

//   // email function data가져가기
//   const usermail = document.querySelector('#usermail');
//   const message = document.querySelector('#message');


//   // checked된 array가져가기
//   const paths = document.querySelectorAll('.path');
//   let paths_arr = [false, false, false, false];
//   paths.forEach((item, index) => {
//     item.addEventListener('click', () => {
//       // paths_arr[index] = true;
//       if(paths_arr[index]){
//         paths_arr[index] = false;
//       }else{
//         paths_arr[index] = true;
//       }
//     });
//   });

//   const sendButton = document.querySelector('.button-send');

//   sendButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     // let mail = new MailContainer(usermail.value, message.value, [...temp_arr]);
    
//   });
// }


