'use strict';

import { createTransport } from 'nodemailer';
/* 
  i made mail server 
  Mailtrap
*/
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "813daf1a717f29",
    pass: "d87620e2681568"
  } 
}

const send = async (option) => {
  createTransport(email).sendMail(option, (error, info) => {
    if(error){
      console.log(`error : ${error}`);
    }else{
      console.log(`good : ${info}`);
      return info.response;
    }
  });

}

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

