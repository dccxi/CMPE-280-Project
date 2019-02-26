//- modify DOM to show the result when send prediction
document.getElementById('predict-submit').addEventListener('click', function (e) {
  e.preventDefault()
  if (isValidById('name', 'gre', 'toefl')) {
    //- construct the form from scratch
    var form = document.getElementById('predict-form');
    var formData = new FormData(form);
    var body = new URLSearchParams(formData)
    //- pull results
    fetch('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body
    }).then(res => res.json())
      .catch(function (err) {
        console.error(err)
      }).then(function (res) {
        //- display result
        var { status, result } = res;
        var name = document.getElementById('name').value;
        var gre = document.getElementById('gre').value;
        var toefl = document.getElementById('toefl').value;
        var resultText = status ? `Hi, ${name}. According to your GRE & TOEFL scores ${gre} and ${toefl}. We predict your chance to be admitted to UCLA to be ${result}%.` : result;
        document.getElementById('prediction-result').innerHTML = resultText;
      })
  } else {
    //- not all inputs are valid
    alert('Please fill all required fields, and make sure the numbers are in range.')
  }
})
