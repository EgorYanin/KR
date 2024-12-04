const products = [
  { id: 1, name: "Шайба", description: "Классическая шайба для хоккея", price: 300, image: "puck.jpg" },
  { id: 2, name: "Клюшка", description: "Клюшка для начинающих игроков", price: 2000, image: "stick.jpg" },
  { id: 3, name: "Футболка с логотипом", description: "Футболка с эмблемой клуба", price: 800, image: "tshirt.jpg" },
  { id: 4, name: "Шлем", description: "Защитный шлем для игроков", price: 2500, image: "helmet.jpg" },
  { id: 5, name: "Краги", description: "Краги для игры в хоккей", price: 1500, image: "gloves.jpg" },
  { id: 6, name: "Шарф с эмблемой", description: "Теплый шарф с эмблемой", price: 700, image: "scarf.jpg" },
  { id: 7, name: "Бутылка для воды", description: "Фирменная бутылка для воды", price: 500, image: "bottle.jpg" },
  { id: 8, name: "Кепка", description: "Кепка с логотипом клуба", price: 900, image: "cap.jpg" },
  { id: 9, name: "Шапка", description: "Шапка с логотипом клуба", price: 600, image: "hat.jpg" },
  { id: 10, name: "Значок", description: "Коллекционный значок клуба", price: 300, image: "badge.jpg" },
  { id: 11, name: "Магнит", description: "Магнит", price: 200, image: "magnet.jpg" },
  { id: 12, name: "Рюкзак", description: "Фирменный рюкзак", price: 2500, image: "bag.jpg" },
];

const productList = document.getElementById("product-list");


function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = '<p class="text-center text-danger">Товары не найдены.</p>';
    return;
  }
  filteredProducts.forEach(product => {
    const productBlock = document.createElement("div");
    productBlock.className = "col-md-3 col-sm-6 product";
    productBlock.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="text-primary">Цена: ${product.price} р.</p>
        </div>
        <div class="card-footer">
          <input type="number" id="quantity-${product.id}" name="quantity" min="0" value="0" class="form-control">
          <p class="order-text">Заказать</p>
        </div>
      </div>
    `;
    productList.appendChild(productBlock);
  });
}

displayProducts(products);

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


function searchProducts() {
  const searchText = searchInput.value.toLowerCase().trim();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText) ||
    product.description.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
}





