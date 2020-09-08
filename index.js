const EmailValidator = require('email-deep-validator');
const nev = require('node-email-validator');
const emailExistence = require('email-existence');

const email = "pegsbusiness@earthlink.net"; // 'ggg@hotmail.com'; 'otherisp@hotmail.com' ; // 'otherisp@hotmail.com'; // 'ry19921@comcast.net'
(async () => {
  const emailValidator = new EmailValidator({ timeout: 3000, logger: console });
  try {
    const emailValidatorResult = await emailValidator.verify(email);
    console.log('TCL: emailValidatorResult', emailValidatorResult);
  } catch (err) {
    console.log('emailValidator.verify err', err);
  }
/*
  try {
    const r = await nev(email);
    console.log(r);
  } catch(err) {
    console.log(err)
  }

  emailExistence.check(email, function(error, response){
    console.log('TCL: error', error);
    console.log('res: '+response);
  });
  */
})()
