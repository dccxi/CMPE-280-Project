//- modify DOM to show the result when send prediction
document.getElementById('search_button').addEventListener('click', function (e) {
  e.preventDefault()
  var form = document.getElementById('search-form')
  var formData = new FormData(form)
  var body = new URLSearchParams(formData)
  if (body.get('gre_lower_bound') <= body.get('gre_upper_bound') && body.get('toefl_lower_bound') <= body.get('toefl_upper_bound')) {
    fetch('/admission/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body
    }).then(res => res.json())
      .then(res => {
        if (res.status) {
          // populate results from payload
          var admissions = res.payload
          var result = document.getElementById('search_result');
          for (var admission of admissions) {
            var node = document.createElement('div')
            node.innerHTML = `
              <p>Document ID: ${admission._id}</p>
              <p>GRE: ${admission.gre_score}</p>
              <p>TOEFL: ${admission.toefl_score}</p>
              <br>`
            result.appendChild(node)
          }
        } else {
          throw new Error('search failed on server side')
        }
      }).catch(err => {
        console.error(err)
        alert('search failed')
      })
  } else {
    alert('Please make sure lower bound does not exceed upper bound')
  }
})
