import { dataItems } from "./items.js";
console.log(dataItems);
import { dataWeapons } from "./items.js";
console.log(dataWeapons);
import { dataHeroNames } from "./items.js";
console.log(dataHeroNames);
import { dataText } from "./quest-text.js";
console.log(dataText);
import { dataMonster } from "./monster.js";
console.log(dataMonster);

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
let nameHeroChoicePanel = document.getElementsByClassName('enter-your-name-panel')[0];
let textBoxHeroName = document.getElementById('text-area-box');
let heroNameConfirmBtn = document.getElementById('corfim-button');
let panelLost = document.getElementsByClassName('lost-panel')[0];


heroNameConfirmBtn.onclick = function confirmName() {
    let nameHero = textBoxHeroName.value;
    console.log(nameHero)
    if (nameHero === '') {
        let indexName = Math.floor(Math.random() * dataHeroNames.length-1) + 1;
        playerName.innerText = `Name: ${dataHeroNames[indexName]}`;
    } else {
        playerName.innerText = `Name: ${nameHero}`;
    };
    nameHeroChoicePanel.style.display = 'none';
}

function startGivingItem() {
    let numberLengthItems = dataItems.length-1;
    let object = Math.floor(Math.random() * numberLengthItems);
    addItems(dataItems[object])    
}

startGivingItem();
startGivingItem();

// playerName.innerText = "Name: " + prompt("What's your name?");
defenseDisplay.innerText = 10 + Math.floor(Math.random() * 10) + 1;
attackDisplay.innerText = 10 + dataWeapons[1].attack + Math.floor(Math.random() * 10) + 1;
// objectTextDivs[0].innerText = "Eggnog";
weaponTextDivs[0].innerText = dataWeapons[1].name + ' - attack: +' + dataWeapons[1].attack;

// attackDisplay.textContent = Number(attackDisplay.textContent) + 30;

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
    if (indexHealth < 0) {
        indexHealth = 0;
    }
    let fullHearth = new Array(indexHealth).fill('<i class="fa fa-heart" aria-hidden="true"></i>');
    let emptyHearth = new Array(7-indexHealth).fill('<i class="fa fa-heart-o" aria-hidden="true"></i>');
    
    health.innerHTML = fullHearth.concat(emptyHearth).join("");    
}

healthDispenser();

function choice(element, container, uContainer, y, itemArray = "", funcFight ='') {
    element.onclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
        //per togliere vita
        indexHealth-=y;
        
        if (indexHealth <= 0) {
            panelLost.style.display = 'block';
        }
        healthDispenser();
        //per aggiungere item
        if (itemArray != "") {
            addItems(itemArray);   
        }
        //FIGHT
    }; 
}

function choiceFight(element, container, uContainer, y, itemArray = "") {
    element.onclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
        //per togliere vita
        indexHealth-=y;
        
        if (indexHealth <= 0) {
            panelLost.style.display = 'block';
            return;
        }
        healthDispenser();
        //per aggiungere item
        if (itemArray != "") {
            addItems(itemArray);   
        }
        //FIGHT
        fight();
    }; 
}


choice(start, intro, containerOne, 1);
choice(optionOne, containerOne, containerTwo, 0, dataItems[0]);
choiceFight(optionFour, containerTwo, containerThree, 0, dataItems[1]);



function fight() {
        let attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
        let monsterLife = dataMonster[0].life;
        let differenceAtkDfns = attack - dataMonster[0].defense; 
    
    while (monsterLife > 0 && indexHealth > 0) {        
        if (differenceAtkDfns <= -4) {
            indexHealth -= 4;
            monsterLife -= 1;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`You feel like shit, lost four`);            
            alert(`Life monster is ${monsterLife}, you have done only 1 damage`);           
        } else if (differenceAtkDfns > -4 && differenceAtkDfns <= 0) {
            indexHealth -= 3;
            monsterLife -= 2;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`Damn, three lives`);
            alert(`Life monster is ${monsterLife}, you have done only 2 damage`);
        } else if (differenceAtkDfns > 0 && differenceAtkDfns < 4) {
            indexHealth -= 2;
            monsterLife -= 3;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`C--, you lose two`)
            alert(`Life monster is ${monsterLife}, you have done 3 damage`);
        } else if (differenceAtkDfns >= 4 && differenceAtkDfns < 6) {
            indexHealth -= 1;
            monsterLife -= 4;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`Nice hit, you lost only one`);
            alert(`Life monster is ${monsterLife}, you have done 4 damage`);
        } else {
            monsterLife -= 6;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`You are a master, you inflict 6 damage`);
        }
    };
    healthDispenser();
    if (monsterLife <= 0){
        alert('monster dead')
    } else {
        panelLost.style.display = 'block';
    }
    console.log(monsterLife)
}







function eventRemover() {
    yesButton.removeEventListener('click', useItemFirstDiv);
    yesButton.removeEventListener('click', useItemSecondDiv);
    yesButton.removeEventListener('click', useItemThirdDiv);
    yesButton.removeEventListener('click', useItemFourthDiv);
    yesButton.removeEventListener('click', useItemFifthDiv);
    yesButton.removeEventListener('click', useItemSixthDiv);
    yesButton.removeEventListener('click', useItemSeventhDiv);
    yesButton.removeEventListener('click', useItemEighthDiv);
}

function closeConfirmBox() {
    sureDiv.style.display = 'none';
}

objectTextDivs[0].onclick = function() {
    if ((indexHealth <= 6 && this.textContent === "Revive")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFirstDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }    
}

objectTextDivs[1].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSecondDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[2].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemThirdDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[3].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFourthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[4].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFifthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[5].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSixthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[6].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSeventhDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[7].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Revive" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Eggnog")) {
        eventRemover()
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