'use strict';

// import Main from "./main.js";
import Main2 from "./main2.js";
// import About2 from "./about2.js";
import About from "./about.js";
/* 
  ver = 2021.12.03
    수정 내용
    1. 전역 변수 삭제 (메모리 누수 우려)
    2. 비동기 함수 재 작성
  database url = 
  https://sinri0809.github.io/tempdata.github.io/data.json
*/
window.onload = function () {
  const gnbTrigger = document.querySelector('.trigger-toggle');
  const gnbDom = document.querySelector('nav');
  const toggle = ( flag ) => {
    if(!flag){
      gnbDom.style.display = 'none';
      gnbTrigger.classList.remove('trigger-toggle-active');
      return 1;
    }else{
      gnbDom.style.display = 'block';
      gnbTrigger.classList.add('trigger-toggle-active');
      return 0;
    }
  }
  // hamburger bar animation
  (function navAnimation(){
    let timer;
    let flag;
    gnbTrigger.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        flag = toggle(0);
      }, 100);
    });
    gnbTrigger.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      flag = toggle(1);
    });
    gnbTrigger.addEventListener('click', () => {
      flag = toggle(flag);
    });
  
    gnbDom.addEventListener('mouseover', () => {
      clearTimeout(timer);
    });
    gnbDom.addEventListener('mouseleave', () => {
      flag = toggle(0);
    });
  })();

  // 언어 상태 쿠키에 저장
  const langCookie = (value=false) => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    let cookie = '';
    cookie += `langEn=${value};`;
    cookie += `Expires=${date.toUTCString()};`;
    document.cookie = cookie;
  }
  // 언어 상태 스위치
  const langEnSwitch = (state = false) => {
    document.cookie.split(';')
    .find((name) => {
      name.startsWith('langEn')
      ? state = name.split('=')[1]
      : langCookie(false);
    });
    state = JSON.parse(state);
    return state;
  }
  // 현재 페이지 파악하고 각 모듈 실행하기 
  const pageSearch = (lang_switch) => {
    switch(document.querySelector('mark > span').innerHTML){
      case 'sinri story':
        Main2(lang_switch);
        break;
      case 'About me':
        About(lang_switch);
        break;
    }
  }

  // button 누르면 상태 변환하기 
  const langButton = document.querySelector('#language');
  langButton.addEventListener('click', function(){
    if(langEnSwitch()){
      this.innerHTML = "en";
      langCookie(false);
      pageSearch(false);
    }else{
      this.innerHTML = "ko";
      langCookie(true);
      pageSearch(true);
    }
  });

  // 최초에 한번만 실행하는 함수 
  (function pageRender(lang = langEnSwitch()){
    pageSearch(lang);
    switch(lang){
      case true:
        langButton.innerHTML = "ko";
        break;
      case false:
        langButton.innerHTML = "en";
        break;
    }
  })();
}
