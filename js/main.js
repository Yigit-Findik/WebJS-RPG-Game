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

playerStats.power = char1.powerlevel + char2.powerlevel + char3.powerlevel;
PowerElement.innerHTML = playerStats.power;

//*When game starts, these items getting loaded in.
//!TODO: Might aswell put the whole story with generators in here^^
function startGame() {
    logElement.innerHTML = "Greetings Saiyan! Whats your name?";
    //choiceElement.appendChild(pTagGenerator("Yes!", "damage nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    //choiceElement.appendChild(pTagGenerator("No!", "damage nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
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

//* Image Generator, use in a choice function. Not in onload
function imgReplace(sourcepara, klasse){
    const imgC = document.createElement("img");
    imgC.setAttribute("src", sourcepara);
    imgC.setAttribute("class",klasse);
    return imgC;
}



//*replace table 
function replaceTable() {
    table.innerHTML = '';
    for (i = 0; i < characters.length; i++) {
        //table.innerHTML = '';
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = characters[i].id;
        cell2.innerHTML = characters[i].name;
        cell3.innerHTML = characters[i].race;
        cell4.innerHTML = characters[i].hp;
        cell5.innerHTML = characters[i].ki;
        console.log(characters[i])
    }
}

//*choice ja
function choiceYes1() {
    choiceElement.innerHTML = "";
    ArtElement.innerHTML = "";
    replaceTable()

    playerStats.gold += 5;
    GoldElement.innerHTML = playerStats.gold;

    characters[0].hp -= 5;
    characters[1].hp -= 5;
    characters[2].hp -= 5;

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Yes!", "blue", "", "log"));
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
    logElement.appendChild(pTagGenerator("No!", "blue", "", "log"));
    choiceElement.appendChild(pTagGenerator("No!", "nes-balloon from-left nes-pointer", "choiceNo1()", "choice"));
    choiceElement.appendChild(pTagGenerator("Yes!", "nes-balloon from-left nes-pointer", "choiceYes1()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/detroit.jpg","imgSizeChanger"))
}