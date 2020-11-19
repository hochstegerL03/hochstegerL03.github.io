var test =0
var buffer = []
function change(){
    if (test ==2) {
        if (buffer[0].type == buffer[1].type) {
            
        }
        for (let index = 0; index < buffer.length; index++) {
            that = document.getElementById(buffer[index])
            that.classList.toggle("flipped")
        }
        test =0
        buffer = []
    }
    else{
        this.classList.toggle("flipped")
        test +=1 
        buffer.push(this.id)
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let moeglichkeiten = ["1","2","3","4","5","6","7","8"]
console.log("Test")
let xd = document.getElementById("card-deck")
//let dxd = document.getElementsByClassName("deck")
//let xdxd = dxd[0]
for (let index = 0; index < 16; index++) {
    
    var div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = index+1;
    div.id = index+1
    div.addEventListener('click', change)
    xd.appendChild(div);
}



