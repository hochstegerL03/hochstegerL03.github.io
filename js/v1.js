var test =0
var buffer = []
var oeffen = []
function change(){
    if (buffer.length == 2) {
        that = document.getElementById(buffer[0])
        thaty = document.getElementById(buffer[1])
        if (that.type == thaty.type) {
            for (let index = 0; index <2; index++) {
                document.getElementById(buffer[0]).classList.add("oeffen")
               oeffen.push(buffer[index]) 
                buffer.splice(index,1)
            }
    
        }
        for (let index = 0; index < buffer.length; index++) {
            that = document.getElementById(buffer[index])
            that.classList.toggle("zu")
        }
        
        buffer = []
    }
    else if (!this.classList.contains("oeffen")){
        this.classList.toggle("zu") 
        if(buffer.length >0){
            if (buffer[0] != this.id) {
                buffer.push(this.id)
                    
            }
            else{
                buffer = []
            }
        }
        else{
            buffer.push(this.id)
        }
                 
        
    }
}
let anzahl = []
for (let index = 1; index < 9; index++) {
    anzahl.push([index])
    console.log(index)
}

let classen = ["flipped","flipped2", "flipped3", "flipped4", "flipped5", "flipped6", "flipped7", "flipped8"]
console.log("Test")
let xdxdxd = 1
let xd = document.getElementById("card-deck")
//let dxd = document.getElementsByClassName("deck")
//let xdxd = dxd[0]
for (let index = 0; index < 16; index++) {
    var testy = Math.floor(Math.random() * anzahl.length)
    while (anzahl[testy].length ==3) {
        testy+=1
        if (testy > anzahl.length-1) {
            testy =0
        }
    }
    var div = document.createElement("div");
    div.classList.add("card")
    div.classList.add(classen[anzahl[testy][0]-1])
    console.log(classen[anzahl[testy][0]])
    div.classList.add("zu")
    div.innerHTML = anzahl[testy][0];
    div.id = index+1
    div.type = anzahl[testy][0]
    anzahl[testy].push("testy")
    div.addEventListener('click', change)
    xd.appendChild(div);
}



