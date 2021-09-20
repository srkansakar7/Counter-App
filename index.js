let count=0
let saveEl= document.getElementById("save-El")

function increment(){
    count+=1
    document.getElementById("count").innerText= count
    
}

function save(){
    let countStr= count + " - "
    saveEl.textContent += countStr
    document.getElementById("count").innerText= 0
    count=0
    console.log(count)
}
