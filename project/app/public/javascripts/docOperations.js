var deleteDoc = function (e) {
  // TODO:
  // send POST request to /delete route
  // when success, remove div
  // when fail, alert
  console.log(e.parentNode.id)
}

var updateDoc = function (e) {
  var parent = e.parentNode;
  var id = parent.id;
  var toefl = parent.childNodes[1].value;
  var gre = parent.childNodes[3].value;
  // TODO:
  // send POST request to /update route
  // ...
}

document.getElementById('create_one').addEventListener('click', function (e) {
  e.preventDefault()
  if (isValidById('create_toefl', 'create_gre')) {
    var form = document.getElementById('create-form');
    var formData = new FormData(form);
    //
    for(var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    //
    var body = new URLSearchParams(formData)
    // TODO:
    // send POST request to /create route
  } else {
    alert('Please fill all required fields, and make sure the numbers are in range.')
  }
})
