import { GMailService } from "c:/Users/sherv/Desktop/Med-Lab/src/backend/MailService"
 
let gmailService = new GMailService(); 

gmailService.sendMail( 
  '<test_user>@gmail.com',  
  'Hello',  
  'Hello from gmailService'); 

  
let Emails: string[] = ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'];

for(var index in Emails)
{ 
    gmailService.sendMail( 
        '< ${Emails[index]} ',  
        'REALLY CRITICAL',  
        'Your Grandpa is in a really serious condition and you need to take them to the hospital!'); 
}