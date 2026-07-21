const enter = document.getElementById("enter");
const loading = document.querySelector(".loading-screen");
const letter = document.getElementById("letter");


enter.onclick = () => {

    loading.style.display = "none";
    letter.style.display = "block";

};
