'use strict';
// i made temp db storage
// https://sinri0809.github.io/tempdata.github.io/data.json

let about_lang_ko = new Array();
let about_lang_en = new Array();
let skillsData = new Array();

const profile_sinri = document.querySelectorAll('.profile-basic > p');
const profile_nation = document.querySelectorAll('.profile-basic > address');
const edu = document.querySelectorAll('.profile-edu > p');
const study_note = document.querySelectorAll('.profile-study p');

let temp_arr = [...profile_sinri, ...profile_nation, ...edu, ...study_note];
let about_arr = new Array();
// index 5, 6 에 원하지 않는 값이 들어잇음...
about_arr = about_arr.concat(temp_arr.slice(0, 5), temp_arr.slice(7))

async function getEn(){
  try{
    let response = fetch('https://sinri0809.github.io/tempdata.github.io/lang_en.json');
    if(!(await response).ok){
      throw new Error("Failed to get json");
    }
    (await response).json()
    .then((pending) => {
      let list = "profile,edu,study_note";
      for(let i of list.split(',')){
        for(let j in pending[i]){
          about_lang_en.push(pending[i][j])
        }
      }
      localStorage.setItem("about_en", JSON.stringify(about_lang_en));
    })
  }
  catch{
    throw new Error("something's wrong");
  }
}
function getKo(){
  // html 값을 긁어온다.
  about_arr.forEach((item)=> {
    about_lang_ko.push(item.innerHTML);
  })
}

async function fetchSkills(state){
  let url = 'https://sinri0809.github.io/tempdata.github.io/data.json';
  let list = "skills";
  if(state){
    // 영어 버전을 가져와야함
    url = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';
    list = "skills_en";
  }
  try{
    let response = fetch(url);
    if(!(await response).ok) {
      console.warn("failed to get data");
    }
    (await response).json()
    .then((pending) => {
      skillsData = pending[list];
      renderSkills(skillsData);

    })
  }
  catch{
    throw new Error("something's wrong");
  }
  return skillsData;
}
// 처음엔 HTML & CSS를 먼저 띄우기
async function renderSkills(list, index=3){
  document.querySelector('.skill-detail').innerHTML = `
    <h5>${list[index].subject}</h5>
    <p>${list[index].contents}</p>
  `;
}
function setSkills(){
  let skill_list = document.querySelectorAll('.skill-list > li');
  skill_list.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      renderSkills(skillsData, index);
    })
  })
}

function setLang(state){
  if(state){
    renderLang(about_lang_en);
  }else{
    renderLang(about_lang_ko);
  }
}
function renderLang(about_lang){
  console.log(`rendering : ${typeof(about_lang)}`);
  about_arr.forEach((item, index) => {
    item.innerHTML = `${about_lang[index]}`;
  })
}

async function About(state){
  await fetchSkills(state);
  await getEn();
  getKo();
  setSkills();
  setLang(state);
}

export default About;