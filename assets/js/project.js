const project = [
    {
        id : 1,
        img : "./assets/img/portfolio.png",
        title : "Portfolio",
        cardsub : "HTML + CSS + JS + BOOTSTRAP",
        descrpt : "I created this website so I could showcase all my projects and education.",
        github : "https://github.com/abbas-sudo/portfolio",
        launch: "https://abbas-sudo.github.io/portfolio/"
    },
    {
        id : 2,
        img : "./assets/img/recipe.png",
        title : "Recipe Guide",
        cardsub : "React Js + API",
        descrpt : "A website build on react js with Recipe API for serving the Recipes according to the user search.",
        github : "https://github.com/abbas-sudo/React-API-Recipe",
        launch: "https://abbas-sudo.github.io/React-API-Recipe/"
    },
    {
        id : 3,
        img : "./assets/img/covid.png",
        title : "Corona Tracker",
        cardsub : "React Js + API + Bootstrap5",
        descrpt : "Corona Tracker thats show the current stat's of total corana cases by countries and world.",
        github : "https://github.com/abbas-sudo/corona-tracker",
        launch: "https://abbas-sudo.github.io/corona-tracker/"
    },
     {
        id : 4,
        img : "./assets/img/weather.png",
        title : "Weather Application",
        cardsub : "React Js + API + SASS",
        descrpt : "React Js App that will show the live tempreature of the cities around the world.",
        github : "https://github.com/abbas-sudo/Weather-React-App",
        launch: "https://abbas-sudo.github.io/Weather-React-App/"
    },
    {
        id : 5,
        img : "./assets/img/food.png",
        title : "Restaurant E-Commerce",
        cardsub : "HTML + SASS",
        descrpt : "A E-commerce website build on pure SASS to showcase my CSS preprosessor Skills. ",
        github : "https://github.com/abbas-sudo/restaurants-SASS",
        launch: "https://abbas-sudo.github.io/restaurants-SASS/"
    }
];

const img = document.getElementById("cardimg");
const title = document.getElementById("cardtitle");
const cardsub = document.getElementById("card-subtitle");
const descrpt = document.getElementById("descrpt");
const github = document.getElementById("github");
const launch = document.getElementById("launch");

const box = document.querySelector(".box");

window.addEventListener("DOMContentLoaded", function () {
    let displayMenu = project.map(function(item){
        return `
        <div class="card" style="width: 18rem; background-color:white !important" >
         <img class="card-img-top" id="cardimg" src=${item.img} alt="Card image cap">
        <div class="card-body card-styling">
          <h5 class="card-title" id="cardtitle">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="card-subtitle">${item.cardsub}</h6>
          <p class="card-text" id="descrpt">${item.descrpt}</p>
          <a href="${item.github}" target= "_blank" class="btn btn-outline-primary w-50 " id="github"><i class="fa fa-github-square" aria-hidden="true">Github</i></a>
        <a href="${item.launch}" target= "_blank" class="btn btn-primary " id="launch"><i class="fa fa-location-arrow" aria-hidden="true">Launch</i></a>
              </div>
                      </div>
                      </div>`;
        
      })
      displayMenu = displayMenu.join("");
      console.log(displayMenu);
      
      box.innerHTML = displayMenu;

});



