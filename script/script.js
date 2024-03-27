const groceryInventory = []; 

class GroceryItem {
    constructor(name, category, price, quantity){
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }

    displayInfo(){
        return `${this.name} has low stock!`
    }
}

function notifyLowInventory(arrayOfItems){
    return arrayOfItems.filter(item => item.quantity <= 3)
}

document.addEventListener('DOMContentLoaded', () => {

    const displayContent = (array, elementId) => {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '';

        array.forEach(item => { 
            const arrayItem = document.createElement('li'); // creates a list on the DOM
            arrayItem.textContent = item.displayInfo()      // calls the classes method 
            listElement.appendChild(arrayItem);             // appends child ??
        })
    }

const itemsTable = document.getElementById('items_table');
function addItemsToTable(){
    const tbody = itemsTable.querySelector('tbody');        // gets the table body 
    tbody.innerHTML = '';
    groceryInventory.forEach(item => {
        const row = document.createElement('tr');       // creates a table row and itll put data in row from user input
        row.innerHTML=`
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>`;
        tbody.appendChild(row);
    })
}
    document.getElementById('add_inventory_btn').onclick = () => {

        const name = document.getElementById('add_inventory_name').value;
        const category = document.getElementById('add_inventory_category').value;
        const price = parseInt(document.getElementById('add_inventory_price').value);
        const quantity = parseInt(document.getElementById('add_inventory_quantity').value);

        const newGroceryItem = new GroceryItem(name,category, price, quantity);

        groceryInventory.push(newGroceryItem);
        // displayContent(groceryInventory, 'list-of-inventory');
        displayContent(notifyLowInventory(groceryInventory), 'low-on-inventory');
        // console.log(notifyLowInventory(groceryInventory)); checks to on console if function working

        addItemsToTable();
    }
})
