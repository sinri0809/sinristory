'use strict';

window.onload = function(){
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

  gnb.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
  gnb.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
      gnb.style.display = 'none';
    }, 100);
  });


  // 여기서 입력받아서 mail.js로 넘겨주기 
  // 이거 어땜
  function emailContents(usermail, message, paths = [false, false, false, false]){
    this.usermail = usermail;
    this.message = message;
    this.paths = paths;
  }

  // email function data가져가기
  const usermail = document.querySelector('#usermail');
  const message = document.querySelector('#message');



  // checked된 array가져가기
  const paths = document.querySelectorAll('.path');
  let paths_arr = [false, false, false, false];
  paths.forEach((item, index) => {
    item.addEventListener('click', () => {
      // paths_arr[index] = true;
      if(paths_arr[index]){
        paths_arr[index] = false;
      }else{
        paths_arr[index] = true;
      }
    });
  });

  const sendButton = document.querySelector('.button-send');

  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    // let mail = new MailContainer(usermail.value, message.value, [...temp_arr]);
    
  });
}