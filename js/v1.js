/*
1) Leeres Array zum Speichern der aufgedeckten Karten (openedCards)
2) Karten richtig erzeugen (type)[1,1,2,2,3,3,4,4.........8,8]
3) Karten mischen (shuffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler
6) Kartenlogik:
    6.1) prüfen ob karte bereits found + 
    prüfen wie viele Karten bereits aufgedeckt sind? (0,1,2)
    6.2) wenn weniger als 2 -> aufdecken
    6.3) Erkennen ob zwei gleiche Karten 
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken
*/
var superToggle = function(element, class0, class1) {
    element.classList.toggle(class0);
    element.classList.toggle(class1);
  }
  var startTime = Math.floor(Date.now() / 1000)
function startTimeCounter(){
    var now = Math.floor(Date.now() / 1000)
    var diff = now - startTime
    var m = Math.floor(diff / 60)
    var s = Math.floor(diff % 60)
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById("County").innerHTML = m+ ":" +s
    if (founded != 16) {
        var t = setTimeout(startTimeCounter, 500)   
    }
}

function checkTime(i){
    if (i < 10) {
        i ="0"+i
    }
    return i
}


function generate() {
    let div = document.getElementById('card-deck');
while(div.firstChild){
    div.removeChild(div.firstChild);
}
cardTypes = shuffle(numberCards)
openedCards = []
founded =0
counter =0
reihe =0;
bonus =1;
let element = document.getElementsByClassName("retry")[0]
element.classList.toggle("hide")
let county = document.getElementsByTagName("h1")
county[0].innerHTML ="Points "+counter
document.getElementById("County").innerHTML = "00:00"
for (let index = 0; index < numberCards; index++) {
    let c = document.createElement('div')
    c.id = index
    c.type = cardTypes[index]
    c.classList.add("card")
    c.classList.add("wasclosed") 
    let ddd = farben[cardTypes[index]-1]
    let dddd = ddd+".jpg"
    c.addEventListener('click',flipp)
    let ccc = document.createElement('div')
    ccc.className="opens"
    let cccc = document.createElement('div')
    cccc.className ="flipped1"
    cccc.style.backgroundImage = `url(../pics/${dddd})`
    c.appendChild(ccc)
    c.appendChild(cccc)
    p.appendChild(c)
}
}
var cooldown =0
var cool2 =0
var nowy =0
var nowie =0
var founded =0
var counter =0
let reihe =0;
let bonus =1;
const numberCards = 16
let openedCards = []
let cardTypes=[]
let farben = ["1", "2", "3", "4","5","6","7","8"]
cardTypes = shuffle(numberCards)
var p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.id = index
        c.type = cardTypes[index]
        c.classList.add("card")
        c.classList.add("wasclosed") 
        let ddd = farben[cardTypes[index]-1]
        let dddd = ddd+".jpg"
        //c.classList.add(ddd)
        c.addEventListener('click',flipp)
        let ccc = document.createElement('div')
        ccc.className="opens"
        let cccc = document.createElement('div')
        cccc.className ="flipped1"
        cccc.style.backgroundImage = `url(../pics/${dddd})`
        c.appendChild(ccc)
        c.appendChild(cccc)
        p.appendChild(c)
}


let cc = document.createElement('h1')

function flipp(event){
    //if(!this.classList.contains('found'))
   
        openCard(this)
        
    
}
function openCard(c){
    console.log(c)
    if (document.getElementById("County").innerHTML == "00:00") {
        startTime = Math.floor(Date.now() / 1000)
        startTimeCounter()
        if (document.getElementsByClassName("upp")[0].classList.contains("hide")) {
            document.getElementsByClassName("upp")[0].classList.toggle("hide")
        }
    }
    if (openedCards.length < 2 && !c.classList.contains("found")) {
        if (openedCards.length ==1)  {
            if (openedCards[0].id == c.id) {
                nowy = (Date.now() / 1000)
                cool2 = (Date.now() / 1000)
                if (nowy - cooldown > 0.4) {
                    openedCards.pop()
                //c.classList.toggle("flipped")
                c.classList.toggle("open")
                reihe -=2
                }
            }

            else{
                nowie = (Date.now() / 1000)
                cooldown = (Date.now() / 1000)
                    if (nowie - cool2 > 0.4) {
                        c.classList.toggle('open')
                        openedCards.push(c)
                        
                    }  
            }  
        }
        else{
            nowie = (Date.now() / 1000)
            cooldown = (Date.now() / 1000)
                if (nowie - cool2 > 0.7) {
                    c.classList.toggle('open')
                    openedCards.push(c)
                    
                }  
        }
        if (openedCards.length == 2) {
            
            if(openedCards[0].type == openedCards[1].type){
                //alert('gleich')
                setTimeout(
                    ()=>{
                        for (let index = openedCards.length; index > 0; index--) {
                            openedCards.pop().classList.toggle("found")
                            //superToggle(openedCards.pop(), "found","open")
                            console.log(c)
                            founded+=1
                            
                        }
                        if (founded == 16) {
                            let element = document.getElementsByClassName("retry")[0]
                                element.classList.toggle("hide")
                            element.addEventListener('click',generate) 
                        }
                        if (reihe <=2) {
                            counter +=100* bonus
                            bonus +=1
                            reihe =0
                        }
                        else{
                            counter +=100 
                            reihe =0
                            bonus =2
                        }
                        let county = document.getElementsByTagName("h1")
                            county[0].innerHTML ="Points "+counter
                    },
                    1000
                )
            
            }
            else{
                setTimeout(()=>{
                    for (let index = openedCards.length; index >0; index--) {
                        openedCards.pop().classList.toggle('open')
                    } 
                }, 1000)
            }
        }
    }
        
    reihe +=1
}
function shuffle(laenge) {
    let arra1 = []
    for (let index = 0; index < laenge/2; index++) {
        arra1.push(index+1)
        arra1.push(index+1)
    }
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


