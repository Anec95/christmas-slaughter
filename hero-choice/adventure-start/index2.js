// function eventRemover() {
//     for (i = 0; i< objectTextDivs.lenght; i++){
//        yesButton.removeEventListener('click', () => {useItemFirstDiv(i)}); 
//     }

    


//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(1)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(2)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(3)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(4)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(5)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(6)});
//     // yesButton.removeEventListener('click', () => {useItemFirstDiv(7)});
// }



// function use(numberDiv) {
//     if ((indexHealth <= 6 && event.target.textContent === "Revive")
//         || (indexHealth <= 6 && event.target.textContent === "Candy apple")
//         || (indexHealth <= 6 && event.target.textContent === "Eggnog")) {
//         eventRemover()
//         sureDiv.style.display = 'block';
//         sureDivText.innerText = `Are you sure you want to use ${event.target.textContent}?`;
//         yesButton.addEventListener('click', () => {useItemFirstDiv(numberDiv)});
//         noButton.addEventListener('click', closeConfirmBox);
//     }    
// }

// objectTextDivs[0].onclick = () => {use(0)} ;
// objectTextDivs[1].onclick = () => {use(1)} ;
// objectTextDivs[2].onclick = () => {use(2)} ;
// objectTextDivs[3].onclick = () => {use(3)} ;
// objectTextDivs[4].onclick = () => {use(4)} ;
// objectTextDivs[5].onclick = () => {use(5)} ;
// objectTextDivs[6].onclick = () => {use(6)} ;
// objectTextDivs[7].onclick = () => {use(7)} ;



// function hiddenContainer(container) {
//     container.style.display = "none";
// }

// hiddenContainer(containerOne);
// hiddenContainer(containerTwo);
// hiddenContainer(containerThree);

// function unveildContainer(uContainer) {
//     uContainer.style.display = "block";
// }

// function choice(element, container, uContainer, y, itemArray = "", funcFight ='') {
//     element.onclick = function () {
//         hiddenContainer(container);
//         unveildContainer(uContainer);
//         //per togliere vita
//         indexHealth-=y;
        
//         if (indexHealth <= 0) {
//             panelLost.style.display = 'block';
//         }
//         healthDispenser();
//         //per aggiungere item
//         if (itemArray != "") {
//             addItems(itemArray);   
//         }
//         //FIGHT
//     }; 
// }



// function fight() {
//         let attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//         let monsterLife = dataMonster[0].life;
//         let differenceAtkDfns = attack - dataMonster[0].defense; 
    
//     while (monsterLife > 0 && indexHealth > 0) {        
//         if (differenceAtkDfns <= -4) {
//             indexHealth -= 4;
//             monsterLife -= 1;
//             attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//             alert(`You feel like shit, lost four`);      
//             alert(`Life monster is ${monsterLife}, you have done only 1 damage`);           
//         } else if (differenceAtkDfns > -4 && differenceAtkDfns <= 0) {
//             indexHealth -= 3;
//             monsterLife -= 2;
//             attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//             alert(`Damn, three lives`);
//             alert(`Life monster is ${monsterLife}, you have done only 2 damage`);
//         } else if (differenceAtkDfns > 0 && differenceAtkDfns < 4) {
//             indexHealth -= 2;
//             monsterLife -= 3;
//             attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//             alert(`C--, you lose two`);
//             alert(`Life monster is ${monsterLife}, you have done 3 damage`);
//         } else if (differenceAtkDfns >= 4 && differenceAtkDfns < 6) {
//             indexHealth -= 1;
//             monsterLife -= 4;
//             attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//             alert(`Nice hit, you lost only one`);
//             alert(`Life monster is ${monsterLife}, you have done 4 damage`);
//         } else if (differenceAtkDfns >= 6) {
//             monsterLife -= 6;
//             attack = Number(attackDisplay.textContent) + Math.floor(Math.random() * 5) + 1;
//             alert(`You are a master, you inflict 6 damage`);
//         }
//     };
//     healthDispenser();
//     if (monsterLife <= 0){
//         alert('monster dead')
//     } else {
//         panelLost.style.display = 'block';
//     }
//     console.log(monsterLife)
// }
