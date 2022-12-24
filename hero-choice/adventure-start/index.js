import { dataItems } from "./items.js";
console.log(dataItems);

import { dataWeapons } from "./items.js";
console.log(dataWeapons);

import { dataHeroNames } from "./items.js";
console.log(dataHeroNames);

import { dataText } from "./quest-text.js";
console.log(dataText);

import { dataTextIta } from "./quest-text-ita.js";
console.log(dataTextIta);

import { dataMonster } from "./monster.js";
console.log(dataMonster);

let playerName = document.getElementsByClassName('hero-name')[0];
let optionOne = document.getElementById("option-1");
let optionTwo = document.getElementById("option-2");
let optionThree = document.getElementById("option-3");


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
let powerUp = document.getElementsByClassName('powerUp');


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
    let object = Math.floor(Math.random() * 3);
    addItems(dataItems[object])    
}

startGivingItem();
startGivingItem();


let defenseHero = 10 + Math.floor(Math.random() * 5) + 1;
let attackHero = 13 + Math.floor(Math.random() * 10) + 1;
weaponTextDivs[0].innerText = dataWeapons[1].name //+ ' - attack: +' + dataWeapons[1].attack;
// weaponTextDivs[1].innerText = dataWeapons[0].name //+ ' - attack: +' + dataWeapons[1].attack;

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
    if (itemArray.name === 'Candy talisman') {
        powerUp[0].style.backgroundColor = 'green';
        attackHero += 2;
        return displayHeroAttack(0);
    }
    if (itemArray.name === 'Engraved talisman') {
        powerUp[1].style.backgroundColor = 'green';
        defenseHero += 2;
        return displayHeroDefense(0);
    }
    if (itemArray.name === 'Shield garland') {
        powerUp[2].style.backgroundColor = 'green';
        defenseHero += 3;
        return displayHeroDefense(0);
    }
    if (itemArray.name === 'Rapier Candy sword') {
        powerUp[3].style.backgroundColor = 'green';
        attackHero += 3;
        return displayHeroAttack(0);        
    }
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

function fight(numberMonster) {
    let attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
    let monsterLife = dataMonster[numberMonster].life;
    let differenceAtkDfns = attack - dataMonster[numberMonster].defense;
    if (defenseHero < 0) {
        defenseHero = 0;
    }
    console.log( `attack ${attack} defense ${defenseHero}`) 
    while (monsterLife > 0 && indexHealth > 0) {    
        if (differenceAtkDfns <= -8) {
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            if (defenseHero > 1) {
                indexHealth -= 3;
                defenseHero -= 4;
                alert(`Your leather armor parries four blows, but the damage is too great. You lose three!`);
            } else {
                indexHealth -= 5;
                alert(`The difference between you and your opponent is huge. You cannot escape!`);
            }
            console.log( `attack ${attack} defense ${defenseHero}`)

        } else if (differenceAtkDfns <= -4 && differenceAtkDfns > -8) {        
            monsterLife -= 1;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            if (defenseHero > 1) {
                defenseHero -= 3;
                alert(`Your leather armor parries three blows!`);
            } else {
                indexHealth -= 3;
                alert(`You feel like shit, lost three`);
            }        
            alert(`Life monster is ${monsterLife}, you have done only 1 damage`);
            console.log( `attack ${attack} defense ${defenseHero}`)

        } else if (differenceAtkDfns > -4 && differenceAtkDfns <= 0) {        
            monsterLife -= 2;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            if (defenseHero > 1) {
                defenseHero -= 2;
                alert(`Your leather armor parries two blows!`);
            } else {
                indexHealth -= 2;
                alert(`Damn, three lives`);                
            }
            alert(`Life monster is ${monsterLife}, you have done only 2 damage`);
            console.log( `attack ${attack} defense ${defenseHero}`)

        } else if (differenceAtkDfns > 0 && differenceAtkDfns < 4) {            
            monsterLife -= 3;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            if (defenseHero > 1) {
                defenseHero -= 1;
                alert(`Your leather armor parries one blows!`);
            } else {
                indexHealth -= 1;
                alert(`C--, you lose one`);                
            }
            alert(`Life monster is ${monsterLife}, you have done 3 damage`);
            console.log( `attack ${attack} defense ${defenseHero}`)
            
        } else if (differenceAtkDfns >= 4 && differenceAtkDfns < 6) {            
            monsterLife -= 4;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            alert(`Nice hit, you didn't lose life`);    
            alert(`Life monster is ${monsterLife}, you have done 4 damage`);
            console.log( `attack ${attack} defense ${defenseHero}`)
            

        } else if (differenceAtkDfns >= 6) {
            monsterLife -= 6;
            attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 10) + 1;
            differenceAtkDfns = attack - dataMonster[numberMonster].defense;

            alert(`You are a master, you inflict 6 damage`);
            console.log( `attack ${attack} defense ${defenseHero}`)
            
        }
    };
    
    displayHeroDefense(0);
    healthDispenser();
    if (monsterLife <= 0 && indexHealth <= 0 && numberMonster === 10) {
        alert(`You managed to defeat the Grinch and free the region from his clutches. This effort unfortunately cost you your life.
        But you emerge victorious!`)
        document.getElementsByClassName('win-panel')[0].style.display = 'block';
    } else if (monsterLife <= 0 && indexHealth <= 0) {
        document.getElementsByClassName('title-lost')[0].innerText = 'You have killed the monster. But you are also dead!'
        panelLost.style.display = 'block';
    } else if (monsterLife <= 0 && numberMonster === 10){
        document.getElementsByClassName('win-panel')[0].style.display = 'block';
    } else if (monsterLife <= 0){
        alert('monster dead')
    } else {
        panelLost.style.display = 'block';
    }
}

