'use strict';
// i made temp db storage
// https://sinri0809.github.io/tempdata.github.io/data.json

let skillsData = new Array();

// 언어팩 사용 전에 데이터 모아서 localstorage에 저장하기
let about_lang_ko = new Array();
let about_lang_en = new Array();

const profile_sinri = document.querySelectorAll('.profile-basic > p');
const profile_nation = document.querySelectorAll('.profile-basic > address');
const edu = document.querySelectorAll('.profile-edu > p');
const study_note = document.querySelectorAll('.profile-study p');

let temp_arr = [...profile_sinri, ...profile_nation, ...edu, ...study_note];
// index 5, 6 에 원하지 않는 값이 들어잇음...
let about_arr = new Array();
about_arr = about_arr.concat(temp_arr.slice(0, 5), temp_arr.slice(7))

async function renderLang(about_lang){
  console.log("rendering");
  about_arr.forEach((item, index) => {
    item.innerHTML = `${about_lang[index]}`;
  })
}
async function getEnglish(){
  try{
    let response = fetch('https://sinri0809.github.io/tempdata.github.io/lang_en.json');
    if(!(await response).ok){
      throw new Error("Failed to get json");
    }
    (await response).json()
    .then((pending) => {
      for(let i in pending["profile"]){
        about_lang_en.push(pending["profile"][i])
      }
      for(let i in pending["edu"]){
        about_lang_en.push(pending["edu"][i])
      }
      for(let i in pending["study_note"]){
        about_lang_en.push(pending["study_note"][i])
      }

      return 0;
    })
  }
  catch{
    throw new Error("something's wrong");
  }
}

async function changeLanguage(state){
  if(state == "true"){
    //영어
    await renderLang(about_lang_en);
  }else{
    await renderLang(about_lang_ko);
  }
}

function makeArr(about_lang){
  about_arr.forEach((item)=> {
    about_lang.push(item.innerHTML);
  })
}

async function fetchSkills(state){
  let url = 'https://sinri0809.github.io/tempdata.github.io/data.json';
  let list = "skills";
  if(state == "true"){
    // 영어 버전을 가져와야함
    url = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';
    list = "skills_en";
  }
  try{
    let response = fetch(url);
    if(!(await response).ok) {
      console.warn("failed to get data");
    }
    console.log("loaded json file");
    (await response).json()
    .then((pending) => {
      skillsData = pending[list];
      writeHTML(skillsData);
    })
  }
  catch{
    throw new Error("something's wrong");
  }

  return skillsData;
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


function About(state){
  // 한번만 좀 하게 해야하는데.. 
  getEnglish();
  fetchSkills(state);
  changeHTML();
  makeArr(about_lang_ko);
  changeLanguage(state);
}

export default About;