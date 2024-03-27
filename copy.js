class Item {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}

const inventory = [];

const inventoryTable = document.getElementById('inventory-table');
const lowStockNotification = document.getElementById('low-stock-notification');
const itemForm = document.getElementById('item-form');

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    const newItem = new Item(itemName, category, price, quantity);
    inventory.push(newItem);

    updateInventoryTable();
    checkLowStock();
});

function updateInventoryTable() {
    const tbody = inventoryTable.querySelector('tbody');
    tbody.innerHTML = '';
    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
        `;
        tbody.appendChild(row);
    });
}

function checkLowStock() {
    const lowStockItems = inventory.filter(item => item.quantity <= 3);
    if (lowStockItems.length > 0) {
        lowStockNotification.textContent = `Low stock alert: ${lowStockItems.length} item(s) need restocking.`;
    } else {
        lowStockNotification.textContent = '';
    }
}