function closeConfirmBox() {
    sureDiv.style.display = 'none';
}

function whichItem(number) {
    if (indexHealth < 6 &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 2;        
    } else if (indexHealth === 6 &&
        objectTextDivs[number].textContent === 'Eggnog') {
        indexHealth += 1;
    } else if (indexHealth < 6 &&
        objectTextDivs[number].textContent === 'Candy hook') {
        indexHealth += 2;        
    } else if (indexHealth === 6 &&
        objectTextDivs[number].textContent === 'Candy hook') {
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
    } else if (objectTextDivs[number].textContent === 'Lion potion') {
        attackHero += 5; 
    } else if (objectTextDivs[number].textContent === 'Festering potion'){
        attackHero -= 2;
    } else if (objectTextDivs[number].textContent === 'Gall potion'){
        defenseHero -= 2;
    } else if (objectTextDivs[number].textContent === 'Mistery potion'){
        indexHealth -= 1;
    }

    objectTextDivs[number].innerText = '...';
    healthDispenser();
    displayHeroAttack(0);
    displayHeroDefense(0)
}

function use(event, numberDiv) {

    function useItem() {
        console.log('using item index' + numberDiv)
        whichItem(numberDiv)
        closeConfirmBox()
    }  
    
    if (        
        (event.target.textContent === "Lion potion" || event.target.textContent === "Gall potion" ||
        event.target.textContent === "Festering potion" || event.target.textContent === "Mistery potion")
        || (indexHealth <= 6) &&
        (event.target.textContent === "Eggnog" || event.target.textContent === "Candy apple" ||
        event.target.textContent === "Bombardino" || event.target.textContent === "Candy hook")
    ) {
        let oldYesButton = document.getElementById("remove-yes");
        let newYesButton = oldYesButton.cloneNode(true);
        console.log(oldYesButton.parentNode)

        oldYesButton.parentNode.replaceChild(newYesButton, oldYesButton);
        
        sureDiv.style.display = 'block';
        sureDivText.innerText = `Are you sure you want to use ${event.target.textContent}?`;

        document.getElementById("remove-yes").addEventListener('click', useItem);
        
        noButton.addEventListener('click', closeConfirmBox);
    }    
}

for (let i=0; i < objectTextDivs.length; i++) {
    objectTextDivs[i].onclick = (event) => {use(event, i)}
}


// per mettere a display l'effetto dell'oggetto
let overDiv = document.getElementsByClassName('over-div-effect');

