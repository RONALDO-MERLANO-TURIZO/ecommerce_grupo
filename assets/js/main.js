const items = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/images/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/images/featured3.png',
    category: 'shirts',
    quantity: 20
  }
]


/* funcionalidad de animacion de icon incio*/

const loadComponent =()=>{
  const loader = document.getElementById("loader")

  setTimeout( () => {
    loader.classList.add("hide")
 }, 3000);
}


/* funcion de cambio de tema*/
document.addEventListener("DOMContentLoaded",()=>{

})


const themeIcon = document.getElementById("theme-btn")

themeIcon.addEventListener("click",()=>{

  document.body.classList.toggle("dark")

  if (themeIcon.classList.contains("bx-moon")) {
    themeIcon.classList.replace("bx-moon" , "bx-sun")
  }else{ 
    themeIcon.classList.replace("bx-sun" , "bx-moon")
  }

})

// Abrir y cerrar Bolsa
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener('click', () => {
  cart.classList.add('active');
});

closeCart.addEventListener("click", () => {
  cart.classList.remove('active');
});

//Inicio de la bolsa JS
if (document.readyState == "loading") {
  document.addEventListener('DOMContentLoaded', start)
}else{
  start();
}

// Inicio
function start(){
  addEventListener();
}

// Actualizar & Rerender
function update(){
  AddEvents();
  updateTotal();
}

// Agregar eventos
function AddEvents() {
  //Eliminar productos de la bolsa
  let cartRemove_btns = document.querySelectorAll('.cart-remove');
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) =>{
      btn.addEventListener("click", handle_removeCartItem);
  });
}

  //Cambiar producto quantity
  let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
  cartQuantity_inputs.forEach((input) =>{
    input.addEventListener("change", handle_changeItemQuantity);
  });

  //Add item to cart
  let addToCart_Btn = document.querySelectorAll(".add-cart");
  addToCart_Btn.forEach((btn) =>{
    btn.addEventListener("click", handle_addCartItem);
  });

  //Compra
  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);


// Handle Events Funtions
let itemsAdded = [];
function handle_addCartItem(){
  let product = this.parentElement;
  let title = product.querySelector(".cart-product__title").innerHTML;
  let price = product.querySelector(".container--precio-stock").innerHTML;
  let imgSrc = product.querySelector(".img--cards").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  // El producto solicitado ya existe
  if(itemsAdded.find(el => el.title === newToAdd.title)){
    alert("El producto solicitado ya existe");
    return;
  }else{
    itemsAdded.push(newToAdd);
  }

  //Agregar productos to cart
  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(el=>el.title != this.parentElement.querySelector(".cart-product-title").innerHTML);

  update();
}

function handle_changeItemQuantity() {
  if(isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = math.floor(this.value);

  update();

}

function handle_buyOrder(){
  if(itemsAdded.length <= 0) {
    alert("Todavia no tienes un pedido! \nPor favor realiza un pedido");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = '';
  alert("Tu compra se ha hecho de forma satisfactoria. \nFeliz día. :)");

  itemsAdded = [];

  update();
}

// Actualización & Rerender Funtions
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-Box");
  const totalElement = document.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".container--precio-stock");
    let price = parseFloat(priceElement.innerHTML.replace("$", ""))
    let quantity = cartBox.querySelector('.cart-quantity').value;
    total += price * quantity;
  });

  // keep 2 digits after the decimal
  total = total.toFixed(2);
  //or you can use also
  total = Math.round(total * 100) / 100;

  totalElement.innerHTML = "$" + total;
}


// HTML Componentes
function CartBoxComponent(title, price, imgSrc){
  return `
  <div class="cart-box">
    <img src="{imgSrc}" alt="" class="cart-img">
    <div class="details-box">
        <div class="cart-product-title">${title}</div>
        <div class="container--precio-stock">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- Icono Borrar Bolsa -->
    <i class='bx bxs-trash cart-remove'></i>
  </div>`;
}
/*
//organizaremos el boton mas y menos = cambio de cantidad de articulos ingresados por el usuario.
let plusBtn = document.querySelector('.add-cart');

let userInputNumber = 0;
plusBtn.addEventListener('click', () => {
  userinput.value = userInputNumber;
  userInputNumber++;
});
minusBtn.addEventListener('click', () => {
  userinput.value = userInputNumber;
  userInputNumber--;
  if(userInputNumber <= 0) {
      userInputNumber = 0;
  }
  console.log('userInputNumber');
});

//Agregar el total de productos al carrito, cuando se preciosa el boton Add to cart

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart-notification');
addToCartBtn.addEventListener('click', () => {
  let lastValue = parseInt(cartNotification.innerText);
  lastValue = lastValue + userInputNumber;
  cartNotification.innerText = userInputNumber;
  cartNotification.style.display = 'block';
});*/