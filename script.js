const enter = document.getElementById("enter");
const loading = document.querySelector(".loading-screen");
const letter = document.getElementById("letter");
const text = document.getElementById("letter-text");


const message = `
Happy Birthday, Riri.

Today is a special day because it celebrates someone
who deserves beautiful things, happiness and love.

I hope this new year of your life brings you
amazing memories, dreams coming true and moments
that make you smile.

Thank you for being you.
Never forget how special you are.

🖤
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