function displayEffectItemOver(numberODiv) {
    if (event.target.textContent != '...') {
        overDiv[numberODiv].style.display = 'block';
        if(event.target.textContent === 'Candy apple') {
            overDiv[numberODiv].innerText = `Using it you will gain 1 life`;
        } else if (event.target.textContent === 'Bombardino')
        {
            overDiv[numberODiv].innerText = `Using it you will gain 3 life`;
        } else if(event.target.textContent === 'Eggnog'
                || event.target.textContent === 'Candy hook')
            {
            overDiv[numberODiv].innerText = `Using it you will gain 2 life`;
        } else if(event.target.textContent === 'Gall potion'
            || event.target.textContent === 'Mistery potion'
            || event.target.textContent === 'Festering potion')
        {
            overDiv[numberODiv].innerText = `Mistery effects`;            
        } else if(event.target.textContent === 'Lion potion')
        {
            overDiv[numberODiv].innerText = `Adds 5 to your attack`;
        } else {
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
    textStory.innerText = dataTextIta[indexText].text;
    optionOne.innerText = dataTextIta[indexText].option1;
    optionTwo.innerText = dataTextIta[indexText].option2;
    optionThree.innerText = dataTextIta[indexText].option3;
    textDivChecker();
}

optionOperator(0);

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

// function selectWeapon(event, otherDiv) {
//         event.target.style.background = 'lightcoral';
//         if (weaponTextDivs[otherDiv].style.background === 'lightcoral') {
//             weaponTextDivs[otherDiv].style.background = 'transparent';
//             let otherWeapon = dataWeapons.findIndex(object => {
//                 return object.name === weaponTextDivs[otherDiv].textContent            
//             })
//             displayHeroAttack(-Number(dataWeapons[otherWeapon].attack));
//         }
    
//         if (event.target.style.background === 'lightcoral') {
//             let whichWeapon = dataWeapons.findIndex(object => {
//                 return object.name === event.target.textContent            
//             }) 
//             displayHeroAttack(Number(dataWeapons[whichWeapon].attack));
//         } else if (event.target.style.background != 'lightcoral') {
//             displayHeroAttack(0);
//         }
//     }
    
// weaponTextDivs[0].onclick = function(event) {selectWeapon(event, 1)};
// weaponTextDivs[1].onclick = function(event) {selectWeapon(event, 0)};


let submitEnigma = document.getElementsByClassName('answer-div')[0];
let answerArea = document.getElementById('enigma-answer');
let answerBtn = document.getElementById('confirm-enigma');

answerBtn.onclick = function confirmAnswer() {
    let answerText = answerArea.value;
    if (answerText.includes('costruiscono') || answerText.includes('giocattoli') ||
        answerText.includes('Costruiscono') || answerText.includes('fanno') ||
        answerText.includes('Fanno') || answerText.includes('giochi')
    ) {
        optionOperator(120)
        submitEnigma.style.display = 'none';
    } else if (answerText === '') {
        alert('Hai trovato una risposta?')
    } else {
        optionOperator(121)
        submitEnigma.style.display = 'none';
    };    
}


function choiseMakerIta(event) {    
    switch (event.target) {
        case options[0]:
            if (optionOne.textContent === dataTextIta[0].option1) {
                optionOperator(1);
            } else if (optionOne.textContent === dataTextIta[1].option1) {
                optionOperator(2);
            } else if (optionOne.textContent === dataTextIta[2].option1) {
                optionOperator(3);
            } else if (optionOne.textContent === dataTextIta[3].option1) {
                optionOperator(4);
            } else if (optionOne.textContent === dataTextIta[4].option1) {
                optionOperator(7);
            } else if (optionOne.textContent === dataTextIta[5].option1) {
                optionOperator(9);
                addItems(dataItems[4])
            } else if (optionOne.textContent === dataTextIta[6].option1) {
                optionOperator(11);
            } else if (optionOne.textContent === dataTextIta[7].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataTextIta[8].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataTextIta[9].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataTextIta[10].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataTextIta[11].option1) {
                optionOperator(13);
            }  else if (optionOne.textContent === dataTextIta[12].option1) {
                optionOperator(13);
            } else if (optionOne.textContent === dataTextIta[13].option1) {
                optionOperator(14);
            } else if (optionOne.textContent === dataTextIta[14].option1) {
                optionOperator(16);
            } else if (optionOne.textContent === dataTextIta[15].option1) {
                optionOperator(18);
                fight(1);
            } else if (optionOne.textContent === dataTextIta[16].option1) {
                optionOperator(20);
                fight(0);
            } else if (optionOne.textContent === dataTextIta[17].option1) {
                optionOperator(21);
                statsOperator(1, '');
            } else if (optionOne.textContent === dataTextIta[18].option1) {
                optionOperator(20);
                fight(0);
            } else if (optionOne.textContent === dataTextIta[19].option1) {
                optionOperator(22);
                fight(0);
            }  else if (optionOne.textContent === dataTextIta[20].option1) {
                optionOperator(21);
            } else if (optionOne.textContent === dataTextIta[21].option1) {
                optionOperator(23);
                statsOperator(0, dataItems[0]);
            } else if (optionOne.textContent === dataTextIta[22].option1) {
                optionOperator(17);
            } else if (optionOne.textContent === dataTextIta[23].option1) {
                optionOperator(25);
            } else if (optionOne.textContent === dataTextIta[24].option1) {
                optionOperator(43);
            } else if (optionOne.textContent === dataTextIta[25].option1) {
                optionOperator(27);
                fight(3);
            } else if (optionOne.textContent === dataTextIta[26].option1) {
                optionOperator(29);
                fight(4);
            } else if (optionOne.textContent === dataTextIta[27].option1) {
                optionOperator(30);
                fight(4);
            } else if (optionOne.textContent === dataTextIta[28].option1) {
                optionOperator(31);
                fight(4);
            } else if (optionOne.textContent === dataTextIta[29].option1) {
                optionOperator(30);
                fight(3);
            } else if (optionOne.textContent === dataTextIta[30].option1) {
                optionOperator(32);
            } else if (optionOne.textContent === dataTextIta[31].option1) {
                optionOperator(33);
                fight(4);
            } else if (optionOne.textContent === dataTextIta[32].option1) {
                optionOperator(34);
            } else if (optionOne.textContent === dataTextIta[33].option1) {
                optionOperator(36);
            } else if (optionOne.textContent === dataTextIta[34].option1) {
                optionOperator(37);
                statsOperator(0, dataItems[2]);
            } else if (optionOne.textContent === dataTextIta[35].option1) {
                optionOperator(40);
            } else if (optionOne.textContent === dataTextIta[36].option1) {
                optionOperator(34);
            } else if (optionOne.textContent === dataTextIta[37].option1) {
                optionOperator(54);
            } else if (optionOne.textContent === dataTextIta[38].option1) {
                optionOperator(41);
                statsOperator(1, '');
            } else if (optionOne.textContent === dataTextIta[39].option1) {
                optionOperator(42);
            } else if (optionOne.textContent === dataTextIta[40].option1) {
                optionOperator(39);
                statsOperator(0, dataItems[2]);
            } else if (optionOne.textContent === dataTextIta[41].option1) {
                optionOperator(73);
            } else if (optionOne.textContent === dataTextIta[42].option1) {
                optionOperator(40);
            } else if (optionOne.textContent === dataTextIta[43].option1) {
                optionOperator(44);
            } else if (optionOne.textContent === dataTextIta[44].option1) {
                optionOperator(46);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[45].option1) {
                optionOperator(47);
                fight(6);
            } else if (optionOne.textContent === dataTextIta[46].option1) {
                optionOperator(48);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[47].option1) {
                optionOperator(49);
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[48].option1) {
                optionOperator(51);
                statsOperator(0, dataItems[2]);
            } else if (optionOne.textContent === dataTextIta[49].option1) {
                optionOperator(50);
                fight(6);
            } else if (optionOne.textContent === dataTextIta[50].option1) {
                optionOperator(51);                
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
            } else if (optionOne.textContent === dataTextIta[51].option1) {
                optionOperator(52);                
                fight(5);
            } else if (optionOne.textContent === dataTextIta[52].option1) {                
                let sudden = Math.floor(Math.random() * 10);
                console.log(sudden)
                if (sudden === 0 || sudden === 9) {
                    optionOperator(72)
                    statsOperator(2, '');
                } else {
                    optionOperator(53);
                } 
            } else if (optionOne.textContent === dataTextIta[53].option1) {
                optionOperator(57);              
            } else if (optionOne.textContent === dataTextIta[54].option1) {
                optionOperator(59);
            } else if (optionOne.textContent === dataTextIta[55].option1) {
                optionOperator(56);
            } else if (optionOne.textContent === dataTextIta[56].option1) {
                optionOperator(58);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[57].option1) {
                optionOperator(69);
            } else if (optionOne.textContent === dataTextIta[58].option1) {
                optionOperator(62);
                fight(6);
            } else if (optionOne.textContent === dataTextIta[59].option1) {
                optionOperator(68);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[60].option1) {
                optionOperator(71);
                fight(5);
            } else if (optionOne.textContent === dataTextIta[61].option1) {
                optionOperator(63);
            } else if (optionOne.textContent === dataTextIta[62].option1) {
                optionOperator(65);
            } else if (optionOne.textContent === dataTextIta[63].option1) {
                optionOperator(66);
                statsOperator(0, dataItems[1]);
                fight(6);                
            } else if (optionOne.textContent === dataTextIta[64].option1) {
                optionOperator(66);
                displayHeroAttack(2)
                fight(6);
                addItems(dataItems[5])               
            } else if (optionOne.textContent === dataTextIta[65].option1) {
                optionOperator(67);
                addItems(dataItems[5])   
                statsOperator(0, dataItems[1]);
            } else if (optionOne.textContent === dataTextIta[66].option1) {
                optionOperator(67);
                addItems(dataItems[10])   
            } else if (optionOne.textContent === dataTextIta[67].option1) {
                optionOperator(99);
            } else if (optionOne.textContent === dataTextIta[68].option1) {
                optionOperator(57);
            } else if (optionOne.textContent === dataTextIta[69].option1) {
                optionOperator(70);
                addItems(dataItems[5])   
            } else if (optionOne.textContent === dataTextIta[70].option1) {
                optionOperator(91);
            } else if (optionOne.textContent === dataTextIta[71].option1) {
                optionOperator(56);
            } else if (optionOne.textContent === dataTextIta[72].option1) {
                optionOperator(73);
            } else if (optionOne.textContent === dataTextIta[73].option1) {
                optionOperator(74);
            } else if (optionOne.textContent === dataTextIta[74].option1) {
                optionOperator(77);
            } else if (optionOne.textContent === dataTextIta[75].option1) {
                optionOperator(79);
            } else if (optionOne.textContent === dataTextIta[76].option1) {
                optionOperator(79);
                fight(7)
            } else if (optionOne.textContent === dataTextIta[77].option1) {
                optionOperator(83);
                statsOperator(0, dataItems[3]);
            } else if (optionOne.textContent === dataTextIta[78].option1) {
                optionOperator(85);
            } else if (optionOne.textContent === dataTextIta[79].option1) {
                optionOperator(80);
                addItems(dataWeapons[2])
                if (defenseHero > 0) {
                    displayHeroDefense(2)
                } else {
                    statsOperator(1, '');
                }  
            } else if (optionOne.textContent === dataTextIta[80].option1) {
                optionOperator(87);
                fight(7)
            } else if (optionOne.textContent === dataTextIta[81].option1) {
                optionOperator(88);
            } else if (optionOne.textContent === dataTextIta[82].option1) {
                optionOperator(77);
            } else if (optionOne.textContent === dataTextIta[83].option1) {
                optionOperator(85);
            } else if (optionOne.textContent === dataTextIta[84].option1) {
                optionOperator(85);
            } else if (optionOne.textContent === dataTextIta[85].option1) {
                optionOperator(90);
            } else if (optionOne.textContent === dataTextIta[86].option1) {
                optionOperator(85);
            } else if (optionOne.textContent === dataTextIta[87].option1) {
                optionOperator(88);
            } else if (optionOne.textContent === dataTextIta[88].option1) {
                optionOperator(74);
            } else if (optionOne.textContent === dataTextIta[89].option1) {
                optionOperator(74);
                addItems(dataWeapons[2])
            } else if (optionOne.textContent === dataTextIta[90].option1) {
                optionOperator(69);
            } else if (optionOne.textContent === dataTextIta[91].option1) {
                optionOperator(92);
            } else if (optionOne.textContent === dataTextIta[92].option1) {
                optionOperator(94);
                fight(8)
            } else if (optionOne.textContent === dataTextIta[93].option1) {
                optionOperator(94);
                fight(8)
            } else if (optionOne.textContent === dataTextIta[94].option1) {
                optionOperator(96);
                fight(8)
            } else if (optionOne.textContent === dataTextIta[95].option1) {
                optionOperator(98);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                }  
            } else if (optionOne.textContent === dataTextIta[96].option1) {
                optionOperator(98);
            } else if (optionOne.textContent === dataTextIta[97].option1) {
                optionOperator(98);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                }  
            } else if (optionOne.textContent === dataTextIta[98].option1) {
                optionOperator(103);
            } else if (optionOne.textContent === dataTextIta[99].option1) {
                optionOperator(102);
                fight(9)
            } else if (optionOne.textContent === dataTextIta[100].option1) {
                optionOperator(98);
            } else if (optionOne.textContent === dataTextIta[101].option1) {
                optionOperator(102);
                fight(9)
            } else if (optionOne.textContent === dataTextIta[102].option1) {
                optionOperator(98);
            } else if (optionOne.textContent === dataTextIta[103].option1) {
                optionOperator(105);
            } else if (optionOne.textContent === dataTextIta[104].option1) {
                optionOperator(117);
            } else if (optionOne.textContent === dataTextIta[105].option1) {
                optionOperator(106);
                fight(5)
            } else if (optionOne.textContent === dataTextIta[106].option1) {
                optionOperator(107);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                }  
            } else if (optionOne.textContent === dataTextIta[107].option1) {
                optionOperator(109);
            } else if (optionOne.textContent === dataTextIta[108].option1) {
                optionOperator(110);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                }  
            } else if (optionOne.textContent === dataTextIta[109].option1) {
                optionOperator(111);
                fight(6)
            } else if (optionOne.textContent === dataTextIta[110].option1) {
                optionOperator(112);
            } else if (optionOne.textContent === dataTextIta[111].option1) {
                optionOperator(115);
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
            } else if (optionOne.textContent === dataTextIta[112].option1) {
                optionOperator(113);
                fight(6)
            } else if (optionOne.textContent === dataTextIta[113].option1) {
                optionOperator(114);
                fight(6)
            } else if (optionOne.textContent === dataTextIta[114].option1) {
                optionOperator(115);
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
                statsOperator(-1, '');
            } else if (optionOne.textContent === dataTextIta[115].option1) {
                optionOperator(116);
            } else if (optionOne.textContent === dataTextIta[116].option1) {
                optionOperator(125);
            } else if (optionOne.textContent === dataTextIta[117].option1) {
                optionOperator(118);
                submitEnigma.style.display = 'block';
            } else if (optionOne.textContent === dataTextIta[119].option1) {
                optionOperator(122);
            } else if (optionOne.textContent === dataTextIta[120].option1) {
                optionOperator(124);
            } else if (optionOne.textContent === dataTextIta[121].option1) {
                optionOperator(122);
            } else if (optionOne.textContent === dataTextIta[122].option1) {
                optionOperator(123);
            } else if (optionOne.textContent === dataTextIta[123].option1) {
                optionOperator(103);
            } else if (optionOne.textContent === dataTextIta[124].option1) {
                optionOperator(116);
            } else if (optionOne.textContent === dataTextIta[125].option1) {
                optionOperator(126);
            } else if (optionOne.textContent === dataTextIta[126].option1) {
                optionOperator(127);
                statsOperator(0, dataItems[6]);
            } else if (optionOne.textContent === dataTextIta[127].option1) {
                optionOperator(128);
            } else if (optionOne.textContent === dataTextIta[128].option1) {
                optionOperator(129);
            }  else if (optionOne.textContent === dataTextIta[129].option1) {
                fight(10);
            }
            break;
        case options[1]:
            if (optionTwo.textContent === dataTextIta[3].option2) {
                optionOperator(5);
            } else if (optionTwo.textContent === dataTextIta[4].option2) {
                optionOperator(8);
                addItems(dataItems[4])
            } else if (optionTwo.textContent === dataTextIta[5].option2) {
                optionOperator(10);
            } else if (optionTwo.textContent === dataTextIta[6].option2) {
                optionOperator(12);
            } else if (optionTwo.textContent === dataTextIta[13].option2) {
                optionOperator(15);
            } else if (optionTwo.textContent === dataTextIta[14].option2) {
                optionOperator(17);
            } else if (optionTwo.textContent === dataTextIta[15].option2) {
                optionOperator(19);
            } else if (optionTwo.textContent === dataTextIta[21].option2) {
                optionOperator(24);
                statsOperator(0, dataItems[0]);
            } else if (optionTwo.textContent === dataTextIta[23].option2) {
                optionOperator(26);
            } else if (optionTwo.textContent === dataTextIta[25].option2) {
                optionOperator(28);
            } else if (optionTwo.textContent === dataTextIta[32].option2) {
                optionOperator(35);
            } else if (optionTwo.textContent === dataTextIta[34].option2) {
                optionOperator(38);
                statsOperator(0, dataItems[2]);
            } else if (optionTwo.textContent === dataTextIta[35].option2) {
                optionOperator(41);
                statsOperator(1, '');
            } else if (optionTwo.textContent === dataTextIta[36].option2) {
                optionOperator(35);
            } else if (optionTwo.textContent === dataTextIta[38].option2) {
                optionOperator(39);
            } else if (optionTwo.textContent === dataTextIta[40].option2) {
                optionOperator(37);
                statsOperator(0, dataItems[2]);
            } else if (optionTwo.textContent === dataTextIta[42].option2) {
                optionOperator(41);
                statsOperator(1, '');
            } else if (optionTwo.textContent === dataTextIta[43].option2) {
                optionOperator(45);
            } else if (optionTwo.textContent === dataTextIta[52].option2) {
                optionOperator(56);
            } else if (optionTwo.textContent === dataTextIta[53].option2) {
                optionOperator(55);
            } else if (optionTwo.textContent === dataTextIta[54].option2) {
                let sudden = Math.floor(Math.random() * 10);
                console.log(sudden)
                if (sudden === 0 || sudden === 9) {
                    optionOperator(72)
                    statsOperator(2, '');
                } else {
                    optionOperator(60);
                }                
            } else if (optionTwo.textContent === dataTextIta[56].option2) {
                optionOperator(61);
            } else if (optionTwo.textContent === dataTextIta[57].option2) {
                optionOperator(70);
            } else if (optionTwo.textContent === dataTextIta[61].option2) {
                optionOperator(64);
            }  else if (optionTwo.textContent === dataTextIta[67].option2) {
                optionOperator(100);
            } else if (optionTwo.textContent === dataTextIta[73].option2) {
                optionOperator(75);
            } else if (optionTwo.textContent === dataTextIta[74].option2) {
                optionOperator(78);
            } else if (optionTwo.textContent === dataTextIta[75].option2) {
                optionOperator(74);
            } else if (optionTwo.textContent === dataTextIta[76].option2) {
                optionOperator(82);
            } else if (optionTwo.textContent === dataTextIta[77].option2) {
                optionOperator(83);
                let suddenPotion = Math.floor(Math.random() * 100);
                if (suddenPotion === 0) {
                    addItems(dataItems[6]);
                } else if (suddenPotion > 0 && suddenPotion < 33) {
                    addItems(dataItems[7]);
                } else if (suddenPotion >= 33 && suddenPotion < 66) {
                    addItems(dataItems[8]);
                } else if (suddenPotion >= 66 && suddenPotion < 100) {
                    addItems(dataItems[9]);
                }
                
            } else if (optionTwo.textContent === dataTextIta[78].option2) {
                optionOperator(86);
            } else if (optionTwo.textContent === dataTextIta[79].option2) {
                optionOperator(74);
                addItems(dataWeapons[2])
            } else if (optionTwo.textContent === dataTextIta[80].option2) {
                optionOperator(82);
            } else if (optionTwo.textContent === dataTextIta[81].option2) {
                optionOperator(89);
            } else if (optionTwo.textContent === dataTextIta[82].option2) {
                optionOperator(78);
            } else if (optionTwo.textContent === dataTextIta[83].option2) {
                optionOperator(86);
            } else if (optionTwo.textContent === dataTextIta[87].option2) {
                optionOperator(74);
            } else if (optionTwo.textContent === dataTextIta[88].option2) {
                optionOperator(89);
            } else if (optionTwo.textContent === dataTextIta[90].option2) {
                optionOperator(70);
            } else if (optionTwo.textContent === dataTextIta[91].option2) {
                optionOperator(93);
            } else if (optionTwo.textContent === dataTextIta[92].option2) {
                optionOperator(95);
            } else if (optionTwo.textContent === dataTextIta[93].option2) {
                optionOperator(95);
            } else if (optionTwo.textContent === dataTextIta[94].option2) {
                optionOperator(97);
            } else if (optionTwo.textContent === dataTextIta[95].option2) {
                optionOperator(98);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                } 
            } else if (optionTwo.textContent === dataTextIta[97].option2) {
                optionOperator(98);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                } 
            } else if (optionTwo.textContent === dataTextIta[98].option2) {
                optionOperator(104);
            } else if (optionTwo.textContent === dataTextIta[106].option2) {
                optionOperator(108);
                fight(6)
            } else if (optionTwo.textContent === dataTextIta[114].option2) {
                optionOperator(115);
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
                statsOperator(0, dataItems[2]);
            } else if (optionTwo.textContent === dataTextIta[117].option2) {
                optionOperator(119);
            } else if (optionTwo.textContent === dataTextIta[119].option2) {
                optionOperator(123);
            } else if (optionTwo.textContent === dataTextIta[121].option2) {
                optionOperator(123);
            }
            break;
        case options[2]:
            if (optionThree.textContent === dataTextIta[3].option3) {
                optionOperator(6);
                addItems(dataItems[4])
            } else if (optionThree.textContent === dataTextIta[34].option3) {
                optionOperator(39);
                statsOperator(0, dataTextIta[2]);
            }  else if (optionThree.textContent === dataTextIta[67].option3) {
                optionOperator(101);
            } else if (optionThree.textContent === dataTextIta[73].option3) {
                optionOperator(76);
                statsOperator(1, '');
            } else if (optionThree.textContent === dataTextIta[75].option3) {
                optionOperator(80);
                if (defenseHero > 0) {
                    displayHeroDefense(-2)
                } else {
                    statsOperator(1, '');
                }       
            } else if (optionThree.textContent === dataTextIta[81].option3) {
                optionOperator(74);
            } 
            break;
        default:
            break;
    }
    
}

