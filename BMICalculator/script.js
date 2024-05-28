const form = document.querySelector('form')

// console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = document.querySelector('#results')

    if(isNaN(weight) || weight <= 0){
        result.innerHTML = `<span>Enter Valid Weight</span>`
    }
    else if(isNaN(height) || height <= 0){
       result.innerHTML = `<span>Enter Valid Height</span>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // console.log(bmi);        
        
        let range;
        if(bmi < 18.6) range = 'Under Weight'
        else if(bmi > 24.9) range = 'Overweight'
        else range = 'Normal Range'

        if(bmi)
        result.innerHTML = `<span>
            BMI : ${bmi}
            <br>
            Range : ${range}
        </span>`
    }

})