//variables used for getting to their unique id's 
var choiceElement = document.getElementById("choice");
var logElement = document.getElementById("log");
var ArtElement = document.getElementById("art");
var GoldElement = document.getElementById("gold");
var PowerElement = document.getElementById("power");

//object voor inv en gold
var playerStats = {
    gold: 0,
    power: 0,
    name: ''
}

//object characters

var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

var characters = [
    char1 = {
        id: 1,
        name: "Broly",
        race: "Saiyan",
        hp: 100,
        ki: 200,
        powerlevel: 30000
    },

    char2 = {
        id: 2,
        name: "Vegeta",
        race: "Saiyan",
        hp: 500,
        ki: 900,
        powerlevel: 5000
    },
    
    char3 = {
        id: 3,
        name: "Yigit",
        race: "Findik",
        hp: 10,
        ki: 24,
        powerlevel: 1
    }
]
/*
for(a = 0; a < characters.length; a++) {
    playerStats.power = characters[a.powerlevel]; 
}
PowerElement.innerHTML = playerStats.power;  
*/
playerStats.power = char1.powerlevel + char2.powerlevel + char3.powerlevel;
PowerElement.innerHTML = playerStats.power;

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

    for (i = 0; i < characters.length; i++) {
        cell1.innerHTML = characters[i].id;
        cell2.innerHTML = characters[i].name;
        cell3.innerHTML = characters[i].race;
        cell4.innerHTML = characters[i].hp;
        cell5.innerHTML = characters[i].ki;
        console.log(characters[i])
    }

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