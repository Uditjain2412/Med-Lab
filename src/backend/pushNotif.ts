import { GMailService } from "c:/Users/sherv/Desktop/Med-Lab/src/backend/MailService"
 
let gmailService = new GMailService(); 

let Emails: string[] = ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'];

for(var index in Emails)
{ 
    gmailService.sendMail( 
        '< ${Emails[index]} ',  
        'Hello',  
        'Hello from gmailService'); 
}