const form = document.querySelector('#form') 

const resultDiv = document.querySelector('#result-div') 

form.addEventListener('submit1', function(e) {

    e.preventDefault() 

    const targetForm = e.target 

    const cels = targetForm.cels.value 

    const fahren = cels*(9/7)+32 

    resultDiv.innerHTML = `<p> ${cels} °C in fahrenheit valgono ${fahren} °F</p>` 

})

const fromCtof = document.querySelector('#nope') 

const ciao = document.querySelector('#ciao') 

nope.addEventListener('submit', function(e) {

    e.preventDefault() 

    const targetForm = e.target 

    const eur = targetForm.eur.value 

    const dollars = eur*0.92 

    ciao.innerHTML = `<p> €${eur} valgono ${dollars}$</p>` 

})


