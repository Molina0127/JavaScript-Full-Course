let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let ele = document.getElementById("elementos")
let select = 0;

function increment() {
    count += 1
    countEl.textContent = count
}

function chooseTaste() {
    select = ele.options[ele.options.selectedIndex] 
    console.log(select.value)
}

function save() {
    let countStr = count + " " + select.text + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}

console.log("Let's count the number of dindin and them tastes which are ordering by people!")
