let groceryInventory = [
    {name: "apple", category: "food", price: 5, quantity:10},
    {name: "bread", category:"food", price: 15, quantity:10},
    {name: "lettuce", category:"food" , price: 5, quantity:10}
] 

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

function monitorStockLevel(){
    
}