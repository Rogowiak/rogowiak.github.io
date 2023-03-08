const cardNumber = document.querySelector('.number')
const ownersName = document.querySelector('.ownersName')
const expirationDate = document.querySelector('.expirationDate')
const CVC = document.querySelector('.CVCCode')
const cardNumberInput = document.getElementById('cardNumber')
const ownersNameInput = document.getElementById('name')
const expirationMonthsInput = document.getElementById('expMonth')
const expirationYearsInput = document.getElementById('expYear')
const CVCInput = document.getElementById('CVC')
const Confirm = document.getElementById('confirm')
const nameError = document.getElementById('nameError')
const numberError = document.getElementById('numberError')
const dateError = document.getElementById('dateError')
const cvcError = document.getElementById('CVCerror')
const Errors = document.querySelectorAll('.error')
const form = document.querySelector('.formContent')

let txtInput = ""
let months ="00"
let years ="00"


const getMonths = () =>{
    months = expirationMonthsInput.value
    if (months == "") {months = "00"}
}

const getYears = () =>{
    years = expirationYearsInput.value
    if (years == "") {years = "00"}
}

const updateDate = () => {
    let date = months + "/" + years
    expirationDate.innerText = date
}

const updateData = (data) => {
    data.innerText = txtInput
}

const getData = (data) =>
{
    txtInput = data.value
}

function checkIfBlank(data)
{
    let txt = data.value
    if (txt == "" || txt == undefined){return true}
    else{return false}
}

function hideForm()
{
    form.innerHTML = '<div class="thankYouCard"> <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg> <h1>THANK YOU!</h1> <h4>We have added your card details</h4><button>Continue</button></div>'
    return 1
}

const onlyLetters = (data) =>
{
    data.innerText = "Only letters please!"
}

const cantBeBlank = (data) =>
{
    data.innerText = "Can't be blank!"
}

expirationYearsInput.addEventListener('focusout', () =>
{
    if(checkIfBlank(expirationYearsInput))
    {
        cantBeBlank(dateError)
        expirationYearsInput.style.borderColor = "red"
    }
    else{
        dateError.innerText =""
        expirationYearsInput.style.borderColor = "black"
    }

})

expirationMonthsInput.addEventListener('focusout', () =>
{
    if(checkIfBlank(expirationMonthsInput))
    {
        cantBeBlank(dateError)
        expirationMonthsInput.style.borderColor = "red"
    }
    else{
        dateError.innerText =""
        expirationMonthsInput.style.borderColor = "black"
    }
})

CVCInput.addEventListener('focusout', () =>
{
    if(checkIfBlank(CVCInput))
    {
        cantBeBlank(cvcError)
        CVCInput.style.borderColor = "red"
    }
    else{
        cvcError.innerText =""
        CVCInput.style.borderColor = "black"
    }
})

ownersNameInput.addEventListener('focusout', () =>
{
    if(checkIfBlank(ownersNameInput))
    {
        cantBeBlank(nameError)
        ownersNameInput.style.borderColor = "red"
    }
    else
    {
        nameError.innerText =""
        ownersNameInput.style.borderColor = "black"
    }

})

cardNumberInput.addEventListener('focusout', () =>
{
    if(checkIfBlank(cardNumberInput))
    {
        cantBeBlank(numberError)
        cardNumberInput.style.borderColor = "red"
    }
    else{
        numberError.innerText =""
        cardNumberInput.style.borderColor = "black"
    }
})

cardNumberInput.addEventListener('input', () => {
    getData(cardNumberInput)
    updateData(cardNumber)
})

ownersNameInput.addEventListener('input', () => {
    getData(ownersNameInput)
    updateData(ownersName)
})

CVCInput.addEventListener('input', () => {
    getData(CVCInput)
    updateData(CVC)
})

expirationMonthsInput.addEventListener('input', () => {
    getMonths()
    updateDate()
})

expirationYearsInput.addEventListener('input', () => {
    getYears()
    updateDate()
})


Confirm.addEventListener('click', () => {
    let i = 0
    Errors.forEach(error => {
        if(error.innerText == "")
        {i++
        console.log(i)}
    }
    )
    if (i == 4)
    {
        hideForm()
    }
    else
    {
        alert("Please fill in the form correctly")
    }
} )
