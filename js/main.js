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
        name: "Gohan",
        race: "Half Saiyan Half Human",
        hp: 250,
        ki: 2000,
        powerlevel: 100000
    },

    char2 = {
        id: 2,
        name: "Picollo",
        race: "Namekian",
        hp: 29,
        ki: 900,
        powerlevel: 20050
    },
    
    char3 = {
        id: 3,
        name: "Krillin",
        race: "Human",
        hp: 12,
        ki: 1200,
        powerlevel: 15000
    },

    char4 = {
        id: 4,
        name: "Tien",
        race: "Three Eyed People",
        hp: 20,
        ki: 200,
        powerlevel: 9000
    },

    char5 = {
        id: 5,
        name: "Yamcha",
        race: "Human",
        hp: 40,
        ki: 120,
        powerlevel: 4250
    },

    char6 = {
        id: 6,
        name: "Goku",
        race: "Saiyan",
        hp: "knocked out",
        ki: 3,
        powerlevel: 125
    },

    char7 = {
        id: 7,
        name: "Vegeta",
        race: "Saiyan",
        hp: "knocked out",
        ki: 2,
        powerlevel: 100
    },

    char8 = {
        id: 8,
        name: "Future Trunks",
        race: "Half Saiyan Half Human",
        hp: "knocked out",
        ki: 5,
        powerlevel: 150
    },

]

//*When game starts, these items getting loaded in.
//!TODO: Might aswell put the whole story with generators in here^^
function startGame() {
    logElement.innerHTML = "";
    logElement.appendChild(pTagGenerator("Cell: Gohan. This is it, it ends here!", "nes-text is-error", "continue1()", "log"));
    choiceElement.appendChild(pTagGenerator("Continue", "nes-btn", "continue1()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/cell1.png", "celloneimage"))
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
    playerStats.power = char1.powerlevel + char2.powerlevel + char3.powerlevel + char4.powerlevel + char5.powerlevel;
    PowerElement.innerHTML = playerStats.power;
    for (i = 0; i < characters.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = characters[i].id;
        cell2.innerHTML = characters[i].name;
        cell3.innerHTML = characters[i].race;
        cell4.innerHTML = characters[i].hp;
        cell5.innerHTML = characters[i].ki;
        cell6.innerHTML = characters[i].powerlevel;
    }
}

//*choice continue
function continue1() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";
    
    logElement.scrollTop = logElement.scrollHeight;
    choiceElement.appendChild(pTagGenerator("Continue", "nes-btn", "continue2()", "choice"))
    logElement.appendChild(pTagGenerator("Cell: First i'll destroy you, than your friends and than this worthless planet. But before i do, i want you to remember something...", "nes-text is-error", "", "log"))
    ArtElement.appendChild(imgReplace("assets/images/cell1.png", "celloneimage"))
}

function continue2() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    replaceTable()
    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Cell: I WILL LIVE FOR EVER!","nes-text is-error", "","log"));
    choiceElement.appendChild(pTagGenerator("Continue", "nes-btn", "continue3()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/partyshook.png", "celloneimage"))
}

function continue3() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Goku: You got to be joking, Giving up already? Well thats nothing like the Gohan i know.", "nes-text is-success", "", "log"))
    choiceElement.appendChild(pTagGenerator("continue","nes-btn","continue4()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan2.png", "celloneimage"))
}

function continue4() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("You: D- Dad, where are you?!", "blue", "", "log"))
    choiceElement.appendChild(pTagGenerator("continue","nes-btn","continue5()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan2.png", "celloneimage"))
}

function continue5() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    choiceElement.appendChild(pTagGenerator("continue","nes-btn","continue6()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan3.png", "twoimageart"))
    ArtElement.appendChild(imgReplace("assets/images/gohan4.png", "twoimageart"))
}

function continue6() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Goku: The other world, and thanks to king kai i can telephatically talk to you..","nes-text is-success","","log"));
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue7()","choice"));
    ArtElement.appendChild(imgReplace("assets/images/goku1.png","celloneimage"));
}

function continue7() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Goku: I know you have the power to beat him Gohan, i've sensed it all along. Now, give him the biggest kamehameha you got. I know you can do this Gohan i promise.","nes-text is-success","","log"));
    choiceElement.appendChild(pTagGenerator("Tell current state","nes-btn","continue8()","choice"));
    ArtElement.appendChild(imgReplace("assets/images/goku2.png","celloneimage"));
}

function continue8() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("You: No dad. I can't even use one of my arms anymore and my energy is cut in half. Besides i also feel weaker every second.","blue","","log"));
    logElement.appendChild(pTagGenerator("Gohan: -60 hp", "nes-text is-warning", "", "log"))
    logElement.appendChild(pTagGenerator("Gohan: -12500 power level", "nes-text is-warning", "", "log"))
    char1.hp -= 60
    char1.powerlevel -= 12500
    replaceTable()
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue9()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan6.png","celloneimage"));
}

