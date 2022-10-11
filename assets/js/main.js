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