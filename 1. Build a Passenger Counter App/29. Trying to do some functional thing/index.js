let count = 0
let select = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let decreBtn = document.getElementById("decrement-btn")
let ele = document.getElementById("elementos")


function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0){
        decreBtn.disabled = false;
        count -= 1
        countEl.textContent = count
    }
    else if (count == 0){
        decreBtn.disabled = true;
    }
    
}

function chooseTaste() {
    select = ele.options[ele.options.selectedIndex] 
    
    if (count == 0) {
        window.alert("Primeiro você deve adicionar a quantidade de Dindin")
        ele.options.selectedIndex = 0
        select = ele.options.selectedIndex
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

function clooseOrder() {
    console.log(countEl.textContent)
}

console.log("Let's count the number of dindin and them tastes which are ordering by people!")
