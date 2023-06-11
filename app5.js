let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'PRODUCT NAME1',
    image: '1.PNG',
    price: 120000,
  },
  {
    id: 2,
    name: 'PRODUCT NAME2',
    image: '2.PNG',
    price: 130000,
  },
  {
    id: 3,
    name: 'PRODUCT NAME3',
    image: '3.PNG',
    price: 110000,
  },
  {
    id: 4,
    name: 'PRODUCT NAME4',
    image: '4.PNG',
    price: 100000,
  },
  {
    id: 5,
    name: 'PRODUCT NAME5',
    image: '5.PNG',
    price: 120000,
  },
  {
    id: 6,
    name: 'PRODUCT NAME6',
    image: '6.PNG',
    price: 110000,
  },
];

let listCards = [];

function intApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="image/${value.image}"/>
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add to Cart</button>
    `;
    list.appendChild(newDiv);
  });
}

intApp();

function addToCard(key) {
  if (listCard[key] === null) {
    listCard[key] = products[key];
    listCard[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCard.forEach((value, key) => {
    totalPrice += value.price;
    count += value.quantity;
    if (value !== null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}