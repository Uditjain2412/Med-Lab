"use strict";
exports.__esModule = true;
var MailService_1 = require("c:/Users/sherv/Desktop/Med-Lab/src/backend/MailService");
var moment = require('moment');
var gmailService = new MailService_1.GMailService();
var vaxDate;
var Emails = ['test@gmail.com', 'test1@gmail.com', 'test2@gmail.com'];
if (vaxDate == moment().format(vaxDate)) {
    gmailService.sendMail('< shervinantony28@gmail.com ', 'Hello', 'Hello from gmailService');
}
