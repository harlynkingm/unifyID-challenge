/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */

 let fields = {
   facebook: {
     username: '#email',
     password: '#pass',
     submit: '#loginbutton'
   },
   paypal: {
     username: '#email',
     password: '#password',
     submit: '#btnLogin'
   },
   instagram: {
     username: 'input[name="username"]',
     password: 'input[name="password"]',
     submit: 'span button'
   },
   bankofamerica: {
     username: '#onlineId1',
     password: '#passcode1',
     submit: '#hp-sign-in-btn'
   },
   citi: {
     username: '#usernameMasked',
     password: '#password',
     submit: '#signInBtn'
   },
   yahoo: {
     username: '#login-username',
     password: '#login-passwd',
     submit: '#login-signin'
   }
 }

function getUsernameField() {
  let currentSite = detectSite(window.location.href);
  if (currentSite){
    return $(fields[currentSite].username);
  } else {
    return $("");
  }
}

function getPasswordField() {
  let currentSite = detectSite(window.location.href);
  if (currentSite){
    return $(fields[currentSite].password);
  } else {
    return $("");
  }
}

function getFormField() {
  return getUsernameField().closest('form');
}

function getSubmitButton() {
  let currentSite = detectSite(window.location.href);
  if (currentSite){
    return $(fields[currentSite].submit);
  } else {
    return $("");
  }
}

function detectSite(url){
  if (url.includes('facebook.com')){
    return 'facebook';
  } else if (url.includes('paypal.com')){
    return 'paypal';
  } else if (url.includes('instagram.com')){
    return 'instagram';
  } else if (url.includes('bankofamerica.com')){
    return 'bankofamerica';
  } else if (url.includes('citi.com')){
    return 'citi';
  } else if (url.includes('yahoo.com')){
    return 'yahoo';
  } else {
    return '';
  }
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

  reroute();

  let usernameField = getUsernameField();
  let passwordField = getPasswordField();

  usernameField.val(username);
  passwordField.val(password);

  setTimeout(() => {
  	getSubmitButton().click();
  }, 1000);

};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

  reroute();

  return {
    form: getFormField(),
    submitButton: getSubmitButton(),
    username: getUsernameField(),
    password: getPasswordField()
  };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

  reroute();

  return {
    username: getUsernameField().val(),
    password: getPasswordField().val()
  };

};

function reroute(){
    let currentSite = detectSite(window.location.href);
    if (currentSite == 'paypal'){
      if (!window.location.href.includes('paypal.com/signin')){
        window.location.href = 'https://www.paypal.com/signin';
      }
    }
}
