// function showConfirmBox(text) {
//     sureDivText.innerText = text;
//     sureDiv.style.display = "block";    
// }

// function closeConfirmBox() {
//     sureDiv.style.display = "none";
//     yesRemove.removeEventListener("click", useItems);    
// }

// function checkItems(contDel) {   
//     if (indexHealth <= 6
//         && event.target.textContent === "Revive"
//         || event.target.textContent === "Candy apple") {
//         let n = event.target.textContent;
//         let i = dataItems.map(object => object.name).indexOf(n);
//         let y =`Are You sure to use ${dataItems[i].name}? It will make you recover ${dataItems[i].effect} of life `;

//         showConfirmBox(y);

//         yesRemove.addEventListener("click", () => {        
//             console.log(dataItems[i].effect)
//             if (indexHealth < 6) {
//                 indexHealth += Number(dataItems[i].effect);       
//             } else {
//                 indexHealth += 1;
//             }
//             contDel.textContent = "...";    
//             healthDispenser();
//             closeConfirmBox();
//         });
//         noRemove.addEventListener("click", () => {
//             console.log("You don't lose your item");
//             closeConfirmBox();
//         });
//     }
// }

// function remove(contDel) {
//     if (contDel.textContent != "...") {
//         let x= "Are you sure you want to delete this item?";
//         showConfirmBox(x);
//         yesRemove.addEventListener("click", () => {
//             contDel.innerText = "...";
//             closeConfirmBox();  
//         });
//         noRemove.addEventListener("click", () => {
//             console.log("You don't lose your item");
//             closeConfirmBox();
//         }); 
//     }
// }

// function cancelOrUseClick(event) {
//     switch (event.target) {
//         case cancelButton[0]:
//             remove(itemContainer[0])
//             break;
//         case cancelButton[1]:
//             remove(itemContainer[1])
//             break;
//         case cancelButton[2]:
//             remove(itemContainer[2])
//             break;
//         case cancelButton[3]:
//             remove(itemContainer[3])
//             break;
//         case cancelButton[4]:
//             remove(itemContainer[4])   
//             break;
//         case cancelButton[5]:
//             remove(itemContainer[5])
//             break;
//         case cancelButton[6]:
//             remove(itemContainer[6])
//             break;
//         case cancelButton[7]:
//             remove(itemContainer[7])
//             break;
//         case itemContainer[0]:    
//             checkItems(itemContainer[0])
//             break;
//         case itemContainer[1]:
//             checkItems(itemContainer[1])
//             break;
//         case itemContainer[2]:
//             checkItems(itemContainer[2])
//             break;
//         case itemContainer[3]:
//             checkItems(itemContainer[3])
//             break;
//         case itemContainer[4]:
//             checkItems(itemContainer[4])   
//             break;
//         case itemContainer[5]:
//             checkItems(itemContainer[5])
//             break;
//         case itemContainer[6]:
//             checkItems(itemContainer[6])
//             break;
//         case itemContainer[7]:
//             checkItems(itemContainer[7])
//             break;
//         default:
//             console.log("default")
//             break;
//     }
// }

// document.getElementsByClassName("backpack")[0].onclick = (event) => cancelOrUseClick(event);
