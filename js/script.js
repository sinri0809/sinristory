'use strict';

window.onload = function(){
  const gnb_trigger = document.querySelector('.trigger-toggle');
  const gnb = document.querySelector('nav');
  let timer;

  const screen = document.querySelector('.wrap');

  gnb_trigger.addEventListener('mouseenter', (e) =>{
    gnb.style.display = 'block';
  });
  gnb_trigger.addEventListener('mouseleave', () =>{
    timer = setTimeout(() => {
      gnb.style.display = 'none';
    }, 1000);
  });
  gnb.addEventListener('mouseenter', () => {
    clearTimeout(timer);
  });
  gnb.addEventListener('mouseleave', () => {
    gnb.style.display = 'none';
  });





  // let vertical = 100;
  // document.addEventListener('wheel', () => {
  //   // screen.style.transform = `translateY(-${vertical}vh)`;
  //   vertical += 100;
  //   console.log(vertical);
  // });

  // email function
  const usermail = document.querySelector('#usermail');
  const message = document.querySelector('#message');
  const paths = document.querySelectorAll('.path');

  const sendButton = document.querySelector('.button-send');
  
  let temp_arr = [false, false, false, false];
  
  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    paths.forEach((item, index) => {
      // console.log(`${index} ${item.checked}`);
      temp_arr[index] = item.checked;
    });
    // let mail = new MailContainer(usermail.value, message.value, [...temp_arr]);


  });
}