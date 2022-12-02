
/* 
show box (testo, yes, no)
    {
        prendi la box
        display block
        crei bottone yes 
        crei botton no
        aggiungi onclick
    }
close box 
    {
        prendi la box
        display none
        delete bottone yes
        delete botton no
    }


*/

// handle yes btn onclick - use item
function handleYesBtn() {
    if (indexHealth < 6) {
        indexHealth += Number(dataItems[i].effect);
    } else {
        indexHealth += 1;
    }
    contDel.textContent = "...";
    healthDispenser();
    closeConfirmBox();
}

// handle no btn onclick - use item
function handleNoBtn() {
    closeConfirmBox();
}

// onclick item
function checkItems(item) {
    showbox(testo, handleYesBtn, handleNoBtn)

    // fai qualcosa
}

// funzione onclick su item per usarlo
function useItem(event) {
    if (event.target.textContent !== "...") {
        checkItems(event.target);
    }
}

// funcione delete onclick icona delete item
function deleteItem(event) {
    if (event.target.textContent !== "...") {
        const index = itemsDeleteBtn.indexOf((element) => element === event.target);
        remove(itemsUseBtn[index]);
    }
}

// use item
const itemsUseBtn = document.getElementsByClassName("object-name");
// add onclick use item
for (let i = 0; i < itemsUseBtn.length; i++) {
    itemsUseBtn[i].onclick = (event) => useItem(event);
}

// delete item icons
const itemsDeleteBtn = document.getElementsByClassName("fa-times-circle-o")
// add onclick delete item
for (let i = 0; i < itemsDeleteBtn.length; i++) {
    itemsDeleteBtn[i].onclick = (event) => deleteItem(event);
}

