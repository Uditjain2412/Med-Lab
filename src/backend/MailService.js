"use strict";
exports.__esModule = true;
exports.GMailService = void 0;
var nodemailer = require("nodemailer");
var GMailService = /** @class */ (function () {
    function GMailService() {
        this._transporter = nodemailer.createTransport("smtps://<username>%40gmail.com:<password>@smtp.gmail.com");
    }
    GMailService.prototype.sendMail = function (to, subject, content) {
        var options = {
            from: 'from_test@gmail.com',
            to: to,
            subject: subject,
            text: content
        };
        this._transporter.sendMail(options, function (error, info) {
            if (error) {
                return console.log("error: " + error);
            }
            console.log("Message Sent " + info.response);
        });
    };
    return GMailService;
}());
exports.GMailService = GMailService;
