/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(idOutput) {
    let myNode = document.getElementById(idOutput);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/*
This insert some element to the parent-element. Its argument is: 1 - id of parent element and; 2 - something we want to insert in this parent-element. 
*/
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById(idOutput);
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = Number(document.getElementById(idInput).value);
    return inputValue_1;
}

/*
First task 
*/
function sumAll() {
    let number_1 = getInput("number_1_1");
    let number_2 = getInput("number_1_2");
    let result = 0;
    for(let i = number_1; i <= number_2; i++) {
        result = result + i;
    }
    deleteOutput("container");
    insertOutput("container", `The sume of all numbers are ${result}`);
}

/*
Second task
*/
function findBiggestDivisor() {
    let number_1 = getInput("number_2_1");
    let number_2 = getInput("number_2_2");
    if (number_1 < 0) {
        number_1 = number_1 * (-1);
    }
    if (number_2 < 0) {
        number_2 = number_2 * (-1);
    }
    let result = 1;
    for(let i = 2; i <= number_1; i++) {
        if(number_1 % i === 0 && number_2 % i === 0) {
            result = i;
        }
    }
    deleteOutput("container");
    insertOutput("container", `The largest common divisor is ${result}`);
}

/*
Third task
*/
function findAllDivisor() {
    let numb = getInput("number_3_1");
    deleteOutput("container");
    insertOutput("container", "All divisors of this number are: ");
    if (numb < 0) {
        numb = numb * (-1);
    }
    for (let i = 1; i <= numb; i++) {
        if(numb % i === 0) {
            insertOutput("container", i);
        }
    }
}

/*
Fourh task
*/
function countDigit() {
    let numb = String(getInput("number_4_1"));
    let result = numb.length;
    deleteOutput("container");
    insertOutput("container", `The number of digits are: ${result}`);
}

/*
Fifth task
*/
var numbArray = [];
function addNumberToArray() {
    let numb = getInput("number_5_1");
    if (numb !== Math.floor(numb)) {
        alert("You must enter only number without fractions");
        return;
    }
    numbArray.push(numb);
}

function countStatistic() {
    let min = numbArray.filter(numbA => numbA < 0);
    let zero = numbArray.filter(numbA => numbA === 0);
    let plus = numbArray.filter(numbA => numbA > 0);
    let odd = numbArray.filter(numbA => numbA % 2 !== 0);
    let even = numbArray.filter(numbA => numbA % 2 === 0);
    return statisticArray = [min.length, zero.length, plus.length, odd.length, even.length];
}

function showStatistic() {
    deleteOutput("container");
    addNumberToArray();
    for(let i = 0; i < numbArray.length; i++) {
        insertOutput("container", `${numbArray[i]}`);
    }
    if(numbArray.length < 3) {
        insertOutput("container", `You must enter ${3 - numbArray.length} more numbers`);
    }
    else {
        countStatistic();
        insertOutput("container", `negative: ${statisticArray[0]};    zero: ${statisticArray[1]};    positive: ${statisticArray[2]};    odd: ${statisticArray[3]};    even: ${statisticArray[4]}`);
    }
}

/*
Seventh task
*/
function findShiftNumb() {
    let numb = getInput("number_7_1");
    if (numb !== Math.floor(numb)) {
        alert("You must enter only number without fractions");
        return;
    }
    numb = String(numb);
    let shift = getInput("number_7_2");
    shift = shift % numb.length;
    let numbFirstPart = numb.slice(shift);
    let numbSecondPart = numb.slice(0, shift);
    let newNumb = numbFirstPart + numbSecondPart;
    deleteOutput("container");
    insertOutput("container", `The new number is: ${newNumb}`);
}

/*
Nineth task
*/
function showMuptiple() {
    deleteOutput("container");
    let numb_1 = getInput("number_9_1");
    let numb_2 = getInput("number_9_2");
    for(let i = numb_1; i <= numb_2; i++) {
        for(let j = 1; j <= 10; j++) {
            insertOutput("container", `${i} * ${j} = ${i * j}`);
        }
    }
}

