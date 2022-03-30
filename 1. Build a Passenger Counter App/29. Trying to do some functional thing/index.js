let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}

function chooseTaste() {
    let ele = document.getElementById("elementos")
    let select = ele.options[ele.options.selectedIndex] 
    console.log(select)
}

console.log("Let's count people on the subway!")
