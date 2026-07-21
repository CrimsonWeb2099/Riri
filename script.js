const enter = document.getElementById("enter");
const loading = document.querySelector(".loading-screen");
const letter = document.getElementById("letter");
const text = document.getElementById("letter-text");


const message = `
¡Feliz cumpleaños, Riri! 

Espero que hayas tenido un día hermoso,
lleno de felicidad, sonrisas y momentos especiales.

Te deseo mucho amor, alegría y éxito
en este nuevo año de tu vida.

Que todos tus sueños se cumplan
y que nunca te falten razones para sonreír.

Eres una persona increíble
y espero que nunca olvides lo especial que eres.

Gracias por ser una amiga tan linda.

Te deseo lo mejor siempre.


`;


enter.onclick = () => {

    loading.style.display = "none";
    letter.style.display = "block";

    typeWriter();

};


let i = 0;

function typeWriter(){

    if(i < message.length){

        text.innerHTML += message.charAt(i);
        i++;

        setTimeout(typeWriter, 45);

    }

}
