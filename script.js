//Task 1

let shoppingList = [];

function addItem (item) {
if(!shoppingList.includes(item)) {
shoppingList.push(item); }
else { 
    console.log("Item already exists");
}
}


function removeLastItem () {
shoppingList.pop();
}

function displayList() {
    console.log(shoppingList);
}