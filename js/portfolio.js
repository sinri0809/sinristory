'use strict';
// ver = 2021.11.11 
// i made temp db storage
// https://sinri0809.github.io/tempdata.github.io/data.json
  
  // 이 함수는 최초에 한번만 실행하면 되는 함수
let portfolioData = Array();

async function fetchAPI(){
  try{
    // console.log('loaded json')
    let response = fetch('https://sinri0809.github.io/tempdata.github.io/data.json');
    // console.log((await response).json())
    if(!(await response).ok){
      throw new Error("failed to get json");
    }

    let portfolios = (await response).json()
    .then((pending, fulfilled) => {
      portfolioData = pending["portfolios"];

      // 이거 수정해야함...
      // 이렇게 코딩하면 안돼요 ㅠㅠㅠㅠ
      writeHTML(portfolioData);
      return 1;
    })
  }
  catch{
    throw new Error("something's wrong");
  }
}

// 초기에는 sony <== index 0 을 먼저 띄운다.
async function writeHTML(list, index=0){
  // console.warn('writeHTML called')
  document.querySelector('.portfolios-explain').innerHTML = `
          <span>${list[index].date}</span>
          <h5>${list[index].portfolio}</h5>
          <h4 class="skill-set">${list[index].tech}</h4>
          <a target="_blank" class="button-eff-2" href="${list[index].link}">${list[index].linktype}</a>
          <a target="_blank" class="button-eff-2" href="${list[index].demolink}">PageOverview</a>
          `;
  document.querySelector('.portfolios-visual').innerHTML = `
          <img src="images/portfolios/img${index}.jpg" alt="img${index}">`;
}

function fetchAfter(){
  // console.log('HTML start');
  
  let portfolios = document.querySelectorAll('.portfolios-list > li');
  portfolios.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      writeHTML(portfolioData, index);
    })
  })
}


(async function(){
  await fetchAPI();
  fetchAfter();
  // await writeHTML(portfolioData, 0)
})();

/*
  1. 먼저 데이터 가져오고 await해야뎀
  2. 가져온 데이터로 HTML 쓰기 
*/

  
