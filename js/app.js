// #Campo Minato

// Funzioni
function boxBgOnClick() {
    this.classList.add('bg-azure');
    console.log('La casella ha il numero:' + this.innerHTML)
}

// Variabili
const gridDOMElement = document.querySelector('.grid');
const playBtnDOMElement = document.querySelector('.play-btn');

//  Ciclo for per creare ed inserire gli elementi nel DOM
playBtnDOMElement.addEventListener('click', function(){

    gridDOMElement.innerHTML = '';

    for (let i = 0; i < 100; i++){
        const n = (i + 1);
    
        const boxDOMElement = `<div class="box">${n}</div>`;
        console.log(boxDOMElement);
    
        gridDOMElement.innerHTML += boxDOMElement;  
    }

    // Recupero le caselle dal DOM
    const boxDOMElements = document.querySelectorAll('.box');
    console.log(boxDOMElements);
    
    // Creo un ciclo per poi prendere ogni casella del DOM singolarmente
    for (let i = 0; i < boxDOMElements.length; i++){

        const currentBoxDOMElement = boxDOMElements[i]
        console.log(currentBoxDOMElement)

        currentBoxDOMElement.addEventListener('click', boxBgOnClick);       
    }
})