function continue9() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Goku: Gohan remember what you learned in our training, and trust yourself even if it feels cell having weakened you. Just trust yourself.","nes-text is-success","","log"));
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue10()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/goku3.png","celloneimage"));
}

function continue10() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("You: It's my fault that you died dad, if i only did not get carried away.","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue11()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan7.png","celloneimage"));
}

function continue11() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Goku: If you want to blame anyone on this it would be cell. Make him pay for what he did!","nes-text is-success","","log"));
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue12()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/goku4.png","celloneimage"));
}

function continue12() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Cell: What are you going to do kid, everyone is going to die *evil laughing* ","nes-text is-error","","log"));
    choiceElement.appendChild(pTagGenerator("Continue","nes-btn","continue13()","choice"))
    ArtElement.appendChild(imgReplace("assets/images/cell2.png","celloneimage"));
}

function continue13() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("* Because of Gokus motivation and cell making fun of you. Your saiyan rage is rising upwards where it becomes too dangerous to have it under control *","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Lose your mind","nes-btn","continue14loseyourmind()","choice"))
    choiceElement.appendChild(pTagGenerator("Use kamehameha on cell", "nes-btn", "continue14kamehameha()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohan8.jpg","gohanlongimg"));
}

function continue14kamehameha() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    char1.powerlevel += 50000
    char1.ki += 20000
    replaceTable()
    logElement.appendChild(pTagGenerator("You: Ka...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Me...", "nes-btn", "continue14kamehameha2()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohankame1.png","celloneimage"));
}

function continue14kamehameha2() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    char1.powerlevel += 50000
    char1.ki += 20000
    replaceTable()
    logElement.appendChild(pTagGenerator("You: Me...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Ha...", "nes-btn", "continue14kamehameha3()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohankame2.png","celloneimage"));
}

function continue14kamehameha3() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    char1.powerlevel += 50000
    char1.ki += 20000
    replaceTable()
    logElement.appendChild(pTagGenerator("You: Ha...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Me...", "nes-btn", "continue14kamehameha4()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohankame3.png","celloneimage"));
}

function continue14kamehameha4() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    char1.powerlevel += 50000
    char1.ki += 20000
    replaceTable()
    logElement.appendChild(pTagGenerator("You: Me...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Haaaa...", "nes-btn", "continue15()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohankame4.png","celloneimage"));
}

function continue15() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    char1.powerlevel += 70000
    char1.ki += 70000
    replaceTable()
    logElement.appendChild(pTagGenerator("You: Haaaa...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Continue", "nes-btn", "continue16()", "choice"))
    ArtElement.appendChild(imgReplace("assets/images/gohankame5.jpg","gohanlongimg"));
}

function continue16() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("Cell: AAAHHHH","nes-text is-error","","log"));
    logElement.appendChild(pTagGenerator("System: Cell died, epic victory","nes-text is-success","","log"));
    ArtElement.appendChild(imgReplace("assets/images/celldeath.jpg","celloneimage"));
}



function continue14loseyourmind() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    logElement.appendChild(pTagGenerator("You: Thats it! You are done for...","blue","","log"));
    choiceElement.appendChild(pTagGenerator("Continue", "nes-btn", "continue14loseyourmind2()", "choice"));
    ArtElement.appendChild(imgReplace("assets/images/gohan8.jpg","gohanlongimg"));
}

function continue14loseyourmind2() {
    ArtElement.innerHTML = "";
    choiceElement.innerHTML = "";

    logElement.scrollTop = logElement.scrollHeight;
    var x = Math.floor((Math.random() * 2) + 1);
    if (x == 1) {
        logElement.appendChild(pTagGenerator("You: i couldn't go super saiyann", "blue", "", "log"));
        logElement.appendChild(pTagGenerator("*Gohan failed and lost more strength*", "nes-text is-warning", "", "log"));
        char1.powerlevel -= 30000
        replaceTable()
        ArtElement.appendChild(imgReplace("assets/images/gohanfail.jpg","celloneimage"));
    }
    else if (x == 2) {
        logElement.appendChild(pTagGenerator("You: you are dead now!", "blue", "", "log"));
        logElement.appendChild(pTagGenerator("*Gohan is succeeding and his power level is rising*", "nes-text is-warning", "", "log"));
        char1.powerlevel += 150000
        replaceTable()
        ArtElement.appendChild(imgReplace("assets/images/gohansuccess.jpg","celloneimage"));
    }
}