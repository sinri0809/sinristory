'use strict';

import Main from './main.js';
import About from './about.js';

function lang_en_switch(){
  let state = false;
  document.cookie.split(';')
  .find(name => {
    name.startsWith('lang_en')
    ? state = name.split('=')[1]
    : state = null;
  })
  return state;
}

// 현재 페이지 파악하기
function pageSearch(){
  switch (document.querySelector('mark > span').innerHTML){
    case 'sinri story' :
      Main(lang_en_switch());
      console.log('here is --sinristory'); 
      break;
    case 'About me' : 
      console.log('here is about me page');
      About(lang_en_switch());
      break;
    case 'Portfolios' :
      console.log('here is portfolio site ');
      break;
  }

}

window.onload = function(){
  pageSearch();

  const gnb_trigger = document.querySelector('.trigger-toggle');
  const gnb = document.querySelector('nav');
  let timer;
  let flag = 0;
  const screen = document.querySelector('.wrap');

  let toggle = () => {
    if (flag == 0){
      gnb.style.display = 'none';
      flag = 1;
    }else{
      gnb.style.display = 'block';
      flag = 0;
    }
  }

  gnb_trigger.addEventListener('mouseleave', () =>{
    timer = setTimeout(() => {
      gnb.style.display = 'none';
    }, 500);
  });
  gnb_trigger.addEventListener('mouseenter', (e) =>{
    // e.preventDefault();
    clearTimeout(timer);
    gnb.style.display = 'block';
    flag = 0;
  });

  // 이걸 써보고 이것도 safari에서 안되면 다시 고쳐야되겟슴다.
  gnb_trigger.addEventListener('click', () =>{
    toggle();
  });

  gnb.addEventListener('mouseover', () => {
    clearTimeout(timer);
  });
  gnb.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
      gnb.style.display = 'none';
    }, 100);
  });



  // 언어 팩 만들기 changing language 
  /*
    0. 페이지 처음 들어오면 cookie로 언어 체크 상태 확인하기 
    1. 영어 버튼 선택하면
    2. 버튼 상태 바꾸기  
    2. 영어 json파일을 불러오기
    3. 언어 바꿈 상태를 계속 load 하는거보다는 어딘가에 저장해두면 좋을거같다.
        쿠키말고 로컬 스토리지(WEB API)로 저장하여 다른 사이트에서도 이용하기
  */

  // cookie만들기 
  // lang_en : false(한국어) true(영어)
  // value = boolean
  const lang_cookie = (value=false) => {
    let date = new Date();
    // 1 dat is enough
    date.setDate(date.getDate() + 1);
    let cookie = '';
    cookie += `lang_en=${value};`;
    cookie += `Expires=${date.toUTCString()};`;
    document.cookie = cookie;
  } 

  const lang_button = document.querySelector('#language');
  lang_button.addEventListener('click', function(){
    // 문자열로 넘어와가지구... 
    // JSON으로 하면 boolean으로 넘어올거같기도 하고 ..
    if(lang_en_switch() == "false"){
      this.innerHTML="ko";
      lang_cookie(true);
      pageSearch(lang_en_switch());
      document.documentElement.lang = "en";
    }
    else if(lang_en_switch() == "true"){
      this.innerHTML="en";
      lang_cookie(false);
      pageSearch(lang_en_switch());
      document.documentElement.lang = "ko";
    }
  });


  // cookie 상태에 따라서 menu 상태 변경하기 
  // cookie 없을 경우에 cookie 생성하기 
  // 최초에 한번만 실행하면 됨.
  switch (lang_en_switch()){
    case null :
      lang_cookie(false);
      break;
    case "true" :
      // 이게 겁나 헷갈리는데 
      // lang_en 이 true면 en상태란 뜻이고
      // 바꿀 버튼을 렌더링 해야하니까
      // ko가 나와야 하는 것. 
      lang_button.innerHTML="ko";
      break;
    case "false" :
      lang_button.innerHTML="en";
      break;
  }
}
