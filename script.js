let numInput = document.querySelector("#numInput")
let input = 0
let newInput = 0

//DECLARING BUTTONS
let clear = document.querySelector("#btn-clear")
let back = document.querySelector("#btn-back")
let percent = document.querySelector("#btn-percent")
let decimal = document.querySelector("#btn-decimal")
let plus = document.querySelector("#btn-plus")
let minus = document.querySelector("#btn-minus")
let times = document.querySelector("#btn-times")
let divide = document.querySelector("#btn-divide")
let equals = document.querySelector("#btn-equals")


//DECLARING BUTTONS OF NUMBERS
let numberZero = document.querySelector("#btn-zero")
let numberOne = document.querySelector("#btn-one")
let numberTwo = document.querySelector("#btn-two")
let numberThree = document.querySelector("#btn-three")
let numberFour = document.querySelector("#btn-four")
let numberFive = document.querySelector("#btn-five")
let numberSix = document.querySelector("#btn-six")
let numberSeven = document.querySelector("#btn-seven")
let numberEight = document.querySelector("#btn-eight")
let numberNine = document.querySelector("#btn-nine")

//FUNCTION FOR WRITING NUMBERS TO INPUT
function addNumber(num){
    newInput = num
    numInput.innerHTML = input + newInput
    input = numInput.innerHTML
}

//FUNCTION FOR REMOVING ONE SYMBOL
function removeSymbol(){
    newInput = input
    newInput = newInput.slice(0,-1)
    input = ""
    addNumber(newInput)
    input = newInput
} 

//FUNCTION FOR CLEARING DUPLICATE SYMBOLS
function checkSymbol(sym){
    let lastSymbol = numInput.textContent[numInput.textContent.length - 1]

    if(lastSymbol !== sym ){
        if(lastSymbol == "." || lastSymbol == "+" || lastSymbol == "-" || lastSymbol == "*" || lastSymbol == "/"){
            removeSymbol()
        }
        addNumber(sym)
    }else{
        return 0
    }

}

//CLEARING INPUT
clear.addEventListener("click",function(event){
    input = 0
    newInput = 0
    numInput.innerHTML = Number(0)
})

//REMOVING ONE SYMBOL FROM INPUT 
back.addEventListener("click",function(event){
    removeSymbol() 
})

//PERCENT BUTTON
percent.addEventListener("click",function(event){
    newInput = ((numInput.innerHTML / 100) * 100) / 100
    input = ""
    addNumber(newInput)
    input = newInput
})

//EVENT LISTENER FOR NUMBERS
numberZero.addEventListener("click",function(event){
    addNumber(0)
})

numberOne.addEventListener("click",function(event){
    addNumber(1)
})

numberTwo.addEventListener("click",function(event){
    addNumber(2)
})

numberThree.addEventListener("click",function(event){
    addNumber(3)
})

numberFour.addEventListener("click",function(event){
    addNumber(4)
})

numberFive.addEventListener("click",function(event){
    addNumber(5)
})

numberSix.addEventListener("click",function(event){
    addNumber(6)
})

numberSeven.addEventListener("click",function(event){
    addNumber(7)
})

numberEight.addEventListener("click",function(event){
    addNumber(8)
})

numberNine.addEventListener("click",function(event){
    addNumber(9)
})

//EVENT LISTENER FOR SYMBOLS
decimal.addEventListener("click",function(event){
    checkSymbol(".")
})

plus.addEventListener("click",function(event){
    checkSymbol("+")
})

minus.addEventListener("click",function(event){
    checkSymbol("-")
})

times.addEventListener("click",function(event){
    checkSymbol("*")
})

divide.addEventListener("click",function(event){
    checkSymbol("/")
})

equals.addEventListener("click",function(event){
    newInput = eval(numInput.innerHTML)
    input = ""
    addNumber(newInput)
    input = String(newInput)
})