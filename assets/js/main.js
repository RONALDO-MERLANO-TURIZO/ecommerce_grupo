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
let userInput = document.querySelector(".cart-quantity");
let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector(".cart-quantity");

let userInputNumber = 0;

cartIcon.addEventListener('click', () => {
  cart.classList.add('active');
});

closeCart.addEventListener("click", () => {
  cart.classList.remove('active');
});


//Agregamos el boton plus.
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInputNumber.value = userInputNumber;
  console.log('userInputNumber');
});

minusBtn.addEventListener("click", () => { 
  userInputNumber--;
  if (userInputNumber<=0){
    userInputNumber = 0;
  }
  userInputNumber.value = userInputNumber;
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
});

/* Mostrar el modal del carrito */
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart');

cartIconBtn.addEventListener('click', () => {
  cartModal.style.display ='block';
});

//Borrar el contenido del carrito
const deleteProductBtn = document.querySelector('#cart-remove');
const productContainer = document.querySelector('btn-buy');

deleteProductBtn.addEventListener('click', () =>{
  productContainer.innertext = 'Acabas de eleminiar tus productos';
});


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