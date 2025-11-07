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
return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));


}


//Task 3

const input= document.getElementById("itemInput");
const addBtn= document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const listDisplay= document.getElementById("shoppingListDisplay");

function renderList() {
listDisplay.innerHTML= "";

shoppingList.forEach(item => {
const li = document.createElement("li");
li.textContent = item;
listDisplay.appendChild(li);
});
}

addBtn.addEventListener("click", () => {
const item= input.value.trim();
if(item){
addItem(item);
renderList();
input.value= "";
}
})

removeBtn.addEventListener("click", () => {
    removeLastItem();  
    renderList();      
});
