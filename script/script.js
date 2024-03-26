const groceryInventory = []; 

class GroceryItem {
    constructor(name, category, price, quantity){
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}


/*
monitor stock levels and signal when restocking is needed
*/

function notifyLowInventory(arrayOfItems){
    return arrayOfItems.filter(item => item.quantity <= 3)
}

document.addEventListener('DOMContentLoaded', () => {

    const displayContent = (array, elementId) => {
        const listElement = document.getElementById(elementId);
        listElement.innerHTML = '';

        array.forEach(item => { 
            const arrayItem = document.createElement('li');
            arrayItem.textContent = `Product: ${item.name}, Category:${item.category}, Price:${item.price}, Quantity:${item.quantity}`;
            listElement.appendChild(arrayItem);
        })
    }

    document.getElementById('add_inventory_btn').onclick = () => {
        const name = document.getElementById('add_inventory_name').value;
        const category = document.getElementById('add_inventory_category').value;
        const price = parseInt(document.getElementById('add_inventory_price').value);
        const quantity = parseInt(document.getElementById('add_inventory_quantity').value);

        const newGroceryItem = new GroceryItem(name,category, price, quantity);

        groceryInventory.push(newGroceryItem);
        displayContent(groceryInventory, 'list-of-inventory');
        displayContent(notifyLowInventory(groceryInventory), 'low-on-inventory');
        // console.log(notifyLowInventory(groceryInventory)); checks to on console if function working

    }
})
