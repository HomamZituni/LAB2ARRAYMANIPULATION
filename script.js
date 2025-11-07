//Task 1 and 2

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

function filterItems (searchTerm) {
return shoppingList.filter(item => { 
item.toLowerCase().includes(searchTerm.toLowerCase)
});

}



