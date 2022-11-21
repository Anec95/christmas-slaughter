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

function create(type, nameId, inside) {
    const remove  = document.createElement(type);
    remove.setAttribute('id', nameId);
    removeMenu.appendChild(remove);
    remove.innerText = inside;
}

function yesOrNo(ev, itemCont) {
    switch (ev.target) {
        case yesRemove:
            itemCont.innerText = "...";
            sureDiv.style.display = "none";
            break;
        case noRemove:
            sureDiv.style.display = "none";
            break;
        default:
            console.log("default");
            break
    }
} 


// function yesOrNo(ev, itemCont) {
//     switch (ev.target) {
//         case yesRemove:
//             itemCont.innerText = "...";
//             sureDiv.style.display = "none";
//             break;
//         case noRemove:
//             sureDiv.style.display = "none";
//             break;
//         default:
//             console.log("default");
//             break
//     }
// }

// document.getElementsByClassName("remove-menu")[0].onclick = (ev) => yesOrNo(ev, itemContainer[0]);




function cancelClick(event) {
    switch (event.target) {
        case cancelButton[0]:
            if (itemContainer[0].textContent != "...") {
                sureDiv.style.display = "block";
                create("button", "remove-yes", "yes");
                create("button", "remove-no", "no");               
            }
            // yesOrNo(ev, itemContainer[0]);
            document.getElementsByClassName("remove-menu")[0].onclick = (ev) => yesOrNo(ev, itemContainer[0]);
            break;
        case cancelButton[1]:
            if (itemContainer[1].textContent != "...") {
                sureDiv.style.display = "block";                
            }
            break;
        case cancelButton[2]:
            if (itemContainer[2].textContent != "...") {
                sureDiv.style.display = "block";                
            }
            break;
        case cancelButton[3]:
            if (itemContainer[3].textContent != "...") {
                sureDiv.style.display = "block";                
            }
            break;
        case cancelButton[4]:
            if (itemContainer[4].textContent != "...") {
                sureDiv.style.display = "block";                
            }   
            break;
        case cancelButton[5]:
            if (itemContainer[5].textContent != "...") {
                sureDiv.style.display = "block";                
            }
            break;
        case cancelButton[6]:
            if (itemContainer[6].textContent != "...") {
                sureDiv.style.display = "block";                
            }
            break;
        case cancelButton[7]:
            if (itemContainer[7].textContent != "...") {
                sureDiv.style.display = "block";                
            }
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

function choice(element, container, uContainer, itemArray) {
    element.ondblclick = function () {
        hiddenContainer(container);
        unveildContainer(uContainer);
        addItems(itemArray);
    }; 
}


choice(start, intro, containerOne, itemArr[0]);
choice(optionOne, containerOne, containerTwo, itemArr[1]);
choice(optionFour, containerTwo, containerThree, itemArr[0]);





