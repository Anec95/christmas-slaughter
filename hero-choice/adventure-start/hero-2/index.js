import { dataItems } from "./items.js";
console.log(dataItems);
import { dataWeapons } from "./items.js";
console.log(dataWeapons);

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
let itemContainer = document.getElementsByClassName("object-name");
let sureDiv = document.getElementById("items-yes-no");
let sureDivText = document.getElementById("remove-text");
let yesRemove = document.getElementById("remove-yes");
let noRemove = document.getElementById("remove-no");

let itemArr = [
    {
        name: "apple",
        type: "food",
        effect: "+1 health"
    },
    {
        name: "bread",
        type: "food",
        effect: "+1 health"
    },
    ];

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
    for (let i = 0; i < itemContainer.length; i++) {
        if (itemContainer[i].textContent === "...") {
            itemContainer[i].innerText = itemArray.name;
            break;
        } else if (i === itemContainer.length-1 && itemContainer[i].textContent != "...") {
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
    element.ondblclick = function () {
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
choice(optionFour, containerTwo, containerThree, 3, dataWeapons[2]);

function showConfirmBox(text) {
    sureDivText.innerText = text;
    sureDiv.style.display = "block";    
}

function closeConfirmBox() {
    sureDiv.style.display = "none";    
}

function checkItems(contDel) {    
    if (indexHealth <= 6
        && event.target.textContent === "revive"
        || event.target.textContent === "apple") {
        let n = event.target.textContent;
        let i = dataItems.map(object => object.name).indexOf(n);
        let y =`Are You sure to use ${dataItems[i].name}? It will make you recover ${dataItems[i].effect} of life `;

        showConfirmBox(y);

        yesRemove.addEventListener("click", () => {
            if (indexHealth < 6) {
                indexHealth += Number(dataItems[i].effect);             
            } else {
                indexHealth += 1;
            }
            contDel.textContent = "...";    
            healthDispenser();
            closeConfirmBox();  
        });
        noRemove.addEventListener("click", () => {
            console.log("You don't lose your item");
            closeConfirmBox();
        });
    }
}

function remove(contDel) {
    if (contDel.textContent != "...") {
            let x= "Are you sure you want to delete this item?";
            showConfirmBox(x);
            yesRemove.addEventListener("click", () => {
                contDel.innerText = "...";
                closeConfirmBox();  
            });
            noRemove.addEventListener("click", () => {
                console.log("You don't lose your item");
                closeConfirmBox();
            }); 
    }
}

function cancelOrUseClick(event) {
    switch (event.target) {
        case cancelButton[0]:
            remove(itemContainer[0])
            break;
        case cancelButton[1]:
            remove(itemContainer[1])
            break;
        case cancelButton[2]:
            remove(itemContainer[2])
            break;
        case cancelButton[3]:
            remove(itemContainer[3])
            break;
        case cancelButton[4]:
            remove(itemContainer[4])   
            break;
        case cancelButton[5]:
            remove(itemContainer[5])
            break;
        case cancelButton[6]:
            remove(itemContainer[6])
            break;
        case cancelButton[7]:
            remove(itemContainer[7])
            break;
            case itemContainer[0]:            
            checkItems(itemContainer[0])
            break;
        case itemContainer[1]:
            checkItems(itemContainer[1])
            break;
        case itemContainer[2]:
            checkItems(itemContainer[2])
            break;
        case itemContainer[3]:
            checkItems(itemContainer[3])
            break;
        case itemContainer[4]:
            checkItems(itemContainer[4])   
            break;
        case itemContainer[5]:
            checkItems(itemContainer[5])
            break;
        case itemContainer[6]:
            checkItems(itemContainer[6])
            break;
        case itemContainer[7]:
            checkItems(itemContainer[7])
            break;
        default:
            console.log("default")
            break;
    }
}

document.getElementsByClassName("backpack")[0].onclick = (event) => cancelOrUseClick(event);