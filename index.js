let countel= document.getElementById("count-el")

let count=0
function increment() {
    count=count+1
    countel.innerText=count
}


let saveEL=document.getElementById("save-el")
function save(){
    saveEL.textContent+=count+" - "
    count=0
    countel.innerText=count
    console.log(count)
}