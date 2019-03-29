var deleteDoc = function (e) {
  var id = e.parentNode.id;
  if (confirm("Confirm to delete document (id " + id + ")")) {
    fetch('/admission/delete/' + id, {
      method: 'DELETE'
    }).
      then(res => res.json()).
      then(res => {
        if (res.status) {
          document.getElementById(id).remove()
          alert('document with id ' + id + ' was deleted successfully')
        } else {
          throw new Error('delete failed on server side')
        }
      }).
      catch(err => {
        console.error(err)
        alert('delete failed')
      })
  }
}

var updateDoc = function (e) {
  var parent = e.parentNode;
  var id = parent.id;
  var toefl_score = Number(parent.childNodes[1].value);
  var gre_score = Number(parent.childNodes[3].value);
  fetch('/admission/update/'+id, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      toefl_score,
      gre_score
    })
  }).then(res => res.json())
    .then(res => {
      if (res.status) {
        alert('document with id ' + id + ' was updated successfully')
      } else {
        throw new Error('update failed on server side')
      }
    }).catch(err => {
      console.error(err)
      alert('update failed')
    })
}

document.getElementById('create_one').addEventListener('click', function (e) {
  e.preventDefault()
  if (isValidById('create_toefl', 'create_gre')) {
    var form = document.getElementById('create-form');
    var formData = new FormData(form);
    var body = new URLSearchParams(formData)
    fetch('/admission/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body
    }).then(res => res.json())
      .then(res => {
        if (res.status) {
          alert('document with id ' + res.id + ' was created successfully')
        } else {
          throw new Error('create failed on server side')
        }
      }).catch(err => {
        console.error(err)
        alert('create failed')
      })
  } else {
    alert('Please fill all required fields, and make sure the numbers are in range.')
  }
})
