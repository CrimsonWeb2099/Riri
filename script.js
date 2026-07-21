const text = document.getElementById("letter-text");

const message = `
¡Feliz cumpleaños, Riri!

Aunque tu cumpleaños fue ayer, quería desearte que este nuevo año de vida esté lleno de felicidad, momentos inolvidables y muchas sonrisas.

Espero que cada uno de tus sueños se vaya cumpliendo poco a poco y que nunca te falten personas que te quieran y te apoyen.

Gracias por ser una persona tan especial. Deseo que disfrutes muchísimo todo lo que viene y que la música de Evanescence siga acompañándote en los buenos y malos momentos.

Con mucho cariño.
`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        text.innerHTML += message.charAt(i);
        i++;

        setTimeout(typeWriter, 40);

    }

}

window.onload = typeWriter;
