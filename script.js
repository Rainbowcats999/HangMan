const keyboard=document.querySelector("keyboard");


//adding keyboard
for(let i=97; i<=122;i++){
    const button=document.createElement("button");
    button.classList.add("btn");
    button.innerText=String.fromCharCode(i)
    keyboard.appendChild(button);
}

//get all questions from wordlist.js
const randomIndex=Math.floor(Math.random()*wordList.length)

const loadQuestion=()=> {

}

loadQuestion();