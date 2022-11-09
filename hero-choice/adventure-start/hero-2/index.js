let intro = document.getElementById("introduction");
let start = document.getElementById("starting-button");
let optionOne = document.getElementById("option-1");
let optionTwo = document.getElementById("option-2");
let optionThree = document.getElementById("option-3");
let optionFour = document.getElementById("option-4");
let optionFive = document.getElementById("option-5");
let optionSix = document.getElementById("option-6");

let containerOne = document.getElementById("container-1");
let containerTwo = document.getElementById("container-2");
let containerThree = document.getElementById("container-3");

let objectOne = document.getElementById("object-1");
let objectTwo = document.getElementById("object-2");
let objectThree = document.getElementById("object-3");
let objectFour = document.getElementById("object-4");
let objectFive = document.getElementById("object-5");
let objectSix = document.getElementById("object-6");
let objectSeven = document.getElementById("object-7");
let objectEight = document.getElementById("object-8");

function hiddenContainer(container) {
    container.style.display = "none";
}

hiddenContainer(containerOne);
hiddenContainer(containerTwo);
hiddenContainer(containerThree);

function unveildContainer(uContainer) {
    uContainer.style.display = "block";
}

function choice(element, container, uContainer) {
    element.ondblclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
    }; 
}

// function choiceWithAdd(element, container, uContainer, object) {
//     element.ondblclick = function () {
//         hiddenContainer(container);
//         unveildContainer(uContainer);        
        
//     if (objectOne === "..." ||
//         objectTwo === "..." ||
//         objectThree === "..." ||
//         objectFour === "..." ||
//         objectFive === "..." ||
//         objectSix === "..." ||
//         objectSeven === "..." ||
//         objectEight === "...") {
//             object.innerHTML = "Sword";
//         }        
//     }; 
// }

// choiceWithAdd(optionTwo, containerOne, containerThree, objectOne);


choice(start, intro, containerOne);
choice(optionOne, containerOne, containerTwo);
choice(optionFour, containerTwo, containerThree);
