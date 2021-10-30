"use strict";
exports.__esModule = true;
var MailService_1 = require("c:/Users/sherv/Desktop/Med-Lab/src/backend/MailService");
var gmailService = new MailService_1.GMailService();
gmailService.sendMail('<test_user>@gmail.com', 'Hello', 'Hello from gmailService');
var Emails = ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'];
for (var index in Emails) {
    gmailService.sendMail('< ${Emails[index]} ', 'Hello', 'Hello from gmailService');
}
