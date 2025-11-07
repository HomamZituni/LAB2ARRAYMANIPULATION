//Task 1

let shoppingList = [];

function addItem (item) {
shoppingList.push(item);
}

function removeLastItem () {
shoppingList.pop();
}

function displayList() {
    console.log(shoppingList);
}