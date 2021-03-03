const project = [
    {
        id : 1,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work1.jpg",
        title : "Mohammad Abbas",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 2,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work2.jpg",
        title : "Someonssse name",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 3,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work3.jpg",
        title : "Someonssse name",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 4,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work4.jpg",
        title : "Someonssse name",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : 5,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work5.jpg",
        title : "Someonssse name",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    
    {
        id : 6,
        img : "https://github.com/abbas-sudo/portfolio/raw/master/assets/img/work6.jpg",
        title : "Someonssse name",
        cardsub : "Someonssse name",
        descrpt : "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
];

const img = document.getElementById("cardimg");
const title = document.getElementById("cardtitle");
const cardsub = document.getElementById("card-subtitle");
const descrpt = document.getElementById("descrpt");

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
          <a href="#" class="btn btn-outline-primary w-50"><i class="fa fa-github-square" aria-hidden="true"> Github</i></a>
        <a href="#" class="btn btn-primary "><i class="fa fa-location-arrow" aria-hidden="true"> Launch</i></a>
              </div>
                      </div>
                      </div>`;
        
      })
      displayMenu = displayMenu.join("");
      console.log(displayMenu);
      
      box.innerHTML = displayMenu;

});



