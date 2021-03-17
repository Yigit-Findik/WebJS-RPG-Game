const choiceElement = document.getElementById("choice");
const logElement = document.getElementById("log");
const logElement = document.getElementById("art");

//?Paragraph tag generator
function pTagGenerator(content, klasse, choice, logChoice){
    if(logChoice = "log"){
        const pTag = document.createElement("p");
        pTag.textContent = content;
        pTag.setAttribute("class", klasse);
        return pTag;
    }

    else if(logChoice = "choice"){
        const pTag = document.createElement("p");
        pTag.textContent = content;
        pTag.setAttribute("class", klasse);
        pTag.setAttribute('onClick', choice);
        return pTag;
    }
}


//?imgGenerator functie
function imgGenerator(source){
    const imgt = document.createElement("img");
    imgt.setAttribute("class",klasse);
    imgt.setAttribute("src", source);
    return imgt;
}


//?als game word gestart
function startGame() {
    logElement.innerHTML = "Greetings Adventurer! What is your name?"
    choiceElement.appendChild(pTagGenerator("Yes!", "damage", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "damage", "choiceNo1()", "choice"));
}


//?choice ja
function choiceYes1() {
    choiceElement.innerHTML = "";
    logElement.appendChild(pTagGenerator("Yes!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("No!", "damage", "choiceNo1()", "choice"));
    ArtElement.appendChild(imgGenerator("https://via.placeholder.com/150","x"))
}