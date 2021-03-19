var choiceElement = document.getElementById("choice");
var logElement = document.getElementById("log");
var ArtElement = document.getElementById("art");
var ItemsElement = document.getElementById("items");

//Onload startgame
function startGame() {

    logElement.innerHTML = "Greetings Adventurer! What is your name?";
    choiceElement.appendChild(inputGenerator("name", "inputClass","nameInput()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "damage", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "damage", "choiceNo1()", "choice"));
}

//Paragraph tag generator
function pTagGenerator(content, klasse, choice, logChoice){
    //var pTag = <p class="damage" onclick="choiceYes1()">Yes!</p>
    if(logChoice == "log"){
        const pTag = document.createElement("p");
        pTag.textContent = content;
        pTag.setAttribute("class", klasse);
        return pTag;
    }

    else if(logChoice == "choice"){
        const pTag = document.createElement("p");
        pTag.textContent = content;
        pTag.setAttribute("class", klasse);
        pTag.setAttribute('onClick', choice);
        return pTag;
    }
}

function inputGenerator(content, klasse, choice, logChoice){
    if(logChoice == "log"){
        const inputTag = document.createElement("input");
        inputTag.textContent = content;
        pTag.setAttribute("class", klasse);
        return inputTag
    }

    else if(logChoice == "choice"){
        const inputTag = document.createElement("input");
        inputTag.textContent = content;
        inputTag.setAttribute("class",klasse);
        inputTag.setAttribute("onClick", choice);
        return inputTag;
    }
}


//imgGenerator functie
function imgGenerator(source, klasse){
    const imgt = document.createElement("img");
    imgt.setAttribute("class",source);
    imgt.setAttribute("src", klasse);
    return imgt;
}
//<img></img>
function imgReplace(sourcepara, klasse){
    const imgC = document.createElement("img");
    imgC.setAttribute("src", sourcepara);
    imgC.setAttribute("class",klasse);
    return imgC;
}

function nameInput() {
    logElement.appendChild(inputGenerator("Yigit", "nameClass", "", "log"));
    choiceElement.appendChild(inputGenerator("next question", "klassee", "nameInput()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","x"))
}

//choice ja
function choiceYes1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";
    
    logElement.appendChild(pTagGenerator("Yes!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("Yes!", "damage", "choiceYes1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/cafeIMP.jpg","imgSizeChanger"))
}

//choice nee
function choiceNo1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";

    logElement.appendChild(pTagGenerator("No!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("No!", "damage", "choiceNo1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","imgSizeChanger"))
}