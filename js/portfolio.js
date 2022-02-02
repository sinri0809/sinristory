'use strict';
// ver = 2022.02.02 
  
async function fetchAPI(){
  try{
    const response = await fetch('https://sinri0809.github.io/tempdata.github.io/data.json');
    if(!response.ok){
      throw new Error("failed to get json");
    }
    const pending = await response.json();
    const portfolioData = pending["portfolios"];

    return portfolioData;
  }
  catch{
    throw new Error("something's wrong");
  }
}


// sony <== index 0
async function renderHTML(list, index=0){
  const { date, portfolio, tech, link, demolink, linktype} = list[index];

  document.querySelector('.portfolios-explain').innerHTML = `
          <span>${date}</span>
          <h5>${portfolio}</h5>
          <h4 class="skill-set">${tech}</h4>
          <a target="_blank" class="button-eff-2" href="${link}">${linktype}</a>
          <a target="_blank" class="button-eff-2" href="${demolink}">PageOverview</a>
          `;

  document.querySelector('.portfolios-visual').innerHTML = `
          <img src="images/portfolios/img${portfolio}.jpg" alt="img${portfolio}">`;
}


function fetchAfter(portfolioData){
  const portfolios = document.querySelectorAll('.portfolios-list > li');

  portfolios.forEach((item, index) => {
    item.addEventListener('click', () => {
      renderHTML(portfolioData, index);
    });
  });

  // 📌 이벤트 위임 적용하기
  // document.querySelector('.portfolios-list').addEventListener('click', (event) => {
  //   console.log(event.target.value);
  // })

}


(async function(){
  const portfolioData = await fetchAPI();
  renderHTML(portfolioData);
  fetchAfter(portfolioData);
})();