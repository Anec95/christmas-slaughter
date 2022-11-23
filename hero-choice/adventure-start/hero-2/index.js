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


let cancelButton = document.getElementsByClassName("fa-times-circle-o");
let itemContainer = document.getElementsByClassName("object-name");
let sureDiv = document.getElementById("items-yes-no");
let yesRemove = document.getElementById("remove-yes");
let noRemove = document.getElementById("remove-no");
let removeMenu = document.getElementById("remove-menu");
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

function showConfirmBox() {
    sureDiv.style.display = "block";    
}

function closeConfirmBox() {
    sureDiv.style.display = "none";    
}

function remove(contDel) {
    if (contDel.textContent != "...") {
            showConfirmBox();
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

function cancelClick(event) {
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
        default:
            console.log("default")
            break;
    }
}

document.getElementsByClassName("backpack")[0].onclick = (event) => cancelClick(event);

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
choice(optionOne, containerOne, containerTwo, 1, itemArr[1]);
choice(optionFour, containerTwo, containerThree, 3, itemArr[0]);