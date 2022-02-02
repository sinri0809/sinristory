'use strict';
/**
 * *ver = 2022.02.02
 * 1. 동기적 실행
 * 2. local storage 활용
 * 3. 전역 변수 -> 매개 변수로 활용
 * 
 * @classSelector : HTML에서 element의 selector 배열을 반환하는 메소드 
 * 
 * @getKo : 한글 언어 배열을 반환하는 메소드
 * @getEn : 영어 언어 배열을 fetch해서 반환하는 메소드
 * 
 * @render : 선택자와 배열을 토대로 렌더링하는 메소드
 * 
 * ! Main2 : 두 번째 실행 -> loacalstorage에서 값 가져오기
 */


const classSelector = () => {
  const heading = document.querySelectorAll('hgroup > *');
  const why = document.querySelectorAll('article > p');
  const remark = document.querySelectorAll('.story-top-imgs > span');
  const arrs = [...heading, ...why, ...remark];   

  // br tag에는 아무 값도 못들어가니까...
  const arr = arrs.filter((ele) => ele.tagName !== "BR");
  
  return arr
}

const getKo = () => {
  console.log("getKo called");
  let koLang = [];
  
  const koArr = classSelector();
  koArr.forEach((item)=> {
    if(item.innerHTML){
      // innerHTML innerText ...
      koLang.push(item.innerHTML);
    }
  });

  localStorage.setItem('mainKo', JSON.stringify(koLang))

  return koLang
}


const getEn = async () => {
  console.log("getEn called");
  
  try{
    const url = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';
    
    const response = await fetch(url);
    const obj  = await response.json();

    let enArr = [];
    
    for(let key in obj){
      // main 에는 hgroup과 why 배열만 있으면 됨.
      if(key === "hgroup" || key === "why"){
        enArr = [...enArr, ...Object.values(obj[key])];
      }
    }

    localStorage.setItem('mainEn', JSON.stringify(enArr))

    return enArr;
    
  }catch{
    throw new Error("Failed to fetch!!!");
  }
}


const render = (arr) => {
  const selector = classSelector();
  
  selector.forEach((ele, idx)=> {
    ele.innerHTML = arr[idx];
  });
}


async function Main2(state){
  if(state){
    // 영어
    const finder = localStorage.getItem('mainEn');
    
    if(finder){
      render([...JSON.parse(finder)])
    }else{
      getEn().then((en) => {
        render(en)
      });
    }

  }else{
    // 한국어
    const finder = localStorage.getItem('mainKo');

    if(finder){
      render([...JSON.parse(finder)])
    }else{
      render(getKo());
    }
  }

}


export default Main2;