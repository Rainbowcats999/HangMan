const keyboard=document.querySelector("keyboard");
const h4=document.querySelector("h4");
const wordDisplay=document.querySelector(".wordidisplay");

//adding keyboard
for(let i=97; i<=122;i++){
    const button=document.createElement("button");
    button.classList.add("btn");
    button.innerText=String.fromCharCode(i)
    keyboard.appendChild(button);
}

//get all questions from wordlist.js
const randomIndex=Math.floor(Math.random()*wordList.length);
const {word,hint}=wordList[randomIndex];

const loadQuestion=()=> {
    h4.innerText=`Hint: ${hint}`;
    Array.from({length:word.length},()=>{
        const liTag=document.createElement("li");
        liTag.classList.add("letter");
        wordDisplay.appendChild(liTag)
    })

    
}

loadQuestion();