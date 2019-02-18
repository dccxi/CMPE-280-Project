// This file contains all js functions for this project
function redirect(loc) {
  window.location.href = loc;
}

// TODO: Implement this to make ajax calls to backend
function getPredictScore(formData) {
  return {
    score: 1.234
  };
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
