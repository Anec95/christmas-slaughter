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
let weaponCont = document.getElementsByClassName('weapon');
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
    let sliceInitItems = dataItems.length-1;
    let object = Math.floor(Math.random() * Number(sliceInitItems));
    addItems(dataItems[object])    
}

startGivingItem();
startGivingItem();


let defenseHero = 10 + Math.floor(Math.random() * 10) + 1;
let attackHero = 10 + Math.floor(Math.random() * 10) + 1;
weaponTextDivs[0].innerText = dataWeapons[1].name //+ ' - attack: +' + dataWeapons[1].attack;
weaponTextDivs[1].innerText = dataWeapons[0].name //+ ' - attack: +' + dataWeapons[1].attack;

function displayHeroDefense(adds) {
    if (defenseHero < 0) {
        defenseHero = 0;
    }
    defenseDisplay.innerText = defenseHero + adds;
}

displayHeroDefense(0);

function displayHeroAttack(adds) {
    attackDisplay.innerText = attackHero + adds;
}

displayHeroAttack(0);

function addItems(itemArray) {
    for (let i = 0; i < objectTextDivs.length; i++) {
        if (objectTextDivs[i].textContent === "...") {
            objectTextDivs[i].innerText = itemArray.name;
            break;
        } else if (i === objectTextDivs.length-1 && objectTextDivs[i].textContent != "...") {
            alert("you have no more space");
        }
        if (itemArray.name === 'Engraved talisman') {
            displayHeroDefense(1)
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

function fight(numberMonster) {
    let attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
    let monsterLife = dataMonster[numberMonster].life;
    let differenceAtkDfns = attack - dataMonster[numberMonster].defense;
    if (defenseHero < 0) {
        defenseHero = 0;
    }

    while (monsterLife > 0 && indexHealth > 0) {    
        if (differenceAtkDfns <= -8) {
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            if (Number(defenseDisplay.textContent) > 1) {
                indexHealth -= 4;
                defenseHero -= 4;
                alert(`Your leather armor parries four blows, but the damage is too great. You lose four!`);
            } else {
                indexHealth -= 6;
                alert(`The difference between you and your opponent is huge. You cannot escape!`);
            }        
            alert(`Life monster is ${monsterLife}, you have done only 1 damage`);
        } else if (differenceAtkDfns <= -4 && differenceAtkDfns > -8) {        
            monsterLife -= 1;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            if (Number(defenseDisplay.textContent) > 1) {
                indexHealth -= 3;
                defenseHero -= 3;
                alert(`Your leather armor parries three blows, but the damage is too great. You lose three!`);
            } else {
                indexHealth -= 4;
                alert(`You feel like shit, lost four`);
            }        
            alert(`Life monster is ${monsterLife}, you have done only 1 damage`);   

        } else if (differenceAtkDfns > -4 && differenceAtkDfns <= 0) {        
            monsterLife -= 2;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            if (Number(defenseDisplay.textContent) > 1) {
                indexHealth -= 2;
                defenseHero -= 2;
                alert(`Your leather armor parries two blows, but the damage is too great. You lose two!`);
            } else {
                indexHealth -= 3;
                alert(`Damn, three lives`);                
            }
            alert(`Life monster is ${monsterLife}, you have done only 2 damage`);

        } else if (differenceAtkDfns > 0 && differenceAtkDfns < 4) {            
            monsterLife -= 3;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            if (Number(defenseDisplay.textContent) > 1) {
                indexHealth -= 1;
                defenseHero -= 2;
                alert(`Your leather armor parries two blows. You lose one!`);
            } else {
                indexHealth -= 2;
                alert(`C--, you lose two`);                
            }
            alert(`Life monster is ${monsterLife}, you have done 3 damage`);

        } else if (differenceAtkDfns >= 4 && differenceAtkDfns < 6) {            
            monsterLife -= 4;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            if (Number(defenseDisplay.textContent) > 1) {
                defenseHero -= 1;
                alert(`Puah! Only one damage on your leather armor`);
            } else {
                indexHealth -= 1;
                alert(`Nice hit, you lost only one`);
            }            
            alert(`Life monster is ${monsterLife}, you have done 4 damage`);

        } else if (differenceAtkDfns >= 6) {
            monsterLife -= 6;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
            alert(`You are a master, you inflict 6 damage`);
        }
    };
    displayHeroDefense(0);
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
    if ((indexHealth <= 6 && this.textContent === "Eggnog")
        || (indexHealth <= 6 && this.textContent === "Candy apple")
        || (indexHealth <= 6 && this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFirstDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }    
}

objectTextDivs[1].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSecondDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[2].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemThirdDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[3].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFourthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[4].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemFifthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[5].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSixthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[6].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemSeventhDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

objectTextDivs[7].onclick = function() {
    if ((indexHealth <= 6) &&
    (this.textContent === "Eggnog" ||
    this.textContent === "Candy apple" ||
    this.textContent === "Bombardino")) {
        eventRemover()
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${this.textContent}?`;
        yesButton.addEventListener('click', useItemEighthDiv);
        noButton.addEventListener('click', closeConfirmBox);
    }
}

function whichItem(number) {
    if (indexHealth < 6 &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 2;        
    } else if (indexHealth === 6 &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 1;
    } else if (indexHealth <= 6 &&
        objectTextDivs[number].textContent === 'Candy apple') {
        indexHealth += 1;        
    } else if (indexHealth < 5 &&
        objectTextDivs[number].textContent === 'Bombardino') {
        indexHealth += 3;
    } else if (indexHealth === 5  &&
        objectTextDivs[number].textContent === 'Bombardino') {
        indexHealth += 2;
    } else if (indexHealth === 6  &&
        objectTextDivs[number].textContent === 'Bombardino') {
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



// per mettere a display l'effetto dell'oggetto
let overDiv = document.getElementsByClassName('over-div-effect');

function displayEffectItemOver(numberODiv) {
    if (event.target.textContent != '...') {
        overDiv[numberODiv].style.display = 'block';
        if(event.target.textContent === 'Candy apple') {
            overDiv[numberODiv].innerText = `Using it you will gain 1 life`;
        } else if (event.target.textContent === 'Bombardino') {
            overDiv[numberODiv].innerText = `Using it you will gain 3 life`;
        } else if(event.target.textContent === 'Eggnog') {
            overDiv[numberODiv].innerText = `Using it you will gain 2 life`;
        } else if(event.target.textContent === 'Engraved talisman') {
            overDiv[numberODiv].innerText = `Adds 1 to your defense`;
        }  else {
        overDiv[numberODiv].style.display = 'none';
        }
    } 
}

objectTextDivs[0].onmouseover = function(){displayEffectItemOver(0)};
objectTextDivs[1].onmouseover = function(){displayEffectItemOver(1)};
objectTextDivs[2].onmouseover = function(){displayEffectItemOver(2)};
objectTextDivs[3].onmouseover = function(){displayEffectItemOver(3)};
objectTextDivs[4].onmouseover = function(){displayEffectItemOver(4)};
objectTextDivs[5].onmouseover = function(){displayEffectItemOver(5)};
objectTextDivs[6].onmouseover = function(){displayEffectItemOver(6)};
objectTextDivs[7].onmouseover = function(){displayEffectItemOver(7)};

function displayNoneEffectDiv(numberODiv) {
    overDiv[numberODiv].style.display = 'none';
}

objectTextDivs[0].onmouseleave = function(){displayNoneEffectDiv(0)};
objectTextDivs[1].onmouseleave = function(){displayNoneEffectDiv(1)};
objectTextDivs[2].onmouseleave = function(){displayNoneEffectDiv(2)};
objectTextDivs[3].onmouseleave = function(){displayNoneEffectDiv(3)};
objectTextDivs[4].onmouseleave = function(){displayNoneEffectDiv(4)};
objectTextDivs[5].onmouseleave = function(){displayNoneEffectDiv(5)};
objectTextDivs[6].onmouseleave = function(){displayNoneEffectDiv(6)};
objectTextDivs[7].onmouseleave = function(){displayNoneEffectDiv(7)};



//per fare la scelta di trama
let options = document.getElementsByClassName('option');
let textStory = document.getElementById('story');

function textDivChecker() {
    for (let i = 0; i < options.length; i++) {
        if (options[i].textContent === '') {
            options[i].style.display = 'none';
        } else {
            options[i].style.display = 'block';
        }
    }
}

textDivChecker();


function optionOperator(indexText) {
    textStory.innerText = dataText[indexText].text;
    optionOne.innerText = dataText[indexText].option1;
    optionTwo.innerText = dataText[indexText].option2;
    optionThree.innerText = dataText[indexText].option3;
    textDivChecker();
}

function statsOperator(dmg, itemArray) {
    //per togliere vita
    indexHealth-=dmg;
        
    if (indexHealth <= 0) {
        panelLost.style.display = 'block';
        return;
    }
    healthDispenser();
    //per aggiungere item
    if (itemArray != "") {
        addItems(itemArray);   
    }
}

function choiseMaker(event) {    
    switch (event.target) {
        case options[0]:
            if (optionOne.textContent === dataText[0].option1) {
                optionOperator(1);
            } else if (optionOne.textContent === dataText[1].option1) {
                optionOperator(2);
            } else if (optionOne.textContent === dataText[2].option1) {
                optionOperator(3);
            } else if (optionOne.textContent === dataText[3].option1) {
                optionOperator(4);
            } else if (optionOne.textContent === dataText[4].option1) {
                optionOperator(7);
            } else if (optionOne.textContent === dataText[5].option1) {
                optionOperator(9);
                statsOperator(0, dataItems[3]);
            } else if (optionOne.textContent === dataText[6].option1) {
                optionOperator(11);
            } else if (optionOne.textContent === dataText[7].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataText[8].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataText[9].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataText[10].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataText[11].option1) {
                optionOperator(13);
            }  else if (optionOne.textContent === dataText[12].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataText[13].option1) {
                optionOperator(14);
            } else if (optionOne.textContent === dataText[14].option1) {
                optionOperator(16);
            } else if (optionOne.textContent === dataText[15].option1) {
                optionOperator(18);
                fight(0);
            } else if (optionOne.textContent === dataText[16].option1) {
                optionOperator(20);
                fight(0);
            } else if (optionOne.textContent === dataText[17].option1) {
                optionOperator(21);
            } else if (optionOne.textContent === dataText[18].option1) {
                optionOperator(20);
                fight(0);
            } else if (optionOne.textContent === dataText[19].option1) {
                optionOperator(22);
                fight(0);
            }  else if (optionOne.textContent === dataText[20].option1) {
                optionOperator(21);
            } else if (optionOne.textContent === dataText[21].option1) {
                optionOperator(23);
                statsOperator(0, dataItems[0]);
            } else if (optionOne.textContent === dataText[22].option1) {
                optionOperator(17);
            }
            break;
        case options[1]:
            if (optionTwo.textContent === dataText[3].option2) {
                optionOperator(5);
            } else if (optionTwo.textContent === dataText[4].option2) {
                optionOperator(8);
                statsOperator(0, dataItems[3]);
            } else if (optionTwo.textContent === dataText[5].option2) {
                optionOperator(10);
            } else if (optionTwo.textContent === dataText[6].option2) {
                optionOperator(12);
            } else if (optionTwo.textContent === dataText[13].option2) {
                optionOperator(15);
            } else if (optionTwo.textContent === dataText[14].option2) {
                optionOperator(17);
            } else if (optionTwo.textContent === dataText[15].option2) {
                optionOperator(19);
            } else if (optionTwo.textContent === dataText[21].option2) {
                optionOperator(24);
                statsOperator(0, dataItems[0]);
            }
            break;
        case options[2]:
            if (optionThree.textContent === dataText[3].option3) {
                optionOperator(6);
                statsOperator(0, dataItems[3]);
            }
            break;
        default:
            break;
    }
    
}

document.getElementsByClassName("options-container")[0].onclick = (event) => choiseMaker(event);



function selectWeapon(otherDiv) {
        event.target.style.background = 'lightcoral';
        if (weaponTextDivs[otherDiv].style.background === 'lightcoral') {
            weaponTextDivs[otherDiv].style.background = 'transparent';
            let otherWeapon = dataWeapons.findIndex(object => {
                return object.name === weaponTextDivs[otherDiv].textContent            
            })
            displayHeroAttack(-Number(dataWeapons[otherWeapon].attack));
        }
    
        if (event.target.style.background === 'lightcoral') {
            let whichWeapon = dataWeapons.findIndex(object => {
                return object.name === event.target.textContent            
            }) 
            displayHeroAttack(Number(dataWeapons[whichWeapon].attack));
        } else if (event.target.style.background != 'lightcoral') {
            displayHeroAttack(0);
        }
    }
    
    weaponTextDivs[0].onclick = function() {selectWeapon(1)};
    weaponTextDivs[1].onclick = function() {selectWeapon(0)};
        


