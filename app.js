let selectedItems = [];

function selectItem(item) {
    item.classList.toggle('selected');
    
    const itemName = item.querySelector('h3').textContent;
    if (item.classList.contains('selected')) {
        selectedItems.push(itemName);
    } else {
        selectedItems = selectedItems.filter(name => name !== itemName);
    }
}

function placeOrder() {
    if (selectedItems.length === 0) {
        alert('Выберите хотя бы одно блюдо!');
        return;
    }
    
    const orderText = `Ваш заказ:\n${selectedItems.join('\n')}`;
    alert(orderText);
    
    // Здесь будет код отправки заказа на сервер
    selectedItems = [];
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('selected');
    });
}