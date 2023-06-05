import { fs } from './firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

// // const skillListRef = collection(fs, "skill_list");
const skillListDocRef = doc(fs, 'skill_list', '0')

// const test = async () => {
//   const dataSkillDoc = await getDoc(skillListDocRef);
//   console.log(dataSkillDoc)
//   console.log(dataSkillDoc.ref)
// };

// test();

export { skillListDocRef };