document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        let bmi = weight / (height * height);
        document.getElementById('result').innerText = 'Your BMI is: ' + bmi.toFixed(2);
    } else {
        document.getElementById('result').innerText = 'Please enter valid height and weight values.';
    }
});
