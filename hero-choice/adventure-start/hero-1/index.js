let optionOne = document.getElementById("option-1");
let optionTwo = document.getElementById("option-2");
let optionThree = document.getElementById("option-3");
let optionFour = docment.getElementById("option-4");
let optionFive = document.getElementById("option-5");
let optionSix = document.getElementById("option-6");
let optionSeven = document.getElementById("option-7");
let optionEight = document.getElementById("option-8");
let optionNine = document.getElementById("option-9");
let optionTen = document.getElementById("option-10");
let optionEleven = document.getElementById("option-11");
let optionTwelve = document.getElementById("option-12");

let containerOne = document.getElementById("container-1");
let containerTwo = document.getElementById("container-2");
let containerThree = document.getElementById("container-3");
let containerFour = document.getElementById("container-4");

function hiddenContainer(container) {
    container.style.display = "none";
}

function unveildContainer(container) {
    container.style.display = "block";
}

function choice() {
    if (optionOne.ondblclick == true) {
        containerOne = hiddenContainer(containerOne);
        containerTwo = unveildContainer(containerTwo);
    } else if (optionTwo.ondblclick == true) {
        containerOne = hiddenContainer(containerOne);
        containerThree = unveildContainer(containerThree);
    } else {
        containerOne = unveildContainer(containerOne); 
    }
}



// function displayThirdOut() {
//     if (optionThree.textContent === "") {
//         optionThree.style.display = "none";
//     } else {
//         optionThree.style.display = "block";
//     }
// }

// displayThirdOut();

// optionOne.ondblclick = function () {
//     optionOne.innerHTML = "Take another decision";
//     optionTwo.innerHTML = "Take another decision";
//     optionThree.innerHTML = "Take another decision";

//     displayThirdOut();
// }