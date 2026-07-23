const text = document.getElementById("letter-text");

const message = `¡Feliz cumpleaños, Riri!

Aunque tu cumpleaños ya pasó, quería desearte que este nuevo año de vida esté lleno de felicidad, amor y momentos inolvidables.

Espero que todos tus sueños se hagan realidad y que siempre encuentres motivos para sonreír.

Gracias por ser una persona tan especial.

Con mucho cariño val ,.`;

let i = 0;

function typeWriter(){

if(i < message.length){

text.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

window.onload = function(){

if(text){

typeWriter();

}

}
