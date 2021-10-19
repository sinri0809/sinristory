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
}