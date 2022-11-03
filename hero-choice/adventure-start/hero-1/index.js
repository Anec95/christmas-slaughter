let optionOne = document.getElementById("option-1");
let optionTwo = document.getElementById("option-2");
let optionThree = document.getElementById("option-3");

function displayThirdOut() {
    if (optionThree.textContent === "") {
        optionThree.style.display = "none";
    } else {
        optionThree.style.display = "block";
    }
}

displayThirdOut();

optionOne.onclick = function () {
    optionOne.innerHTML = "Take another decision";
    optionTwo.innerHTML = "Take another decision";
    optionThree.innerHTML = "Take another decision";

    displayThirdOut();
}

