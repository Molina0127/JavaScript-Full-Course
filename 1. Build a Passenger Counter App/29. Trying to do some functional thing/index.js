let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let ele = document.getElementById("elementos")
let select = 0;
let a = false;
let b;


function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function oi() {
    window.alert("Iihh trocou")
}

function chooseTaste() {
    select = ele.options[ele.options.selectedIndex] 
    
    if (count == 0) {
        window.alert("Primeiro você deve adicionar a quantidade de Dindin")
    }

    if (count != 0) {
        let resultado = confirm(`Você tem certeza que quer ${count} Dindin do sabor ${select.text} ?`)
    
        if (resultado == true){
            if (select.value != 0 && count != 0) {
                let countStr = count + " " + select.text + " - "
                saveEl.textContent += countStr
        
                countEl.textContent = 0
                count = 0
            }
        }
        else {
            count = 0
            ele.options.selectedIndex = 0
            select = ele.options.selectedIndex    
        }
    }

}

function save() {
    // let countStr = count + " " + select.text + " - "
    // saveEl.textContent += countStr

    countEl.textContent = 0
    count = 0
}

function clooseOrder() {
    console.log(saveEl.textContent)
}

console.log("Let's count the number of dindin and them tastes which are ordering by people!")