document.getElementsByClassName("options-container")[0].onclick = (event) => choiseMakerIta(event);



// function choiseMaker(event) {    
//     switch (event.target) {
//         case options[0]:
//             if (optionOne.textContent === dataText[0].option1) {
//                 optionOperator(1);
//             } else if (optionOne.textContent === dataText[1].option1) {
//                 optionOperator(2);
//             } else if (optionOne.textContent === dataText[2].option1) {
//                 optionOperator(3);
//             } else if (optionOne.textContent === dataText[3].option1) {
//                 optionOperator(4);
//             } else if (optionOne.textContent === dataText[4].option1) {
//                 optionOperator(7);
//             } else if (optionOne.textContent === dataText[5].option1) {
//                 optionOperator(9);
//                 statsOperator(0, dataItems[3]);
//             } else if (optionOne.textContent === dataText[6].option1) {
//                 optionOperator(11);
//             } else if (optionOne.textContent === dataText[7].option1) {
//                 optionOperator(13);
//             } else if (optionOne.textContent === dataText[8].option1) {
//                 optionOperator(13);
//             } else if (optionOne.textContent === dataText[9].option1) {
//                 optionOperator(13);
//             } else if (optionOne.textContent === dataText[10].option1) {
//                 optionOperator(13);
//             } else if (optionOne.textContent === dataText[11].option1) {
//                 optionOperator(13);
//             }  else if (optionOne.textContent === dataText[12].option1) {
//                 optionOperator(13);
//             } else if (optionOne.textContent === dataText[13].option1) {
//                 optionOperator(14);
//             } else if (optionOne.textContent === dataText[14].option1) {
//                 optionOperator(16);
//             } else if (optionOne.textContent === dataText[15].option1) {
//                 optionOperator(18);
//                 fight(0);
//             } else if (optionOne.textContent === dataText[16].option1) {
//                 optionOperator(20);
//                 fight(0);
//             } else if (optionOne.textContent === dataText[17].option1) {
//                 optionOperator(21);
//             } else if (optionOne.textContent === dataText[18].option1) {
//                 optionOperator(20);
//                 fight(0);
//             } else if (optionOne.textContent === dataText[19].option1) {
//                 optionOperator(22);
//                 fight(0);
//             }  else if (optionOne.textContent === dataText[20].option1) {
//                 optionOperator(21);
//             } else if (optionOne.textContent === dataText[21].option1) {
//                 optionOperator(23);
//                 statsOperator(0, dataItems[0]);
//             } else if (optionOne.textContent === dataText[22].option1) {
//                 optionOperator(17);
//             } else if (optionOne.textContent === dataText[23].option1) {
//                 optionOperator(25);
//             } else if (optionOne.textContent === dataText[24].option1) {
//                 optionOperator(43);
//             } else if (optionOne.textContent === dataText[25].option1) {
//                 optionOperator(27);
//                 fight(3);
//             } else if (optionOne.textContent === dataText[26].option1) {
//                 optionOperator(29);
//                 fight(4);
//             } else if (optionOne.textContent === dataText[27].option1) {
//                 optionOperator(30);
//                 fight(3);
//             } else if (optionOne.textContent === dataText[28].option1) {
//                 optionOperator(31);
//                 fight(4);
//             } else if (optionOne.textContent === dataText[29].option1) {
//                 optionOperator(30);
//                 fight(3);
//             } else if (optionOne.textContent === dataText[30].option1) {
//                 optionOperator(32);
//             } else if (optionOne.textContent === dataText[31].option1) {
//                 optionOperator(33);
//                 fight(4);
//             } else if (optionOne.textContent === dataText[32].option1) {
//                 optionOperator(34);
//             } else if (optionOne.textContent === dataText[33].option1) {
//                 optionOperator(36);
//             } else if (optionOne.textContent === dataText[34].option1) {
//                 optionOperator(37);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionOne.textContent === dataText[35].option1) {
//                 optionOperator(40);
//             } else if (optionOne.textContent === dataText[36].option1) {
//                 optionOperator(34);
//             } else if (optionOne.textContent === dataText[37].option1) {
//                 optionOperator(54);
//             } else if (optionOne.textContent === dataText[38].option1) {
//                 optionOperator(41);
//                 statsOperator(1);
//             } else if (optionOne.textContent === dataText[39].option1) {
//                 optionOperator(42);
//             } else if (optionOne.textContent === dataText[40].option1) {
//                 optionOperator(39);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionOne.textContent === dataText[41].option1) {
//                 optionOperator(73);
//             } else if (optionOne.textContent === dataText[42].option1) {
//                 optionOperator(40);
//             } else if (optionOne.textContent === dataText[43].option1) {
//                 optionOperator(44);
//             } else if (optionOne.textContent === dataText[44].option1) {
//                 optionOperator(46);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[45].option1) {
//                 optionOperator(47);
//                 fight(6);
//             } else if (optionOne.textContent === dataText[46].option1) {
//                 optionOperator(48);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[47].option1) {
//                 optionOperator(49);
//                 statsOperator(0, dataItems[1]);
//                 statsOperator(0, dataItems[1]);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[48].option1) {
//                 optionOperator(51);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionOne.textContent === dataText[49].option1) {
//                 optionOperator(50);
//             } else if (optionOne.textContent === dataText[50].option1) {
//                 optionOperator(51);                
//                 statsOperator(0, dataItems[1]);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionOne.textContent === dataText[51].option1) {
//                 optionOperator(52);                
//                 fight(5);
//             } else if (optionOne.textContent === dataText[52].option1) {
//                 optionOperator(53);
//             } else if (optionOne.textContent === dataText[53].option1) {
//                 let sudden = Math.floor(Math.random() * 10);
//                 if (sudden === 0 || sudden === 9) {
//                     optionOperator(72)
//                     statsOperator(2);
//                 } else {
//                     optionOperator(57);
//                 }                
//             } else if (optionOne.textContent === dataText[54].option1) {
//                 optionOperator(59);
//             } else if (optionOne.textContent === dataText[55].option1) {
//                 optionOperator(56);
//             } else if (optionOne.textContent === dataText[56].option1) {
//                 optionOperator(58);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[57].option1) {
//                 optionOperator(69);
//             } else if (optionOne.textContent === dataText[58].option1) {
//                 optionOperator(62);
//                 fight(6);
//             } else if (optionOne.textContent === dataText[59].option1) {
//                 optionOperator(68);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[60].option1) {
//                 optionOperator(71);
//                 fight(5);
//             } else if (optionOne.textContent === dataText[61].option1) {
//                 optionOperator(63);
//             } else if (optionOne.textContent === dataText[62].option1) {
//                 optionOperator(65);
//             } else if (optionOne.textContent === dataText[63].option1) {
//                 optionOperator(66);
//                 fight(6);
//                 statsOperator(0, dataItems[5]);
//             } else if (optionOne.textContent === dataText[64].option1) {
//                 optionOperator(66);
//                 fight(6);
//                 statsOperator(0, dataItems[6]);
//             } else if (optionOne.textContent === dataText[65].option1) {
//                 optionOperator(67);
//                 statsOperator(0, dataItems[5]);
//                 statsOperator(0, dataItems[6]);
//             } else if (optionOne.textContent === dataText[66].option1) {
//                 optionOperator();
//             } else if (optionOne.textContent === dataText[67].option1) {
//                 optionOperator();
//             } else if (optionOne.textContent === dataText[68].option1) {
//                 optionOperator(57);
//             } else if (optionOne.textContent === dataText[69].option1) {
//                 optionOperator();
//             } else if (optionOne.textContent === dataText[70].option1) {
//                 optionOperator();
//             } else if (optionOne.textContent === dataText[71].option1) {
//                 optionOperator(56);
//             }  else if (optionOne.textContent === dataText[72].option1) {
//                 optionOperator(73);
//             }
//             break;
//         case options[1]:
//             if (optionTwo.textContent === dataText[3].option2) {
//                 optionOperator(5);
//             } else if (optionTwo.textContent === dataText[4].option2) {
//                 optionOperator(8);
//                 statsOperator(0, dataItems[3]);
//             } else if (optionTwo.textContent === dataText[5].option2) {
//                 optionOperator(10);
//             } else if (optionTwo.textContent === dataText[6].option2) {
//                 optionOperator(12);
//             } else if (optionTwo.textContent === dataText[13].option2) {
//                 optionOperator(15);
//             } else if (optionTwo.textContent === dataText[14].option2) {
//                 optionOperator(17);
//             } else if (optionTwo.textContent === dataText[15].option2) {
//                 optionOperator(19);
//             } else if (optionTwo.textContent === dataText[21].option2) {
//                 optionOperator(24);
//                 statsOperator(0, dataItems[0]);
//             } else if (optionTwo.textContent === dataText[23].option2) {
//                 optionOperator(26);
//             } else if (optionTwo.textContent === dataText[25].option2) {
//                 optionOperator(28);
//             } else if (optionTwo.textContent === dataText[32].option2) {
//                 optionOperator(35);
//             } else if (optionTwo.textContent === dataText[34].option2) {
//                 optionOperator(38);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionTwo.textContent === dataText[35].option2) {
//                 optionOperator(41);
//                 statsOperator(1);
//             } else if (optionTwo.textContent === dataText[36].option2) {
//                 optionOperator(35);
//             } else if (optionTwo.textContent === dataText[38].option2) {
//                 optionOperator(39);
//             } else if (optionTwo.textContent === dataText[40].option2) {
//                 optionOperator(37);
//                 statsOperator(0, dataItems[1]);
//             } else if (optionTwo.textContent === dataText[42].option2) {
//                 optionOperator(41);
//                 statsOperator(1);
//             } else if (optionTwo.textContent === dataText[43].option2) {
//                 optionOperator(45);
//                 statsOperator(1);
//             } else if (optionTwo.textContent === dataText[52].option2) {
//                 optionOperator(56);
//             } else if (optionTwo.textContent === dataText[53].option2) {
//                 optionOperator(55);
//             } else if (optionTwo.textContent === dataText[54].option2) {
//                 let sudden = Math.floor(Math.random() * 10);
//                 if (sudden === 0 || sudden === 9) {
//                     optionOperator(72)
//                     statsOperator(2);
//                 } else {
//                     optionOperator(60);
//                 }                
//             } else if (optionTwo.textContent === dataText[56].option2) {
//                 optionOperator(61);
//             } else if (optionTwo.textContent === dataText[57].option2) {
//                 optionOperator(70);
//             } else if (optionTwo.textContent === dataText[61].option2) {
//                 optionOperator(64);
//             }
//             break;
//         case options[2]:
//             if (optionThree.textContent === dataText[3].option3) {
//                 optionOperator(6);
//                 statsOperator(0, dataItems[3]);
//             } else if (optionThree.textContent === dataText[34].option3) {
//                 optionOperator(39);
//                 statsOperator(0, dataItems[1]);
//             }
//             break;
//         default:
//             break;
//     }
    
// }

// document.getElementsByClassName("options-container")[0].onclick = (event) => choiseMaker(event);
