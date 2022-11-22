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

function isConfirm(answer, itemCont) {    
    if (answer) {
        itemCont.innerText = "...";
    } else {
        console.log("You don't lose the item");
    }
    closeConfirmBox();    
}

function cancelClick(event) {
    switch (event.target) {
        case cancelButton[0]:
            if (itemContainer[0].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[0])");
                showConfirmBox();
                isConfirm(answer);
            }
            closeConfirmBox();
            break;
        case cancelButton[1]:
            if (itemContainer[1].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[1])");
                showConfirmBox();
                isConfirm(answer);         
            }
            closeConfirmBox();
            break;
        case cancelButton[2]:
            if (itemContainer[2].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[2])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();
            break;
        case cancelButton[3]:
            if (itemContainer[3].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[3])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();
            break;
        case cancelButton[4]:
            if (itemContainer[4].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[4])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();   
            break;
        case cancelButton[5]:
            if (itemContainer[5].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[5])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();
            break;
        case cancelButton[6]:
            if (itemContainer[6].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[6])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();
            break;
        case cancelButton[7]:
            if (itemContainer[7].textContent != "...") {
                yesRemove.setAttribute("onclick", "isConfirm(true, itemContainer[7])");
                showConfirmBox();
                isConfirm(answer);               
            }
            closeConfirmBox();
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
    if (itemContainer[0].textContent == "..."){
        itemContainer[0].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent == "...") {
        itemContainer[1].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent == "...") {
        itemContainer[2].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent == "...") {
        itemContainer[3].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent != "..." &&
    itemContainer[4].textContent == "...") {
        itemContainer[4].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent != "..." &&
    itemContainer[4].textContent != "..." &&
    itemContainer[5].textContent == "...") {
        itemContainer[5].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent != "..." &&
    itemContainer[4].textContent != "..." &&
    itemContainer[5].textContent != "..." &&
    itemContainer[6].textContent == "...") {
        itemContainer[6].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent != "..." &&
    itemContainer[4].textContent != "..." &&
    itemContainer[5].textContent != "..." &&
    itemContainer[6].textContent != "..." &&
    itemContainer[7].textContent == "...") {
        itemContainer[7].innerText = itemArray.name;
    } else if (itemContainer[0].textContent != "..." &&
    itemContainer[1].textContent != "..." &&
    itemContainer[2].textContent != "..." &&
    itemContainer[3].textContent != "..." &&
    itemContainer[4].textContent != "..." &&
    itemContainer[5].textContent != "..." &&
    itemContainer[6].textContent != "..." &&
    itemContainer[7].textContent != "...") {
        alert("you have no more space");
    }
}


const health = document.getElementsByClassName("health")[0];
let heart = document.getElementsByClassName("fa-heart");

let index = 7;

function healthDispenser() {    
    if (index === 7) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>`;
    } else if (index === 6) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 5) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 4) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 3) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 2) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 1) {
        health.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
    } else if (index === 0) {
        health.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>`;
        alert("You lost the game");
    }
}

healthDispenser();

function choice(element, container, uContainer, y, itemArray) {
    element.ondblclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
        //per togliere vita
        index=index-y;
        healthDispenser();
        //per aggiungere item
        addItems(itemArray);        
    }; 
}


choice(start, intro, containerOne, 0);
choice(optionOne, containerOne, containerTwo, 1, itemArr[1]);
choice(optionFour, containerTwo, containerThree, 3, itemArr[0]);