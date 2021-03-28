//variables used for getting to their unique id's 
var choiceElement = document.getElementById("choice");
var logElement = document.getElementById("log");
var ArtElement = document.getElementById("art");
var ItemsElement = document.getElementById("items");
var GoldElement = document.getElementById("gold");
var InventoryElement = document.getElementById("inventory");

//*When game starts, these items getting loaded in.
//TODO: Might aswell put the whole story with generators in here^^
function startGame() {
    logElement.innerHTML = "Greetings Saiyan! Are you ready for your adventure?";
    choiceElement.appendChild(inputGenerator("name", "inputClass","nameInput()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "damage", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "damage", "choiceNo1()", "choice"));

}

//* Paragraph tag generator. Creates a p tag in either choice or log id(developer chooses where)
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

//* Creates an input field, (not fully working due having no buttons)
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

//* Image Generator, use in a choice function. Not in onload
function imgReplace(sourcepara, klasse){
    const imgC = document.createElement("img");
    imgC.setAttribute("src", sourcepara);
    imgC.setAttribute("class",klasse);
    return imgC;
}

//*input name choice
function nameInput() {
    logElement.appendChild(inputGenerator("Yigit", "nameClass", "", "log"));
    choiceElement.appendChild(inputGenerator("next question", "klassee", "nameInput()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","x"))
}

//*choice ja
function choiceYes1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";
    
    char1.hp = char1.hp - 5;
    GoldElement.innerHTML = GoldElement += 5;
    
    logElement.appendChild(pTagGenerator("Yes!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("Yes!", "black nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "black nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/cafeIMP.jpg","imgSizeChanger"))
}

//*choice nee
function choiceNo1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";

    logElement.appendChild(pTagGenerator("No!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("No!", "black nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "black nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","imgSizeChanger"))
}

var char1 = {
    id: 1,
    naam: "Broly",
    race: "Saiyan",
    hp: 100
}


