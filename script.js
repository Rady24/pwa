const slider = document.querySelector('.slider');

const carsObject = [
    {
      "img": "img/game__cards/image 71.png",
      "model" : "FERRARI 296 GTS",
      "type" : "coupe"
    },
    {
      "img": "img/game__cards/image 73.png",
      
    },
    {
      "img": "img/game__cards/image 74.png",
      
    },
    {
      "img": "img/game__cards/image 75.png",
      
    }
];

window.addEventListener('load', initializeSlider());

function initializeSlider(){
    let cars = '';
    for(let car in carsObject){
        cars += `<div class='slide'>
        <img src='${carsObject[car].img}'>
        </div>`;
    }
    slider.innerHTML = cars;
}

const tnslider = tns({
    container: ".slider",
    autoWidth: true,
    gutter: 15,
    slideBy: 1,
    nav: true,
    speed: 400,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next'
})

