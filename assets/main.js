let pizzas = [{
    id: 1,
    nombre: "Pikachu ( Muzzarella )",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Oregano", "Aceitunas"],
    precio: 600,
    image: "./assets/img/pika.png"
},{
    id: 2,
    nombre: "Charmander ( Jamon y Morrones )",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Morrones", "Aceitunas"],
    precio: 1200,
    image: "./assets/img/char.png"
},{
    id: 3,
    nombre: "Gloom ( Fugazzeta )",
    ingredientes:["Queso Muzzarella", "Cebolla", "Oregano", "Aceitunas"],
    precio: 900,
    image: "./assets/img/gloom.png"
},{
    id: 4,
    nombre: "Executor ( Jamon y Anana )",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Jamón", "Anana", "Cerezas", "Oregano"],
    precio: 1200,
    image: "./assets/img/executor.png"
},{
    id: 5,
    nombre: "Koffing ( Cochina )",
    ingredientes:["Queso Muzzarella", "Salsa Tomate", "Papas Fritas", "Huevo Frito"],
    precio: 800,
    image: "./assets/img/koffing.png"
},{
    id: 6,
    nombre: "Braviary ( Americana )",
    ingredientes:["Queso Cheddar", "Salsa Barbacoa ", "Cebolla Crispy", "Panceta"],
    precio: 1600,
    image: "./assets/img/braviery.png"
}];
const formfield = document.getElementById('searchForm');
let inputField = document.getElementById('idInput');
let searchBtn = document.getElementById('searchBtn');
let pizzaName = document.getElementById('nameField');
let pizzaPrice = document.getElementById('priceField');
let pokeImage = document.getElementById('poke');
let musicBtn = document.getElementById('musicBtn');
let musicBtnPause = document.getElementById('musicBtn-pause');
const music = new Audio('./assets/PokemonIntroGameboy.mp3');
let btnReset = document.getElementById('btnReset');
const error = formfield.querySelector("small");

const searchPizza = (numero) => {
    const pizzasss = pizzas.find( e => e.id == numero);
    
    if (pizzasss == undefined){
        error.textContent = "No tenemos Pokepizza con ese número"
        pizzaName.textContent = "";
        pizzaPrice.textContent = "";
        pokeImage.innerHTML = "";
    } else{
        error.textContent = "";
        pizzaName.textContent = pizzasss.nombre;
        pizzaPrice.textContent = `$ ${pizzasss.precio}`;
        pokeImage.innerHTML = `<img src="${pizzasss.image}" alt="">`  
    }


};

btnReset.addEventListener('click', function(){
    musicBtn.style.display= "flex";
    musicBtnPause.style.display= "none";
    music.pause();
    pizzaName.textContent = "";
    pizzaPrice.textContent = "";
    pokeImage.innerHTML = "";
    error.textContent = "";
})

musicBtnPause.addEventListener('click', function (){
    music.pause();
    musicBtn.style.display= "flex";
    musicBtnPause.style.display= "none"; 
})
musicBtn.addEventListener('click', function (){
    music.play();
    musicBtnPause.style.display= "flex";
    musicBtn.style.display= "none";
    
})



searchBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    searchPizza(inputField.value);

    inputField.value = "";
})

