function change(){
    this.classList.toggle("flipped")
    setTimeout(() => {  this.classList.toggle("flipped");}, 500);
}


console.log("Test")
let c = document.querySelectorAll('.card')
console.log(c)

for (const ttt of c) {
    ttt.addEventListener('click', change)
}
let xd = document.getElementById("card-deck")
for (let index = 0; index < 16; index++) {
    
    var div = document.createElement("div");
    div.classList.add("card")
    div.innerHTML = index+1;
    xd.appendChild(div);
}
