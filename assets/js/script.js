// Declaring variables to record outcomes
let headsTotal = 0
let tailsTotal = 0

// Declaring HTML elements as variables
let image = document.querySelector("#image")
image.src = "./assets/images/penny-heads.jpg"

let flipper = document.querySelector("#flip")

let reset = document.querySelector("#clear")

// Creating function to calculate percentages
function findPercent(x, y) {
    let total = x + y
    if (total != 0) {
        return Math.round((100 * x) / total);
    } else {
        return 0;
    }
}

// Creating function to update the HTML elements
function updateView() {
    document.querySelector("#heads-percent").innerText = findPercent(headsTotal, tailsTotal) + "%"
    document.querySelector("#tails-percent").innerText = findPercent(tailsTotal, headsTotal) + "%"
    document.querySelector("#heads").innerText = headsTotal
    document.querySelector("#tails").innerText = tailsTotal
}

// Adding event listener to the flipper button
flipper.addEventListener('click', function(){
    if (Math.round(Math.random()) == 0){
        image.src = "./assets/images/penny-heads.jpg"
        headsTotal ++
        document.querySelector("#status").innerText = "You have rolled Heads!"
        updateView()
    } else {
        image.src = "./assets/images/penny-tails.jpg"
        tailsTotal ++
        document.querySelector("#status").innerText = "You have rolled Tails!"
        updateView()
    }
})

// Adding event listener to the reset button
reset.addEventListener('click', function(){
    headsTotal = 0
    tailsTotal = 0
    document.querySelector("#status").innerText = ""
    updateView()
})