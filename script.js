document.addEventListener('DOMContentLoaded', function() {
  const basketButtons = document.querySelectorAll('.basketBtn');
  let basketItems = JSON.parse(localStorage.getItem('basketItems')) || [];
  updateBasketCount();
  basketButtons.forEach(button => {
      button.addEventListener('click', addToBasket);
  });
  function addToBasket(event) {
      event.preventDefault();
      const card = event.target.closest('.card');
      const itemId = card.getAttribute('data-id');
      const itemName = card.querySelector('.cardName').innerText;
      const mage=card.querySelector('.cardImage')
      const itemImage=mage.getAttribute("src")
      basketItems.push({ id: itemId, name: itemName ,image:itemImage});
      localStorage.setItem('basketItems', JSON.stringify(basketItems));
      updateBasketCount();
  }
  function updateBasketCount() {
      const basketCountElement = document.querySelector('.basketCount');
      const itemCount = basketItems.length;
      basketCountElement.textContent = itemCount;
  }
  function displayBasketItems() {
      const tableBody = document.querySelector('.tableBody');
      tableBody.innerHTML = '';
      basketItems.forEach(item => {
          const newRow = document.createElement('tr');
          newRow.innerHTML = `
              <td><img src="${item.image}" alt="${item.name}"></td>
              <td>${item.name}</td>
              <td>1</td>
          `;
          tableBody.appendChild(newRow);
      });
  }
  displayBasketItems();
});

