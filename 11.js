var fs = require('fs');

fs.appendFileSync("11.txt","\n Вот я и записался!");

var fileContent = fs.readFileSync("11.txt","utf8");
console.log(fileContent);
// mail
var mailer = require('nodemailer');

var trns = mailer.createTransport({
    service: "Gmail",
    auth: {
        user: "otinov2009@gmail.com",
        pass: "4q7vj1qwerty17"
    }
});

var mail = {
    from: 'otinov2009@gmail.com',
  	to: 'long_tongue@gmail.com',
  	subject: 'письмо на почту',
  	text: 'TEXT TEXT from nodik'
}

trns.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

});