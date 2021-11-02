'use strict';

import { createTransport } from './nodemailer';
/* 
  i made mail server 
  on Mailtrap
*/
// 메일을 보내려면 SMTP 서버 정보가 있어야 한다. 
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "813daf1a717f29",
    pass: "d87620e2681568"
  } 
}

const send = async (option) => {
  // 콜백함수
  createTransport(email).sendMail(option, (error, info) => {
    // 에러를 잡아야 겠죰.
    if(error){
      console.log(`error : ${error}`);
    }else{
      console.log(`good : ${info}`);
      return info.response;
    }
  });
}

let test_mail = {
  from : '1lliodqb@gmail.com',
  to : '1lliodqb@gmail.com',
  subject : 'hello',
  text : "I'm following nodejs youtube again"
}


send(test_mail);

class MailContainer{
  constructor(usermail, message, path){
    this.usermail = usermail;
    this.to = '1lliodqb@gmail.com';
    this.message = message;
    this.path = path;
  }
  async sendEmail(email_data){
    // email data는 object
    createTransport(email).sendMail(email_data, (error, info) => {
      if(error){
        console.log(`error : ${error}`);
      }else{
        console.log(`succeed : ${info}`);
        return info.response;
      }
    })
  }
}

