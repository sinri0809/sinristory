'use strict';

import Main from './main.js';
import About from './about.js';

// 현재 페이지 파악하기
function pageSearch(lang_switch){
  switch (document.querySelector('mark > span').innerHTML){
    case 'sinri story' :
      Main(lang_switch);
      break;
    case 'About me' : 
      About(lang_switch);
      break;
  }
}

window.onload = function(){
  const gnb_trigger = document.querySelector('.trigger-toggle');
  const gnb = document.querySelector('nav');
  let timer;
  let flag;
  // const screen = document.querySelector('.wrap');

  let toggle = () => {
    if (!flag){
      gnb.style.display = 'none';
      gnb_trigger.classList.remove('trigger-toggle-active');
      flag = 1;
    }else{
      gnb.style.display = 'block';
      gnb_trigger.classList.add('trigger-toggle-active');
      flag = 0;
    }
  }

  gnb_trigger.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      flag = 0;
      toggle();
    }, 100);
  })
  gnb_trigger.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    flag = 1;
    toggle();
  })
  gnb_trigger.addEventListener('click', (e) =>{
    toggle();
  });
  gnb.addEventListener('mouseover', () => {
    clearTimeout(timer);
  })
  gnb.addEventListener('mouseleave', () => {
    flag = 0;
    toggle();
  })

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
    // 1 day is enough
    date.setDate(date.getDate() + 1);
    let cookie = '';
    cookie += `lang_en=${value};`;
    cookie += `Expires=${date.toUTCString()};`;
    document.cookie = cookie;
  } 

  let lang_en_switch = () => {
    let state = false;
    document.cookie.split(';')
    .find(name => {
      name.startsWith('lang_en')
      ? state = name.split('=')[1]
      : lang_cookie(false);
    })
    state = JSON.parse(state);
    return state;
  }


  const lang_button = document.querySelector('#language');
  lang_button.addEventListener('click', function(){
    if(lang_en_switch()){
      this.innerHTML="en";
      lang_cookie(false);
      pageSearch(lang_en_switch());
      document.documentElement.lang = "ko";
    }
    else{
      this.innerHTML="ko";
      lang_cookie(true);
      pageSearch(lang_en_switch());
      document.documentElement.lang = "en";
    }
  });

  // cookie 상태에 따라서 menu 상태 변경하기 
  // cookie 없을 경우에 cookie 생성하기 
  // 최초에 한번만 실행하면 됨.
  switch (lang_en_switch()){
    case true :
      // 이게 겁나 헷갈리는데 
      // lang_en 이 true면 en상태란 뜻이고
      // 바꿀 버튼을 렌더링 해야하니까
      // ko가 나와야 하는 것. 
      lang_button.innerHTML="ko";
      pageSearch(lang_en_switch());
      break;
    case false :
      lang_button.innerHTML="en";
      pageSearch(lang_en_switch());
      break;
  }
}
