

function plus(){
    // var number1 = document.querySelector('.number1').value
    // var number2 = document.querySelector('.number2').value
    // var result = document.querySelector('.result')

    // number1 = parseInt(number1)

    // number2 = parseInt(number2)

    // let res = number1 + number2

    // result.innerHTML = res

    result.innerHTML = parseInt(document.querySelector('.number1').value) + parseInt(document.querySelector('.number2').value)
}


function minus(){
    var number1 = document.querySelector('.number1').value
    var number2 = document.querySelector('.number2').value
    var result = document.querySelector('.result')

    number1 = parseInt(number1)

    number2 = parseInt(number2)

    let res = number1 - number2

    result.innerHTML = res
}


function multi(){
    var number1 = document.querySelector('.number1').value
    var number2 = document.querySelector('.number2').value
    var result = document.querySelector('.result')

    number1 = parseInt(number1)

    number2 = parseInt(number2)

    let res = number1 * number2

    result.innerHTML = res
}



function del(){
    var number1 = document.querySelector('.number1').value
    var number2 = document.querySelector('.number2').value
    var result = document.querySelector('.result')

    number1 = parseInt(number1)

    number2 = parseInt(number2)

    let res = number1 / number2

    result.innerHTML = res
}

function clear(){
    var number1 = document.querySelector('.number1').value
    var number2 = document.querySelector('.number2').value

    number1 = ''
    number2 = ''
}