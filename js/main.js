//variables used for getting to their unique id's 
var choiceElement = document.getElementById("choice");
var logElement = document.getElementById("log");
var ArtElement = document.getElementById("art");
var GoldElement = document.getElementById("gold");
var PowerElement = document.getElementById("power");

//object voor inv en gold
var playerStats = {
    gold: 0,
    power: [],
    name: ''
}

//object characters
var char1 = {
    id: 1,
    name: "Broly",
    race: "Saiyan",
    hp: 100,
    powerlevel: 30000
}

var char2 = {
    id: 0,
    name: "Gohan",
    race: "Saiyan",
    hp: 77,
    powerlevel: 12000
}


//*When game starts, these items getting loaded in.
//TODO: Might aswell put the whole story with generators in here^^
function startGame() {
    logElement.innerHTML = "Greetings Saiyan! Are you ready for your adventure?";
    choiceElement.appendChild(inputGenerator("name", "inputClass","nameInput()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "damage nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "damage nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));

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
    
    //char1.hp = char1.hp - 5;
    playerStats.gold += 5;
    GoldElement.innerHTML = playerStats.gold;



    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Yes!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("Yes!", "nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    choiceElement.appendChild(pTagGenerator("No!", "nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/cafeIMP.jpg","imgSizeChanger"))
}

//*choice nee
function choiceNo1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";

    playerStats.gold -= 5;
    GoldElement.innerHTML = playerStats.gold;

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("No!", "damage", "", "log"));
    choiceElement.appendChild(pTagGenerator("No!", "nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","imgSizeChanger"))
}