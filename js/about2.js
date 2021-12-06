'use strict';
// ver = 2021.12.06


const renderLang = (state, arr) => {
  const profile_sinri = document.querySelectorAll('.profile-basic > p');
  const profile_nation = document.querySelectorAll('.profile-basic > address');
  const edu = document.querySelectorAll('.profile-edu > p');
  const study_note = document.querySelectorAll('.profile-study p');
  const temp_arr = [...profile_sinri, ...profile_nation, ...edu, ...study_note];
  const aboutArr = [...temp_arr.slice(0, 5), ...temp_arr.slice(7)];
  
  aboutArr.forEach((item, index) => {
    item.innerHTML = `${arr[index]}`;
  });

  if(state){
    const getKo = () => {
      let arr = new Array();
      aboutArr.forEach((item) => arr.push(item.innerHTML));
      return arr;
    }
  }
}

// const fetchSkills = async (state) => {
async function fetchSkills(state){
  let skillArray = new Array();
  let url = 'https://sinri0809.github.io/tempdata.github.io/data.json';
  let list_name = "skills";
  if(state){
    url = 'https://sinri0809.github.io/tempdata.github.io/lang_en.json';
    list_name = "skills_en";
  }

  try{
    const response = fetch(url);
    response.then((res) => {
      res.json().then((res2) => {
        skillArray = [...res2[list_name]];

        console.log(skillArray);
        return skillArray;
      });
    });
  }catch{
    throw new Error("something's Errors");
  }
}
// 여기에도 링크 걸기 (html)
async function renderSkills(list, index=3){
  document.querySelector('.skill-detail').innerHTML = `
    <h5>${list[index].subject}</h5>
    <p>${list[index].contents}</p>
  `;
}

(function initializing (){
  // const aboutKo = getKo();
})();

async function About2(state){
  const skillList = await fetchSkills(state);
  const aboutKo = getKo();

}

export default About2;