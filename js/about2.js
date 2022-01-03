'use strict';
/** 
  ** ver = 2022.01.03
  *? 수정 내용
  *1 변수 사용 방법 변경 (구조 분해 할당)
  *2 주석 추가
  * @classSelector : DOM selector
  * @fetchSetEn : 영어 파일을 localstorage에 저장함
  * @setKo : 한글 배열을 localstorage에 저장함
  * ----
  * @fetchSkills : skills의 설명을 언어 모드에 따라서 파싱하는 함수
  * @renderSkills : fetchSkills에서 파싱한 자료를 렌더링하는 함수
  * @clickSkills : click하면 index에 맞게 renderSkills를 실행하는 함수

*/
const classSelector = () => {
  const profile_sinri = document.querySelectorAll('.profile-basic > p');
  const profile_nation = document.querySelectorAll('.profile-basic > address');
  const edu = document.querySelectorAll('.profile-edu > p');
  const study_note = document.querySelectorAll('.profile-study p');
  const temp_arr = [...profile_sinri, ...profile_nation, ...edu, ...study_note];
  const aboutArr = [...temp_arr.slice(0, 5), ...temp_arr.slice(7)];

  return aboutArr;
}

const fetchSetEn = async () => {
  const url = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';
  const fetchData = fetch(url);
  const response = await fetchData;
  const result = await response.json();

  let arr = [];
  "profile, edu, study_note".split(", ").forEach((item) => {
    Object.values(result[item]).forEach((item) => {
      arr.push(item);
    });
  });
  localStorage.setItem("aboutEn", JSON.stringify(arr));
  return 1
}
const setKo = () => {
  const aboutArr = classSelector();
  const arr = aboutArr.map((item) => item.innerHTML);
  localStorage.setItem("aboutKo", JSON.stringify(arr))
  return 1
}

const getFromLocal = (state) => {
  const name = state ? "aboutEn":"aboutKo";
  const arr = JSON.parse(localStorage.getItem(name));
  return arr
}

const selectLang = async (state) => {
  /**
   * *aboutArr : DOM selector
   * *arr : Data from Local Storage
   */
  const aboutArr = classSelector();
  const arr = getFromLocal(state);
  aboutArr.forEach((item, index) => {
    item.innerHTML = `${arr[index]}`;
  });
}

async function fetchSkills(state){
  /**
   * * state : en모드 = true, ko모드 = false
   *  state에 따라서 url과 listName 바뀜
   * * response.json()을 통해. 
   */
  const url = state 
  ? 'https://sinri0809.github.io/tempdata.github.io/lang_en.json' 
  : 'https://sinri0809.github.io/tempdata.github.io/data.json';
  const listName = state
  ? "skills_en"
  : "skills";
  try{
    const fetchData = fetch(url);
    const response = await fetchData;
    const result = await response.json();
    return result[listName];
  }catch{
    throw new Error("something's Errors");
  }
}
const renderSkills = (list, index=3) => {
  const {subject, contents} = list[index];
  document.querySelector('.skill-detail').innerHTML = `
    <h5>${subject}</h5>
    <p>${contents}</p>
  `;
}
const clickSkills = (list) => {
  const skill_list = document.querySelectorAll('.skill-list > li');
  skill_list.forEach((item, index) => {
    item.addEventListener("click", () => {
      renderSkills(list, index);
    })
  })
}
(async function Initializing(){
  await fetchSetEn();
  setKo();
})();

async function About2(state){
  const skillList = await fetchSkills(state);
  renderSkills(skillList);
  clickSkills(skillList);

  selectLang(state)
}

export default About2;