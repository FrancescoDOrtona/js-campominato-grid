// #Campo Minato

// Variabili
const gridDOMElement = document.querySelector('.grid');
const playBtnDOMElement = document.querySelector('.play-btn');

//  Ciclo for per creare ed inserire gli elementi nel DOM
for (let i = 0; i < 100; i++){
    const n = (i + 1);

    const boxDOMElement = `<div class="box">${n}</div>`
    console.log(boxDOMElement)

    gridDOMElement.innerHTML += boxDOMElement  
}