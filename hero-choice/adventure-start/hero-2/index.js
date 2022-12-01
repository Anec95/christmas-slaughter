import { dataItems } from "./items.js";
console.log(dataItems);
import { dataWeapons } from "./items.js";
console.log(dataWeapons);
import { dataText } from "./quest-text.js";
console.log(dataText);

let playerName = document.getElementsByClassName('hero-name')[0];
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


let cancelButton = document.getElementsByClassName("fa-times-circle-o");
let sureDiv = document.getElementById("items-yes-no");
let sureDivText = document.getElementById("remove-text");
let defenseDisplay = document.getElementsByClassName("numb-stat")[0];
let attackDisplay = document.getElementsByClassName("numb-stat")[1];
let objectTextDivs = document.getElementsByClassName('object-name');
let weaponTextDivs = document.getElementsByClassName('weapon-name');
let yesButton = document.getElementById('remove-yes');
let noButton = document.getElementById('remove-no');

playerName.innerText = "Name: " + prompt("What's your name?");
defenseDisplay.innerText = 10 + Math.floor(Math.random() * 10) + 1;
attackDisplay.innerText = 10 + dataWeapons[1].attack + Math.floor(Math.random() * 10) + 1;
objectTextDivs[0].innerText = "Eggnog";
weaponTextDivs[0].innerText = dataWeapons[1].name + ' - attack: +' + dataWeapons[1].attack;

function hiddenContainer(container) {
    container.style.display = "none";
}

hiddenContainer(containerOne);
hiddenContainer(containerTwo);
hiddenContainer(containerThree);

function unveildContainer(uContainer) {
    uContainer.style.display = "block";
}

function addItems(itemArray) {
    for (let i = 0; i < objectTextDivs.length; i++) {
        if (objectTextDivs[i].textContent === "...") {
            objectTextDivs[i].innerText = itemArray.name;
            break;
        } else if (i === objectTextDivs.length-1 && objectTextDivs[i].textContent != "...") {
            alert("you have no more space");
        }

    }
}

const health = document.getElementsByClassName("health")[0];
let indexHealth = 7;

function healthDispenser() {
    let fullHearth = new Array(indexHealth).fill('<i class="fa fa-heart" aria-hidden="true"></i>');
    let emptyHearth = new Array(7-indexHealth).fill('<i class="fa fa-heart-o" aria-hidden="true"></i>');

    health.innerHTML = fullHearth.concat(emptyHearth).join("");
}

healthDispenser();

function choice(element, container, uContainer, y, itemArray = "") {
    element.onclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
        //per togliere vita
        indexHealth-=y;
        
        if (indexHealth <= 0) {
            alert("You are died")
            return;
        }
        healthDispenser();
        //per aggiungere item
        if (itemArray != "") {
            addItems(itemArray);   
        }
             
    }; 
}


choice(start, intro, containerOne, 0);
choice(optionOne, containerOne, containerTwo, 1, dataItems[0]);
choice(optionFour, containerTwo, containerThree, 3, dataItems[1]);










// function eventRemover() {
//     yesButton.removeEventListener('click', useItemFirstDiv);
//     yesButton.removeEventListener('click', useItemSecondDiv);
// }

function closeConfirmBox() {
    sureDiv.style.display = 'none';
}

objectTextDivs[0].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFirstDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }    
}

objectTextDivs[1].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSecondDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[2].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemThirdDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[3].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFourthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[4].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFifthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[5].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSixthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[6].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSeventhDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[7].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        // eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemEighthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

function whichItem(number) {
    if (indexHealth < 6 &&
        objectTextDivs[number].textContent === 'Revive') {
        indexHealth += 2;        
    } else if (indexHealth === 6 &&
        objectTextDivs[number].textContent === 'Revive') {
        indexHealth += 1;
    } else if (indexHealth <= 6 &&
        objectTextDivs[number].textContent === 'Candy apple') {
        indexHealth += 1;        
    } else if (indexHealth < 5 &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 3;
    } else if (indexHealth === 5  &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 2;
    } else if (indexHealth === 6  &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 1;
    }
    objectTextDivs[number].innerText = '...';
    healthDispenser();
}

function useItemFirstDiv() {
    whichItem(0)
    closeConfirmBox()
}

function useItemSecondDiv() {
    whichItem(1)
    closeConfirmBox()
}

function useItemThirdDiv() {
    whichItem(2)
    closeConfirmBox()    
}

function useItemFourthDiv() {
    whichItem(3)
    closeConfirmBox()    
}

function useItemFifthDiv() {
    whichItem(4)
    closeConfirmBox()    
}

function useItemSixthDiv() {
    whichItem(5)
    closeConfirmBox()    
}

function useItemSeventhDiv() {
    whichItem(6)
    closeConfirmBox()    
}

function useItemEighthDiv() {
    whichItem(7)
    closeConfirmBox()    
}