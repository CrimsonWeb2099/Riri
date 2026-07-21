const enter = document.getElementById("enter");
const loading = document.querySelector(".loading-screen");
const content = document.getElementById("content");
const text = document.getElementById("letter-text");


const message = `
¡Feliz cumpleaños, Riri! 🖤

Espero que hayas tenido un día hermoso,
lleno de felicidad, sonrisas y momentos especiales.

Te deseo mucho amor, alegría y éxito
en este nuevo año de tu vida.

Que todos tus sueños se cumplan
y que nunca te falten razones para sonreír.

Eres una persona increíble.

🖤
`;


enter.onclick = () => {

loading.style.display = "none";
content.style.display = "block";

typeWriter();

};


let i = 0;

function typeWriter(){

if(i < message.length){

text.innerHTML += message.charAt(i);
i++;

setTimeout(typeWriter,45);

}

}
