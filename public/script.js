const quantityInput = document.getElementById('quantity');
const itemList = document.getElementById('itemList');

function updateList() {
  const quantity = parseInt(quantityInput.value);

  itemList.innerHTML = '';

  for (let i = 0; i < quantity; i++) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = `Item ${i + 1}`;
    itemList.appendChild(item);
  }
}