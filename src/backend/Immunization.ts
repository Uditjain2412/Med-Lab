import { GMailService } from "c:/Users/sherv/Desktop/Med-Lab/src/backend/MailService"
const moment = require('moment');
let gmailService = new GMailService(); 
let vaxDate: BigInt;

let Emails: string[] = ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'];

if(vaxDate == moment().format(vaxDate)){
    gmailService.sendMail('< shervinantony28@gmail.com ','Hello','Hello from gmailService'); 
}

