// This file contains all js functions for this project
function redirect(loc) {
  window.location.href = loc;
}

// check valid input by ID
function isValidById() {
  var flag = true;
  for (i = 0; i < arguments.length; ++i) {
    flag = flag && document.getElementById(arguments[i]).checkValidity();
  }
  return flag;
}

// clear the result
function clearResult() {
  document.getElementById('prediction-result').innerHTML = '';
}
