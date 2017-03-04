function colorizeField(element, color) {
  let $elem = $(element);
  $elem.attr('style', $elem.attr('style') + '; ' + 'border: 3px solid '+color+' !important');
}

window.colorDetectFields = function() {
  let fields = window.detectFormFields();
  if (!fields.form) {
    console.log('Could not detect form');
    return;
  }
  if (!fields.submitButton) {
    console.log('Could not detect submitButton');
    return;
  }
  if (!fields.username) {
    console.log('Could not detect username');
    return;
  }
  if (!fields.password) {
    console.log('Could not detect password');
    return;
  }
  colorizeField(fields.form, 'blue');
  colorizeField(fields.submitButton, 'blue');
  colorizeField(fields.username, 'blue');
  colorizeField(fields.password, 'blue');
}

window.triggerObtainValues = function() {
  let result = window.obtainFieldsValues();
  console.log(result);
  if (!result.username) {
    console.log('No Username retrieved');
    return;
  }
  if(!result.password) {
    console.log('No password retrieved');
    return;
  }
  console.log('Username: '+result.username+'; Password: '+result.password);
}
