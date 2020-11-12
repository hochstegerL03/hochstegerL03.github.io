function change(){
    this.style.backgroundColor = 'yellow'
}


console.log("Test")
let c = document.querySelectorAll('.card')
console.log(c)

for (const ttt of c) {
    ttt.addEventListener('click', change)
}
