'use strict';
// i made temp db storage
// https://sinri0809.github.io/tempdata.github.io/data.json

let skillsData = Array();
async function fetchAPI(){
  try{
    let response = fetch('https://sinri0809.github.io/tempdata.github.io/data.json');
    if(!(await response).ok){
      console.warn('failed to get data');
    }
    console.log('loaded json file');
    let skills = (await response).json()
    .then((pending, fulfilled) => {
      skillsData = pending["skills"];
      writeHTML(skillsData);
      return 1;
    })
  }
  catch{
    throw new Error("something's wrong");
  }
}

// 처음엔 HTML & CSS를 먼저 띄우기
async function writeHTML(list, index=3){
  document.querySelector('.skill-detail').innerHTML = `
    <h5>${list[index].subject}</h5>
    <p>${list[index].contents}</p>
  `;
}

function changeHTML(){
  let skill_list = document.querySelectorAll('.skill-list > li');
  // console.log(skill_list);
  skill_list.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      writeHTML(skillsData, index);
    })
  })

}

(async function(){
  await fetchAPI();
})();

changeHTML();