const calc = document.querySelector(".calculator")
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation')
const deleteKey = document.querySelector('.delete')
const equals = document.querySelector('.equals')
const reset = document.querySelector('.reset')
const display = document.querySelector('.display')
const themeSelector = document.querySelector(".slider")
const selectorDot = document.querySelector(".selector")

let operator = null
let recentNumber = null
let currentNumber = null
let theme = 1

themeSelector.addEventListener("click", changeTheme)

function changeTheme() {
    theme = theme + 1
    if(theme % 3 == 1)
    {
        document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
        document.body.style.color = "hsl(0, 0%, 100%)"
        calc.style.backgroundColor = "hsl(223, 31%, 20%)"
        display.style.backgroundColor = "hsl(224, 36%, 15%)"
        numbers.forEach((num) => {
            num.style.backgroundColor = "hsl(30, 25%, 89%)"
            num.style.color = "hsl(221, 14%, 31%)"
            num.style.boxShadow = "0px 5px 0px hsl(28, 16%, 65%)"
        })
        operators.forEach((operator) => {
            operator.style.backgroundColor = "hsl(30, 25%, 89%)"
            operator.style.color = "hsl(221, 14%, 31%)"
            operator.style.boxShadow = "0px 5px 0px hsl(28, 16%, 65%)"
        })
        equals.style.backgroundColor = "hsl(6, 63%, 50%)"
        equals.style.color = "hsl(0, 0%, 100%)"
        equals.style.boxShadow = "0px 5px 0px hsl(6, 70%, 34%)"
        reset.style.backgroundColor = "hsl(225, 21%, 49%)"
        reset.style.color = "hsl(0, 0%, 100%)"
        reset.style.boxShadow = "0px 5px 0px hsl(224, 28%, 35%)"
        deleteKey.style.backgroundColor = "hsl(225, 21%, 49%)"
        deleteKey.style.color = "hsl(0, 0%, 100%)"
        deleteKey.style.boxShadow = "0px 5px 0px hsl(224, 28%, 35%)"
        themeSelector.style.backgroundColor = "hsl(223, 31%, 20%)"
        selectorDot.style.backgroundColor = "hsl(6, 63%, 50%)"
        themeSelector.style.justifyContent = "center";
        themeSelector.style.justifyContent = "flex-start";
    }
    if(theme % 3 == 2)
    {
        document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
        document.body.style.color = "hsl(60, 10%, 19%)"
        calc.style.backgroundColor = "hsl(0, 5%, 81%)"
        display.style.backgroundColor = "hsl(0, 0%, 93%)"
        numbers.forEach((num) => {
            num.style.backgroundColor = "hsl(0, 0%, 100%)"
            num.style.color = "hsl(60, 10%, 19%)"
            num.style.boxShadow = "0px 5px 0px hsl(35, 11%, 61%)"
        })
        operators.forEach((operator) => {
            operator.style.backgroundColor = "hsl(0, 0%, 100%)"
            operator.style.color = "hsl(60, 10%, 19%)"
            operator.style.boxShadow = "0px 5px 0px hsl(35, 11%, 61%)"
        })
        equals.style.backgroundColor = "hsl(25, 98%, 40%)"
        equals.style.color = "hsl(60, 10%, 19%)"
        equals.style.boxShadow = "0px 5px 0px hsl(25, 99%, 27%)"
        reset.style.backgroundColor = "hsl(185, 42%, 37%)"
        reset.style.color = "hsl(60, 10%, 19%)"
        reset.style.boxShadow = "0px 5px 0px hsl(185, 58%, 25%)"
        deleteKey.style.backgroundColor = "hsl(185, 42%, 37%)"
        deleteKey.style.color = "hsl(60, 10%, 19%)"
        deleteKey.style.boxShadow = "0px 5px 0px hsl(185, 58%, 25%)"
        themeSelector.style.backgroundColor = "hsl(0, 5%, 81%)"
        selectorDot.style.backgroundColor = "hsl(25, 98%, 40%)"
        themeSelector.style.justifyContent = "center";
    }if(theme % 3 == 0)
    {
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
        document.body.style.color = "hsl(52, 100%, 62%)"
        calc.style.backgroundColor = "hsl(268, 71%, 12%)"
        display.style.backgroundColor = "hsl(268, 71%, 12%)"
        numbers.forEach((num) => {
            num.style.backgroundColor = "hsl(268, 47%, 21%)"
            num.style.color = "hsl(52, 100%, 62%)"
            num.style.boxShadow = "0px 5px 0px hsl(290, 70%, 36%)"
        })
        operators.forEach((operator) => {
            operator.style.backgroundColor = "hsl(268, 47%, 21%)"
            operator.style.color = "hsl(52, 100%, 62%)"
            operator.style.boxShadow = "0px 5px 0px hsl(290, 70%, 36%)"
        })
        equals.style.backgroundColor = "hsl(176, 100%, 44%)"
        equals.style.color = "hsl(198, 20%, 13%)"
        equals.style.boxShadow = "0px 5px 0px hsl(177, 92%, 70%)"
        reset.style.backgroundColor = "hsl(281, 89%, 26%)"
        reset.style.color = "hsl(0, 0%, 100%)"
        reset.style.boxShadow = "0px 5px 0px hsl(285, 91%, 52%)"
        deleteKey.style.backgroundColor = "hsl(281, 89%, 26%)"
        deleteKey.style.color = "hsl(0, 0%, 100%)"
        deleteKey.style.boxShadow = "0px 5px 0px hsl(285, 91%, 52%)"
        themeSelector.style.backgroundColor = "hsl(268, 71%, 12%)"
        selectorDot.style.backgroundColor = "hsl(176, 100%, 44%)"
        themeSelector.style.justifyContent = "flex-end";
    }

}

reset.addEventListener("click", clearAll)

function clearAll() {
    display.innerHTML = "0";
}

deleteKey.addEventListener("click", clear)

function clear() {
    if(display.innerText != null){
        display.innerText = display.innerText.slice(0,-1)
    }
    if(display.innerText == "")
    {
        display.innerText = "0";
    }
}

numbers.forEach((num) => {
    num.addEventListener("click", () => {
        if(display.innerText == "0")
        {
            display.innerText = num.innerText
        }
        else{
            display.innerText = display.innerText + num.innerText
        } 
    } 
    )
}
)

operators.forEach((op) => {
    op.addEventListener("click", () => {
    recentNumber = parseFloat(display.innerText)
    operator = op.innerText
    display.innerHTML = "0"
    })   
})

function calculate(){
    let result = 0
    if (operator == "+"){
        result = recentNumber + currentNumber
    }
    if (operator == "-"){
        result = recentNumber - currentNumber
    }
    if (operator == "/"){
        result = recentNumber / currentNumber
    }
    if (operator == "x"){
        result = recentNumber * currentNumber
    }
    return result
}

equals.addEventListener("click", () => {
    currentNumber = parseFloat(display.innerText)
    display.innerText = calculate()
})