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
          result.innerHTML = '';
          var node = document.createElement('tr')
          node.innerHTML = `
            <th>ID</th>
            <th>GRE</th>
            <th>TOEFL</th>`
          result.appendChild(node)

          for (var admission of admissions) {
            var node = document.createElement('tr')

            node.innerHTML = `
            <td>${admission._id}</td>
            <td>${admission.gre_score}</td>
            <td>${admission.toefl_score}</td>`
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
